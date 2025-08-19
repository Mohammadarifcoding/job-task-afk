import React from 'react';
import footerImage from '/public/bgFooter.jpg';
import { Mail, Phone } from 'lucide-react';
import Logo from './logo';
import { footerData } from '@/data/footerData';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-4">
      <footer className="relative mt-16 pb-20 rounded-2xl overflow-hidden px-4">
        {/* Background Image */}
        <img
          src={'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'}
          alt="Modern building background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center py-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-300    max-w-lg  mb-8 mx-auto">
            Whether you're buying, renting, or listing — we're here to guide you every step of the
            way.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row  gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 w-[150px] py-3 rounded-md font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send Email
            </button>
            <button className=" bg-white/20 backdrop-blur-sm text-white  w-[150px] py-3 rounded-md font-medium transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call us
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="relative z-10 bg-white rounded-2xl mx-4 md:mx-12 lg:mx-20 shadow-md -mb-6 ">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-10 text-black">
            {/* Logo + tagline */}
            <div className="flex flex-col gap-2  md:col-span-2 col-span-1">
              <Logo />
              <p className="text-sm max-w-[200px] text-gray-800">
                From Listing to Living — Smarter with Arambo.
              </p>
            </div>
            {footerData.map((section) => (
              <div>
                <h4 className="font-semibold mb-3 ">{section.title}</h4>
                <ul className="flex flex-col gap-2 text-sm">
                  {section.links.map((link) => (
                    <Link href={link.href} className="text-gray-700">
                      <li>{link.label}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="relative  text-center text-black font-bold text-sm py-10 ">
        Arambo © 2025
      </div>
    </div>
  );
};

export default Footer;
