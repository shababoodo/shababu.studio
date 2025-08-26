// Example usage in a Next.js page or component
'use client'
import ShababooLogo from './ShababooLogo'

export default function Demo() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
      <ShababooLogo className="w-[600px] h-auto" stroke="#111827" fill="#4471c1" strokeWidth={3} duration={2.2} />
    </div>
  )
}