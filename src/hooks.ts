import type { ClassValue } from "clsx";
import type { ElementType } from "react";
import { getClasses } from "./utils";
import { getComponentId } from "./components";

/**
 * Apply an arbitrary variant to className.
 * @param variant - The variant selector to apply
 * @param className - The className to apply the variant to
 * @returns Classes with the variant prefix
 * @example const Button = tw.button`${withVariant("&:hover", "bg-blue-500 text-white")}` // "[&:hover]:bg-blue-500 [&:hover]:text-white
 */
export function withVariant(variant: string, className: ClassValue): string {
  const classes = getClasses(className);
  return classes.map((cls) => `[${variant}]:${cls}`).join(" ");
}

/**
 * Apply a component prefix to className.
 * @param component - The component to apply the prefix to
 * @param className - The className to apply the prefix to
 * @returns Classes with the component prefix
 * @example const Button = tw.button`bg-blue-500 text-white`
 *          const Wrapper = tw.div`${withComponent(Button, "bg-red-500 text-white")}` // "[&_tw-button]:bg-red-500 [&_tw-button]:text-white"
 */
export function withComponent(
  component: ElementType,
  className: ClassValue
): string {
  const classes = getClasses(className);
  const id = getComponentId(component);

  return classes.map((cls) => `[&_${id}]:${cls}`).join(" ");
}
