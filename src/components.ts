import type { ElementType } from "react";
import { getComponentName } from "./utils";

const components = new Map<string, string>();

export function registerComponent(element: ElementType, id: string): string {
  const name = getComponentName(element);
  if (components.has(name)) {
    return components.get(name) as string;
  }

  components.set(name, id);
  return id;
}

export function getComponentId(element: ElementType): string {
  const name = getComponentName(element);
  return components.get(name) as string;
}
