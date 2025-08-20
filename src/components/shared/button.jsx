import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({children,className, ...props}) => {
    return (
          <button
          {...props}
            className={cn("bg-blue-700 w-fit hover:bg-blue-800 text-white px-6 py-4 rounded-md font-medium transition-colors flex items-center gap-2",className)}
          >
         {children}
          </button>
    );
};

export default Button;