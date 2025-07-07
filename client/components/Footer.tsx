import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand mb-4">ARZ Host</h3>
            <p className="text-gray-300 mb-4">
              Professional VPS hosting solutions built for reliability,
              performance, and peace of mind.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Website:{" "}
                <a
                  href="https://arzhost.com"
                  className="text-brand hover:underline"
                >
                  arzhost.com
                </a>
              </p>
              <p>Phone: +1 (631) 594-8060</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://arzhost.com/vps/"
                  className="hover:text-brand transition-colors"
                >
                  VPS Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/lifetime-web-hosting/"
                  className="hover:text-brand transition-colors"
                >
                  Lifetime Web Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/hosting/cheap-vps-server-hosting-dallas/"
                  className="hover:text-brand transition-colors"
                >
                  Dallas VPS Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/"
                  className="hover:text-brand transition-colors"
                >
                  Our Hosting Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://www.arzhost.com/about-us/"
                  className="hover:text-brand transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/contact-us/"
                  className="hover:text-brand transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://www.arzhost.com/terms-conditions/"
                  className="hover:text-brand transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/privacy-policy/"
                  className="hover:text-brand transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.arzhost.com/disclaimer/"
                  className="hover:text-brand transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ARZ Host. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
