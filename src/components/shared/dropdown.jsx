import React from 'react';

const DropDown = ({ toggleDropdown, openDropdown, closeDropdown, item }) => {
  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(item.key)}
        className={`flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium`}
      >
        {item.label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {openDropdown === item.key && (
        <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {item.underRoutes.map((sub, i) => (
            <a
              key={i}
              href={sub.href}
              className="block px-4 py-2  hover:bg-gray-50 font-semibold text-gray-600"
              onClick={closeDropdown}
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
