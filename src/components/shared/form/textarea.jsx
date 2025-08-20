import { forwardRef } from "react"

const Textarea = forwardRef(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-medium ">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        className={`w-full px-4 py-3 border  bg-gray-100 border-gray-300  rounded-md  placeholder-gray-500 focus:outline-none resize-vertical min-h-[100px] ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
})

export default Textarea