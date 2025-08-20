"use client"

import { forwardRef } from "react"

 const RadioGroup = forwardRef(
  ({ label, error, options = [], value, onChange, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block font-medium ">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className={`flex gap-3 flex-wrap ${className}`}>
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer min-w-[200px]">
              <input
                ref={ref}
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-4 h-4  border-gray-300 rounded appearance-auto"
                {...props}
              />
              <span className="text-sm text-gray-500 font-medium">{option.label}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    )
  },
)


export default RadioGroup