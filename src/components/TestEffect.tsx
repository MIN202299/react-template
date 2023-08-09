export default function TestEffect() {
  const can$ = useRef<HTMLCanvasElement>(null!)
  const ctx = useRef<CanvasRenderingContext2D>(null!)

  // mounted
  useEffect(() => {
    const canvas = can$.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.current = canvas.getContext('2d')!

    function handleResize() {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height

      draw()
    }

    function draw() {
      const { width, height } = ctx.current.canvas
      ctx.current.clearRect(0, 0, width, height)
      new LightingCircle(ctx.current, 200, 200, 100).draw()
    }

    draw()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      grid
      w-100vw
      h-100vh
      bg="gray-950"
      place-items-center>
      <canvas
        w-full
        h-full
        block
        ref={can$} />
    </div>
  )
}

export class LightingCircle {
  private ctx: CanvasRenderingContext2D
  private x: number
  private y: number
  private radius: number

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = 'white'
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.closePath()
    this.ctx.stroke()

    // 第一层阴影
    this.ctx.beginPath()
    this.ctx.shadowBlur = 20
    this.ctx.shadowColor = 'white'
    this.ctx.strokeStyle = 'white'
    this.ctx.shadowOffsetX = -10000
    this.ctx.shadowOffsetY = -10000
    this.ctx.lineWidth = 10
    this.ctx.arc(this.x + 10000, this.y + 10000, this.radius, 0, Math.PI * 2, false)
    this.ctx.closePath()
    this.ctx.stroke()
  }
}
