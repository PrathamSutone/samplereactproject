'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand and Vision */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-blue-600 text-2xl font-bold">
              MORENT
            </Link>
            <p className="mt-2 text-gray-600 max-w-xs">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-blue-600">How it works</Link></li>
              <li><Link href="/featured" className="text-gray-600 hover:text-blue-600">Featured</Link></li>
              <li><Link href="/partnership" className="text-gray-600 hover:text-blue-600">Partnership</Link></li>
              <li><Link href="/business-relation" className="text-gray-600 hover:text-blue-600">Business Relation</Link></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-600 hover:text-blue-600">Events</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/podcast" className="text-gray-600 hover:text-blue-600">Podcast</Link></li>
              <li><Link href="/invite" className="text-gray-600 hover:text-blue-600">Invite a friend</Link></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><Link href="https://discord.com" className="text-gray-600 hover:text-blue-600">Discord</Link></li>
              <li><Link href="https://instagram.com" className="text-gray-600 hover:text-blue-600">Instagram</Link></li>
              <li><Link href="https://twitter.com" className="text-gray-600 hover:text-blue-600">Twitter</Link></li>
              <li><Link href="https://facebook.com" className="text-gray-600 hover:text-blue-600">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">©2022 MORENT. All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
              Privacy & Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
