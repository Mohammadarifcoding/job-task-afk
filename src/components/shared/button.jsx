import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({children,className, ...props}) => {
    return (
          <button
          {...props}
            className={cn("bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-md font-medium transition-colors flex items-center gap-2",className)}
          >
         {children}
          </button>
    );
};

export default Button;