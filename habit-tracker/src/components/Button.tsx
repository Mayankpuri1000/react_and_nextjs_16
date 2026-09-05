import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
  variant?: ButtonVariant
} & ComponentProps<"button">


export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "transition-colors px-3 py-1 rounded-3xl disabled:opacity-30 disabled:cursor-not-allowed", 
        getVariantStyles(variant), 
        className
      )}
    />
  );
}

function getVariantStyles(variant: ButtonVariant) {
  switch (variant) {
    case "primary": 
      return "bg-violet-600 hover:bg-violet-500";
    case "secondary":
      return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400";
    case "ghost-destructive":
      return "hover:bg-red-800 text-red-800 hover:text-white";
    default: throw new Error(`Unknown variant: ${variant satisfies never}`)
  }
}
 