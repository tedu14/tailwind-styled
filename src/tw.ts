import {
  createElement,
  forwardRef,
  type ComponentRef,
  type ElementType,
  type JSX,
} from "react";
import type { ComponentFn, ComponentProps, Styled } from "./types";
import { buildClasses, buildName, cleanClasses } from "./utils";
import type { ClassValue } from "clsx";

function build<El extends ElementType>(element: El): ComponentFn<El> {
  return <P extends ComponentProps<El>>(
    template: TemplateStringsArray,
    ...args: ClassValue[]
  ) => {
    type Ref = ComponentRef<El>;

    const TwComponent = forwardRef<Ref, P>(function TwComponent(
      { className, ...props },
      ref
    ) {
      return createElement(element, {
        ...props,
        ref,
        className: cleanClasses(buildClasses(template, args, { className })),
      });
    });

    TwComponent.displayName = buildName(TwComponent);

    return TwComponent;
  };
}

const base = ((component: ElementType) => build(component)) as Styled;

export const tw: Styled = new Proxy(base, {
  get(_, key: PropertyKey) {
    return build(key as keyof JSX.IntrinsicElements);
  },
});
