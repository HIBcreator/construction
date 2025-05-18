import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-accent mr-2"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
              <span className="font-bold text-xl">BuildTech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of innovative construction and engineering solutions for commercial, industrial, and
              infrastructure projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Industrial Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Infrastructure Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Safety Protocols
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Construction Way
                  <br />
                  Chicago, IL 60601
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@buildtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BuildTech Solutions. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
