import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-1">
      <Home className="w-5 h-5 text-blue-700" />
      <span className="text-2xl font-semibold text-blue-600">arambo</span>
    </Link>
  );
};

export default Logo;
