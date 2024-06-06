import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `peer
          flex w-full 
          rounded-md 
          border 
          border-input 
          placeholder-transparent
          bg-background
          pb-3
          pt-7
          px-3.5
          text-base 
          ring-offset-background 
          file:border-0 
          file:bg-transparent 
          file:text-sm 
          file:font-medium 
          focus-visible:outline-none 
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-background 
          focus-visible:border-transparent
          focus-visible:placeholder-transparent
          disabled:cursor-not-allowed 
          disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
export type { InputProps };
