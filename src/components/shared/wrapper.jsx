import { cn } from '@/lib/utils';
import React from 'react';

const Wrapper = ({className,children}) => {
    return (
        <div className={cn("max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white my-12 sm:my-16 md:my-20 rounded-2xl shadow-sm",className)}>
            {children}
        </div>
    );
};

export default Wrapper;