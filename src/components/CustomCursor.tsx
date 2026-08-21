import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on fine-pointer (mouse) devices — skip on touch
    if (window.matchMedia('(pointer: coarse)').matches) return

    // ── Inject a <style> tag to force cursor:none on EVERYTHING ───────
    // This beats Tailwind's cursor-pointer because html body * !important
    // has higher specificity than any single-class utility.
    const styleEl = document.createElement('style')
    styleEl.id = 'custom-cursor-hide'
    styleEl.textContent = `html, html body, html body * { cursor: none !important; }`
    document.head.appendChild(styleEl)

    // ── State ──────────────────────────────────────────────────────────
    let mouseX   = window.innerWidth  / 2
    let mouseY   = window.innerHeight / 2
    let ringX    = mouseX
    let ringY    = mouseY
    let isHover  = false   // over a button / link / card
    let isText   = false   // over an input / textarea
    let isClick  = false
    let animId: number

    // ── Apply ring visual state ────────────────────────────────────────
    const applyRingState = () => {
      const ring = ringRef.current
      const dot  = dotRef.current
      if (!ring || !dot) return

      if (isHover) {
        ring.style.width           = '56px'
        ring.style.height          = '56px'
        ring.style.borderRadius    = '50%'
        ring.style.borderColor     = 'rgba(6,182,212,1)'
        ring.style.backgroundColor = 'rgba(6,182,212,0.10)'
        ring.style.boxShadow       = '0 0 28px rgba(6,182,212,0.5), inset 0 0 10px rgba(6,182,212,0.15)'
        dot.style.opacity          = '0'
      } else if (isText) {
        ring.style.width           = '3px'
        ring.style.height          = '28px'
        ring.style.borderRadius    = '2px'
        ring.style.borderColor     = 'rgba(6,182,212,0.95)'
        ring.style.backgroundColor = 'rgba(6,182,212,0.95)'
        ring.style.boxShadow       = '0 0 12px rgba(6,182,212,0.7)'
        dot.style.opacity          = '0'
      } else {
        ring.style.width           = '36px'
        ring.style.height          = '36px'
        ring.style.borderRadius    = '50%'
        ring.style.borderColor     = 'rgba(6,182,212,0.45)'
        ring.style.backgroundColor = 'transparent'
        ring.style.boxShadow       = 'none'
        dot.style.opacity          = '1'
      }
    }

    // ── Classify what element the cursor is over ───────────────────────
    const classifyTarget = (el: HTMLElement | null) => {
      if (!el) return
      const interactive = Boolean(el.closest('a, button, [role="button"]') || el.closest('.card-glow-hover'))
      const textInput   = Boolean(el.closest('input, textarea, [contenteditable]'))
      if (interactive !== isHover || textInput !== isText) {
        isHover = interactive
        isText  = textInput
        applyRingState()
      }
    }

    // ── Mouse event handlers ───────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Dot is precision — instant position
      if (dotRef.current && !isHover) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px,${mouseY - 4}px,0) scale(1)`
      }
      // Glow blob (large, blur hides latency) follows instantly
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX - 200}px,${mouseY - 200}px,0)`
      }

      classifyTarget(e.target as HTMLElement)
    }

    const onDown = () => {
      isClick = true
      if (dotRef.current && !isHover) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px,${mouseY - 4}px,0) scale(0.5)`
      }
    }

    const onUp = () => {
      isClick = false
      if (dotRef.current && !isHover) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px,${mouseY - 4}px,0) scale(1)`
      }
    }

    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.opacity = '1'
      if (glowRef.current) glowRef.current.style.opacity = '1'
      if (!isHover && dotRef.current) dotRef.current.style.opacity = '1'
    }

    // ── RAF render loop — ring trails behind cursor ────────────────────
    const render = () => {
      // Lerp: ring chases the mouse with a lag factor
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18

      if (ringRef.current) {
        const hw = isHover ? 28 : isText ? 1.5 : 18
        const hh = isHover ? 28 : isText ? 14  : 18
        const sc = isClick ? (isHover ? 0.88 : 0.72) : 1
        ringRef.current.style.transform =
          `translate3d(${ringX - hw}px,${ringY - hh}px,0) scale(${sc})`
      }

      animId = requestAnimationFrame(render)
    }

    // ── Wire up events ─────────────────────────────────────────────────
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    animId = requestAnimationFrame(render)

    // ── Cleanup ────────────────────────────────────────────────────────
    return () => {
      if (document.head.contains(styleEl)) document.head.removeChild(styleEl)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(animId)
    }
  }, [])

  const base = 'fixed top-0 left-0 pointer-events-none will-change-transform hidden md:block'

  return (
    <>
      {/* Ambient glow blob — large radial gradient that follows mouse */}
      <div
        ref={glowRef}
        className={`${base} z-[9997] w-[400px] h-[400px] rounded-full transition-opacity duration-500`}
        aria-hidden="true"
        style={{
          opacity: 0,
          background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Trailing outer ring — lerps behind cursor */}
      <div
        ref={ringRef}
        className={`${base} z-[9999] rounded-full border transition-[width,height,border-color,background-color,box-shadow,border-radius,opacity] duration-[220ms] ease-out`}
        aria-hidden="true"
        style={{
          opacity: 0,
          width:  '36px',
          height: '36px',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor: 'rgba(6,182,212,0.45)',
        }}
      />

      {/* Precision center dot — instant tracking */}
      <div
        ref={dotRef}
        className={`${base} z-[9999] w-[8px] h-[8px] rounded-full bg-cyan-primary transition-[opacity,transform] duration-[80ms]`}
        aria-hidden="true"
        style={{
          opacity: 0,
          boxShadow: '0 0 10px rgba(6,182,212,0.9), 0 0 20px rgba(6,182,212,0.4)',
        }}
      />
    </>
  )
}
