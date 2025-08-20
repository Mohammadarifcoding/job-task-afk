import React from 'react';

const FormHeader = ({children}) => {
    return (
 <div className='flex items-center  mb-5'>
  <h3 className="text-xl md:text-2xl font-medium text-gray-900 mr-4">{children}</h3>
 <div className="flex-1 border-t border border-gray-100"></div>
    </div>
    );
};

export default FormHeader;