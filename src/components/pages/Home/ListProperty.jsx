import Button from '@/components/shared/button';
import Wrapper from '@/components/shared/wrapper';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ListProperty = () => {
  return (
    <div className="px-2">
      {/* actions */}
      <Wrapper>
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
            <Link href={'/rent-sell'}>

                                    <Button>
Rent Property <MoveRight/>
                        </Button>
            </Link>
          
          </div>

          {/* Sell Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center  transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Sell a Property
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
              Ideal for owners looking to sell apartments, plots, or units.
            </p>
                        <Link href={'/rent-sell'}>
                        <Button>

                          Sell Property <MoveRight/>
                        </Button>

                        </Link>
           
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ListProperty;
