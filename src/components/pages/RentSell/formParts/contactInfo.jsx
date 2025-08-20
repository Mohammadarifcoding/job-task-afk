import Input from '@/components/shared/form/input';
import React from 'react';
import FormHeader from '@/components/shared/form/formheader';

const ContactInfo = ({errors,register}) => {
    return (
       <div>
        <FormHeader>Contact Information</FormHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Name"
              placeholder="Your answer"
              required
              {...register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />
            <Input
              label="Phone Number"
              placeholder="Your answer"
              required
              {...register("phone", { required: "Phone number is required" })}
              error={errors.phone?.message}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="Your answer"
              required
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              error={errors.email?.message}
            />
          </div>
        </div>
    );
};

export default ContactInfo;