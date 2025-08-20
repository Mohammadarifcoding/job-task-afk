import { forwardRef } from "react"

const Select = forwardRef(({ label, error, options = [], className = "", ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
         <label className="block font-medium ">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        className={`w-full px-4 py-3 border  border-gray-300 bg-gray-100 placeholder-gray-500  focus:outline-none rounded-md   ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...props}
      >
        <option value="">Your answer</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="w-full px-4 py-3 border placeholder-gray-500  bg-gray-100 border-gray-300  rounded-md ">
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
})


export default Select