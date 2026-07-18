'use client'

import { useState, useRef, useEffect } from 'react'

/**
 * Seamless Integration section with draggable icons and gravity physics (Google Gravity style)
 * Features:
 * - Heading and description
 * - CTA button
 * - Interactive draggable icons with realistic physics simulation
 */
export function SeamlessIntegration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<Map<number, HTMLDivElement>>(new Map())
  const animationFrameRef = useRef<number | null>(null)
  const lastMousePosRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const dragVelocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 })
  
  const integrations = [
    { name: 'Stripe', icon: '/assets/landing_page/seamless_integration/stripe.svg', color: '#645DFC' },
    { name: 'PayPal', icon: '/assets/landing_page/seamless_integration/paypal.svg', color: '#003087' },
    { name: 'Visa', icon: '/assets/landing_page/seamless_integration/visa.svg', color: '#00579F' },
    { name: 'Mastercard', icon: '/assets/landing_page/seamless_integration/mastercard.svg', color: '#1A1A1A' },
    { name: 'Apple Pay', icon: '/assets/landing_page/seamless_integration/apple.svg', color: '#1E1E1E' },
    { name: 'Discover', icon: '/assets/landing_page/seamless_integration/discover.svg', color: '#F08618' },
    { name: 'Adyen', icon: '/assets/landing_page/seamless_integration/adyen.svg', color: '#1DBF57' },
    { name: 'Samsung Pay', icon: '/assets/landing_page/seamless_integration/samsung.svg', color: '#1746A0' },
    { name: 'Alipay', icon: '/assets/landing_page/seamless_integration/alipay.svg', color: '#00A1E9' },
    { name: 'WeChat', icon: '/assets/landing_page/seamless_integration/wechat.svg', color: '#52BE39' },
    { name: 'Neteller', icon: '/assets/landing_page/seamless_integration/neteller.svg', color: '#83BA3B' },
    { name: 'Skrill', icon: '/assets/landing_page/seamless_integration/skrill.svg', color: '#661A5E' },
    { name: 'SEPA', icon: '/assets/landing_page/seamless_integration/sepa.svg', color: '#2284FF' },
  ]

  interface IconState {
    id: number
    x: number
    y: number
    vx: number // velocity x
    vy: number // velocity y
    rotation: number // rotation angle for natural sway
    isDragging: boolean
    isSettled: boolean // Flag to indicate icon has completely settled
  }

  const [icons, setIcons] = useState<IconState[]>(() => {
    // Start icons at top, spread across the container width
    // Ensure all icons are visible by spacing them properly
    const totalIcons = integrations.length
    return integrations.map((_, index) => {
      // Calculate position in a grid pattern
      const cols = 4 // Fixed columns for better spacing
      const row = Math.floor(index / cols)
      const col = index % cols
      
      return {
        id: index,
        x: 100 + col * 150 + Math.random() * 50, // Spread horizontally
        y: -100 - row * 100 - Math.random() * 50, // Start above viewport
        vx: (Math.random() - 0.5) * 2, // Random horizontal velocity
        vy: 2 + Math.random() * 3, // Initial downward velocity - stronger
        rotation: (Math.random() - 0.5) * 20, // Random initial rotation
        isDragging: false,
        isSettled: false, // Not settled initially
      }
    })
  })

  const [draggedIcon, setDraggedIcon] = useState<number | null>(null)
  const dragOffsetRef = useRef<{ x: number; y: number } | null>(null)

  // Physics constants - Google Gravity style
  const GRAVITY = 0.9
  const FRICTION = 0.98
  const BOUNCE = 0.2 // Reduced bounce - settle quickly
  const ICON_SIZE = 96
  const ICON_RADIUS = ICON_SIZE / 2

  // Main animation loop
  useEffect(() => {
    let animationId: number | null = null
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      if (!containerRef.current) {
        animationId = requestAnimationFrame(animate)
        return
      }

      const deltaTime = Math.min((currentTime - lastTime) / 16, 2) // Cap deltaTime
      lastTime = currentTime

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const containerWidth = containerRect.width
      const containerHeight = containerRect.height

      setIcons(prevIcons => {
        return prevIcons.map(icon => {
          // Skip physics if dragging or already settled
          if (icon.isDragging || icon.isSettled) return icon

          // Apply gravity
          let newVy = icon.vy + GRAVITY * deltaTime
          let newVx = icon.vx * (FRICTION ** deltaTime)
          
          // Update position
          let newX = icon.x + newVx * deltaTime
          let newY = icon.y + newVy * deltaTime

          // Boundary collision - stop at walls, no bounce
          if (newX - ICON_RADIUS < 0) {
            newX = ICON_RADIUS
            newVx = 0 // Stop, don't bounce
          } else if (newX + ICON_RADIUS > containerWidth) {
            newX = Math.max(ICON_RADIUS, containerWidth - ICON_RADIUS)
            newVx = 0 // Stop, don't bounce
          }
          
          // Ensure icons don't go outside container bounds
          newX = Math.max(ICON_RADIUS, Math.min(containerWidth - ICON_RADIUS, newX))

          if (newY - ICON_RADIUS < 0) {
            newY = ICON_RADIUS
            newVy = 0 // Stop at top
          }

          // Check for collision with other icons FIRST (before ground check)
          let finalX = newX
          let finalY = newY
          let finalVx = newVx
          let finalVy = newVy
          let shouldStackOnOther = false
          let stackY = containerHeight - ICON_RADIUS // Default to ground

          prevIcons.forEach(otherIcon => {
            if (otherIcon.id === icon.id || otherIcon.isDragging) return

            const dx = finalX - otherIcon.x
            const dy = finalY - otherIcon.y
            const horizontalDist = Math.abs(dx)
            const verticalDist = dy
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = ICON_SIZE

            // Check if icons are overlapping
            if (distance < minDistance && distance > 0) {
              // If icons are horizontally aligned (can stack), and this icon is falling onto other
              if (horizontalDist < ICON_SIZE * 0.8 && verticalDist > 0 && otherIcon.y < newY) {
                // Stack on top of this icon
                shouldStackOnOther = true
                const otherTop = otherIcon.y - ICON_RADIUS
                if (otherTop - ICON_SIZE < stackY) {
                  stackY = otherTop - ICON_SIZE
                }
                finalVy = 0 // Stop falling
                finalVx = 0 // Stop horizontal movement
              } else if (distance < minDistance * 0.9) {
                // Icons are overlapping but not stacking - push them apart horizontally only
                if (horizontalDist < verticalDist) {
                  // Push horizontally
                  const pushX = (minDistance - horizontalDist) * 0.5
                  if (dx > 0) {
                    finalX = otherIcon.x + minDistance + ICON_RADIUS
                  } else {
                    finalX = otherIcon.x - minDistance - ICON_RADIUS
                  }
                  finalVx = 0 // Stop horizontal velocity to prevent swapping
                }
              }
            }
          })

          // Check ground collision - only if not stacking on another icon
          if (!shouldStackOnOther && newY + ICON_RADIUS > containerHeight) {
            finalY = containerHeight - ICON_RADIUS
            finalVy = 0 // Stop falling - no bounce
            finalVx = 0 // Stop horizontal movement
          } else if (shouldStackOnOther) {
            finalY = stackY
          }

          // Check if icon has completely settled
          const hasStopped = Math.abs(finalVy) < 0.1 && Math.abs(finalVx) < 0.1
          const isOnGroundOrStacked = finalY >= containerHeight - ICON_RADIUS - 5 || shouldStackOnOther
          
          if (hasStopped && isOnGroundOrStacked) {
            // Completely settled - freeze it
            finalVx = 0
            finalVy = 0
            
            const element = iconsRef.current.get(icon.id)
            if (element) {
              element.style.transform = `translate3d(${finalX - ICON_RADIUS}px, ${finalY - ICON_RADIUS}px, 0) rotate(0deg)`
            }
            return { ...icon, x: finalX, y: finalY, vx: 0, vy: 0, rotation: 0, isSettled: true }
          }

          // Apply rotation only while moving
          let newRotation = icon.rotation
          if (Math.abs(finalVx) > 0.5) {
            newRotation = Math.atan2(finalVy, finalVx) * (180 / Math.PI) * 0.2
          } else {
            newRotation = icon.rotation * 0.9
          }

          // Update DOM position directly for smooth animation
          const element = iconsRef.current.get(icon.id)
          if (element) {
            element.style.transform = `translate3d(${finalX - ICON_RADIUS}px, ${finalY - ICON_RADIUS}px, 0) rotate(${newRotation}deg)`
          }

          return { ...icon, x: finalX, y: finalY, vx: finalVx, vy: finalVy, rotation: newRotation }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent, iconId: number) => {
    e.preventDefault()
    const icon = icons.find(i => i.id === iconId)
    if (!icon) return

    const iconElement = iconsRef.current.get(iconId)
    if (!iconElement || !containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const iconRect = iconElement.getBoundingClientRect()
    
    const offsetX = e.clientX - iconRect.left - ICON_RADIUS
    const offsetY = e.clientY - iconRect.top - ICON_RADIUS

    dragOffsetRef.current = { x: offsetX, y: offsetY }
    lastMousePosRef.current = { x: e.clientX, y: e.clientY, time: Date.now() }
    setDraggedIcon(iconId)
    
    setIcons(prev => prev.map(i => 
      i.id === iconId 
        ? { ...i, isDragging: true, vx: 0, vy: 0, rotation: 0, isSettled: false }
        : i
    ))
    dragVelocityRef.current = { vx: 0, vy: 0 }
  }

  // Handle mouse move and mouse up globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedIcon === null || !dragOffsetRef.current || !containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      
      const x = Math.max(ICON_RADIUS, Math.min(containerRect.width - ICON_RADIUS, e.clientX - containerRect.left - dragOffsetRef.current.x))
      const y = Math.max(ICON_RADIUS, Math.min(containerRect.height - ICON_RADIUS, e.clientY - containerRect.top - dragOffsetRef.current.y))

      // Track mouse position for velocity calculation and natural sway
      const now = Date.now()
      let dragVx = 0
      let dragVy = 0
      let rotation = 0

      if (lastMousePosRef.current) {
        const timeDelta = Math.max(1, now - lastMousePosRef.current.time)
        dragVx = (e.clientX - lastMousePosRef.current.x) / timeDelta * 16
        dragVy = (e.clientY - lastMousePosRef.current.y) / timeDelta * 16
        
        // Natural rotation/sway based on horizontal movement
        // More horizontal movement = more rotation
        rotation = dragVx * 0.5 // Adjust multiplier for more/less sway
        
        lastMousePosRef.current = {
          x: e.clientX,
          y: e.clientY,
          time: now,
        }
      } else {
        lastMousePosRef.current = { x: e.clientX, y: e.clientY, time: now }
      }

      dragVelocityRef.current = { vx: dragVx, vy: dragVy }

      setIcons(prev => prev.map(i => {
        if (i.id === draggedIcon) {
          const element = iconsRef.current.get(i.id)
          if (element) {
            element.style.transform = `translate3d(${x - ICON_RADIUS}px, ${y - ICON_RADIUS}px, 0) rotate(${rotation}deg)`
          }
          return { ...i, x, y, rotation }
        }
        return i
      }))
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (draggedIcon === null) return

      // Calculate throw velocity - Google Gravity style (more responsive)
      let vx = dragVelocityRef.current.vx * 1.2 // Increased multiplier for better throwing
      let vy = dragVelocityRef.current.vy * 1.2

      // Ensure minimum throw velocity if user just clicked without dragging
      if (Math.abs(vx) < 1 && Math.abs(vy) < 1) {
        const angle = Math.random() * Math.PI * 2
        vx = Math.cos(angle) * 8 // Higher initial velocity
        vy = Math.sin(angle) * 8
      }
      
      setIcons(prev => prev.map(i => 
        i.id === draggedIcon 
          ? { 
              ...i, 
              isDragging: false,
              vx,
              vy,
            }
          : i
      ))

      setDraggedIcon(null)
      dragOffsetRef.current = null
      lastMousePosRef.current = null
      dragVelocityRef.current = { vx: 0, vy: 0 }
    }

    if (draggedIcon !== null) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [draggedIcon])

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
            Seamless Integration for a Unified Experience
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-2xl font-body">
            Our AI-powered chatbot works effortlessly with the tools you already use.
          </p>
          <a
            href="#explore-integrations"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-[10px] text-gray-900 font-semibold hover:border-gray-400 transition-colors tap-target font-body"
          >
            Explore All Integrations
          </a>
        </div>

        {/* Interactive Icons Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl bg-gray-50"
        >
          {/* Debug info - shows icon count */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute top-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded z-50">
              Icons: {icons.length} / {integrations.length} | Container ready: {containerRef.current ? 'Yes' : 'No'}
            </div>
          )}
          {icons.map((icon) => {
            const integration = integrations[icon.id]
            if (!integration) {
              return null // Safety check
            }
            return (
              <div
                key={icon.id}
                ref={(el) => {
                  if (el) iconsRef.current.set(icon.id, el)
                  else iconsRef.current.delete(icon.id)
                }}
                className="absolute rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg select-none"
                style={{
                  width: `${ICON_SIZE}px`,
                  height: `${ICON_SIZE}px`,
                  left: 0,
                  top: 0,
                  transform: `translate3d(${icon.x - ICON_RADIUS}px, ${icon.y - ICON_RADIUS}px, 0) rotate(${icon.rotation}deg)`,
                  backgroundColor: integration.color,
                  zIndex: icon.isDragging ? 50 : 10,
                  transition: 'none', // No transition for smooth physics animation
                  willChange: 'transform', // Optimize for animation
                }}
                onMouseDown={(e) => handleMouseDown(e, icon.id)}
              >
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-14 h-14 object-contain pointer-events-none"
                  draggable={false}
                  loading="eager"
                  onError={(e) => {
                    console.error(`Failed to load icon: ${integration.icon}`, e)
                    // Fallback: show text if image fails
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
