'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
    const particleCount = 50

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(200, 200, 200, 0.5)'
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })
      requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    createParticles()
    drawParticles()

    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles()
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900 text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">André R. Pasqualotto - Dev Portfolio</h1>
        <p className="text-xl sm:text-2xl md:text-3xl">Coming Soon...</p>
      </div>
    </div>
  )
}