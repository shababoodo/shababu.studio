'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Shababu</h3>
            <p className="text-sm">
              Crafting exceptional experiences through innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal Information</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              <a href="mailto:hello@shababu.xyz" className="hover:text-white transition-colors">
                hello@shababu.xyz
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Shababu Systems Ltd. All rights reserved.</p>
            <p>
              Company No. 16621448 | 
              <a 
                href="https://find-and-update.company-information.service.gov.uk/company/16621448" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors ml-1"
              >
                Companies House
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}