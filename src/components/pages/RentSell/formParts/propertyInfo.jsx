import FormHeader from '@/components/shared/form/formheader';
import Input from '@/components/shared/form/input';
import RadioGroup from '@/components/shared/form/Radio-group';
import Select from '@/components/shared/form/select';
import Textarea from '@/components/shared/form/textarea';
import React from 'react';
import { Controller } from 'react-hook-form';
import { furnishingOptions, propertyTypeOptions, yesNoOptions } from '@/data/rent-sell-form';


const PropertyInfo = ({errors,register,control}) => {
    return (
  <div>
<FormHeader>Propery Information</FormHeader>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Property Name" placeholder="Your answer" {...register("propertyName")} />
            
            {/* Dropdown */}
            <div>

 <Select
              label="Property Type"
              placeholder="Your answer"
              {...register("propertyType", { required: "Property Type is required" })}
              error={errors.propertyType?.message}
              options={[...propertyTypeOptions]}
            />
            </div>

            <Input
              label="Size (Sq. ft.)"
              placeholder="Your answer"
              {...register("size", { required: "Size is required" })}
              error={errors.size?.message}
            />
            <Input
              label="Location"
              placeholder="Your answer"
              {...register("location", { required: "Location is required" })}
              error={errors.location?.message}
            />
            <Input
              label="Number of Bedrooms"
              placeholder="Your answer"
              {...register("bedrooms", { required: "Bedrooms required" })}
              error={errors.bedrooms?.message}
            />
            <Input label="Bathroom" placeholder="Your answer" {...register("bathroom")} />
            <Input label="Baranda" placeholder="Your answer" {...register("baranda")} />

<Controller
            name="furnished"
            control={control}
            rules={{ required: "Please select an option" }}
            render={({ field }) => (
              <RadioGroup
                label="Is the property__________?"
                options={[
...furnishingOptions
                ]}
                value={field.value}
                onChange={field.onChange}
                error={errors.furnished?.message}
                required
              />
            )}
          />
          <div className='md:col-span-2 col-span-1'>
     <Textarea
            label="Any Additional Information"
            placeholder="Your answer"
            {...register("additionalInfo")}
          />

          </div>
     
          </div>

          {/* Furnished Options */}


        </div>
    );
};

export default PropertyInfo;