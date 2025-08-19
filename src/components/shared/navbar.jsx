'use client';
import { useState } from 'react';
import { languageData, navData } from '@/data/navdata';
import { usePathname } from 'next/navigation';
import DropDown from './dropdown';
import Container from './container';
import Logo from './logo';

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const path = usePathname();
  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <nav className="w-full px-4 py-3">
      <Container>
        <div className=" flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Nav Menu */}
          <div className="hidden md:flex items-center gap-8 ">
            {navData.map((item) =>
              item.underRoutes ? (
                <DropDown
                  key={item.label}
                  toggleDropdown={toggleDropdown}
                  closeDropdown={() => setOpenDropdown(null)}
                  openDropdown={openDropdown}
                  item={item}
                />
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={` ${
                    path === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  } font-semibold  `}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:flex">
              <button
                onClick={() => toggleDropdown('language')}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <span className="text-lg">🇺🇸</span>
                <span className="font-medium">English</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {languageData?.map((lang) => (
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {lang.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white sm:tex-base text-sm sm:px-6 px-4 py-2 rounded-sm  font- transition-colors">
              List Property
            </button>
          </div>
          {/* CTA */}
        </div>
      </Container>

      {/* Close dropdown on backdrop click */}
      {openDropdown && <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />}
    </nav>
  );
}
