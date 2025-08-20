"use client"

import FormHeader from '@/components/shared/form/formheader';
import Input from '@/components/shared/form/input';
import RadioGroup from '@/components/shared/form/Radio-group';
import Select from '@/components/shared/form/select';
import Textarea from '@/components/shared/form/textarea';
import Wrapper from '@/components/shared/wrapper';
import { furnishingOptions, propertyTypeOptions, yesNoOptions } from '@/data/rent-sell-form';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import ContactInfo from './formParts/contactInfo';
import PropertyInfo from './formParts/propertyInfo';
import MoreInformation from './formParts/moreinformation';
import { MoveRight } from 'lucide-react';
import Button from '@/components/shared/button';

const RentSellFrom = () => {

      const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    // Handle form submission here
  }

    return (
        <Wrapper>
            <div className="mb-8">
         <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">Fill this form</h2>
         <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-[480px] ">Choose how you want to get started — rent or sell in just a click.</p>
      </div>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
<ContactInfo register={register} errors={errors} />

<PropertyInfo  register={register} errors={errors} control={control}/> 
      <MoreInformation  register={register} errors={errors} control={control}/>



       <div className="flex sm:items-center  justify-start gap-3 sm:flex-row flex-col pt-6">
          <Button type="submit">
            Submit <MoveRight />
          </Button>
          <p className="text-sm text-gray-500">You'll receive a confirmation call shortly</p>
        </div>
</form>

        </Wrapper>
    );
};

export default RentSellFrom;