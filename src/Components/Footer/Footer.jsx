import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content mt-16">
      {/* Top Footer */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
        {/* Logo & About */}
        <aside>
          <h2 className="text-3xl font-extrabold text-accent mb-4">SnapFix</h2>
          <p className="text-sm leading-relaxed">
            Fast, reliable, and trusted home service solutions. SnapFix connects
            you with top professionals for your daily needs.
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-4 text-accent">
            Services
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover hover:text-primary transition">
                Home Cleaning
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Plumbing
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Electrician
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Gardening
              </a>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-4 text-accent">
            Company
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Contact
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Careers
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Become a Provider
              </a>
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-4 text-accent">
            Legal
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover hover:text-primary transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-200 py-4">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">
            © {new Date().getFullYear()} SnapFix. All rights reserved.
          </p>
          <div className="flex gap-5 text-lg">
            <a href="#" className="hover:text-accent transition">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-accent transition">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-accent transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
