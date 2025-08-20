import FormHeader from '@/components/shared/form/formheader';
import RadioGroup from '@/components/shared/form/Radio-group';
import React from 'react';
import { Controller } from 'react-hook-form';
import {  yesNoOptions } from '@/data/rent-sell-form';

const MoreInformation =  ({errors,register,control})  => {
    return (
    <div>
<FormHeader>More Information</FormHeader>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Controller
            name="isOwner"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <RadioGroup
                label="Are You the first owner?"
                options={[
...yesNoOptions
                ]}
                value={field.value}
                onChange={field.onChange}
                error={errors.isOwner?.message}
                required
              />
            )}
          />
<Controller
            name="isPaperUpdated"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <RadioGroup
                label="Do you have all paperworks updated?"
                options={[
...yesNoOptions
                ]}
                value={field.value}
                onChange={field.onChange}
                error={errors.isPaperUpdated?.message}
                required
              />
            )}
          />
          <Controller
            name="isAnyLoan"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <RadioGroup
                label="Does this property is on loan?"
                options={[
...yesNoOptions
                ]}
                value={field.value}
                onChange={field.onChange}
                error={errors.isAnyLoan?.message}
                required
              />
            )}
          />
     
          </div>

          {/* Furnished Options */}


        </div>
    );
};

export default MoreInformation;