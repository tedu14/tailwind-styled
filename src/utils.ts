import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { Interpolation } from "./types";
import type { ElementType } from "react";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function buildClasses<
  P extends Record<string, unknown> = Record<string, unknown>
>(template: TemplateStringsArray, args: Interpolation<P>[], props: P) {
  return cn(
    template.map((t, i) => {
      const arg = args[i];
      const content = typeof arg === "function" ? arg(props) : arg;

      return t + String(content ?? "");
    }),
    (props.className as ClassValue) ?? ""
  );
}

export function cleanClasses(classes: ClassValue): string {
  // remove all whitespace and newlines and replace multiple spaces with a single space
  switch (typeof classes) {
    case "string":
      return classes.replace(/\s+/g, " ").trim();
    case "object": {
      if (classes === null || classes === undefined) return "";
      if (Array.isArray(classes)) return classes.map(cleanClasses).join(" ");
      return Object.values(classes).map(cleanClasses).join(" ");
    }
    default:
      return String(classes ?? "");
  }
}

export function buildName(element: ElementType): string {
  const name = "TwStyled";

  switch (typeof element) {
    case "string":
      return name + element;
    default:
      return name + (element.displayName ?? element.name ?? element.toString());
  }
}

export function generateId(): string {
  const prefix = "tw-";
  const timestamp = Date.now().toString(36).slice(-8);
  const array = new Uint8Array(8);
  const counter = Math.floor(performance.now() * 1000)
    .toString(36)
    .slice(-4);

  if (typeof window !== "undefined") {
    window.crypto.getRandomValues(array);
  } else {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }

  const random = Array.from(array, (byte) =>
    (byte % 36).toString(36).slice(-8)
  ).join("");

  return [prefix, timestamp, random, counter].join("");
}

export function getClasses(classes: ClassValue) {
  return cleanClasses(cn(classes)).split(" ");
}

export function getComponentName(element: ElementType) {
  switch (typeof element) {
    case "string":
      return element;
    default:
      return element.displayName ?? element.name ?? element.toString();
  }
}
