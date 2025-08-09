import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navlink_logo from "../../assets/Images/SnapFix.svg.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 text-base-content">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 items-start">
        <aside>
          <div className="flex items-center gap-3 mb-4">
            <img src={Navlink_logo} alt="SnapFix Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-accent">SnapFix</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Fast, reliable, and trusted home service platform. Get the best
            professionals near you for any service — anytime.
          </p>
        </aside>

        <div>
          <h6 className="text-lg font-semibold mb-4 text-accent">
            Quick Links
          </h6>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="link link-hover hover:text-accent transition">

                Home

              </Link>
            </li>
            <li>
              <Link to="/all-services" className="link link-hover hover:text-accent transition">

                All Services

              </Link>
            </li>
            <li>
              <Link to="/add-service" className="link link-hover hover:text-accent transition">
                Add Services

              </Link>
            </li>
            <li>
              <Link to="/contact" className="link link-hover hover:text-accent transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4 text-accent">Follow Us</h6>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/md.rakib.hasan.0001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Rakib-Hasan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-200 py-4 text-sm">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SnapFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
