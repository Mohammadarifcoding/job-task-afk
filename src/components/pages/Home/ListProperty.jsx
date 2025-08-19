import React from 'react';

const ListProperty = () => {
    return (
 <div className="px-2">
       {/* hero */}
      <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-blue-600 py-16 sm:py-20 md:py-28 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white tracking-tight">
            List Your Property
          </h1>
        </div>
      </div>
     {/* actions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-white my-12 sm:my-16 md:my-20 rounded-2xl shadow-sm">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            What would you like to do?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-[480px] mx-auto">
            Choose how you want to get started — rent or sell in just a click.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Rent Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 text-center transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Rent Out a Property
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
              For landlords who want to rent their residential or commercial space.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium transition-colors text-sm sm:text-base">
              Rent Property →
            </button>
          </div>

          {/* Sell Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center  transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Sell a Property
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
              Ideal for owners looking to sell apartments, plots, or units.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium transition-colors text-sm sm:text-base">
              Sell Property →
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ListProperty;