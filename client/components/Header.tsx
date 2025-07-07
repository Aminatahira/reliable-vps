import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-brand">
              ARZ Host
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/vps/"
                className="text-gray-600 hover:text-brand transition-colors"
              >
                VPS Server
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-gray-600 hover:text-brand transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://arzhost.com/hosting/cheap-vps-server-hosting-dallas/"
                className="text-gray-600 hover:text-brand transition-colors"
              >
                Cheap VPS Hosting Dallas
              </a>
              <Link
                to="/about"
                className="text-gray-600 hover:text-brand transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-brand transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://arzhost.com/vps/">
              <Button className="bg-brand hover:bg-brand/90 text-white">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
