export const GridBackground = () => {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(hsl(var(--secondary-foreground)/0.2)_1px,transparent_1px)] bg-[size:16px_16px]'>
      <div className='pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,background)]' />
    </div>
  )
}
