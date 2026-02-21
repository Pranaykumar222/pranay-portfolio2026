import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-50 rounded-full"
      style={{
        left: pos.x - 160,
        top: pos.y - 160,
        width: 320,
        height: 320,
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        transition: 'left 0.12s ease, top 0.12s ease',
      }}
    />
  )
}
