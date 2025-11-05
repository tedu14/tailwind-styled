import {
  createElement,
  forwardRef,
  type ComponentRef,
  type ElementType,
  type JSX,
} from "react";
import type { ComponentFn, ComponentProps, Styled } from "./types";
import { buildClasses, buildName, cleanClasses, cn, generateId } from "./utils";
import type { ClassValue } from "clsx";
import { getComponentId, registerComponent } from "./components";

function build<El extends ElementType>(element: El): ComponentFn<El> {
  return <P extends ComponentProps<El>>(
    template: TemplateStringsArray,
    ...args: ClassValue[]
  ) => {
    type Ref = ComponentRef<El>;
    const componentId = getComponentId(element) || generateId();

    const TwComponent = forwardRef<Ref, P>(function TwComponent(
      { className, ...props },
      ref
    ) {
      return createElement(element, {
        ...props,
        ref,
        className: cn(
          cleanClasses(buildClasses(template, args, { className })),
          componentId
        ),
      });
    });

    TwComponent.displayName = buildName(TwComponent);

    registerComponent(TwComponent, componentId);

    return TwComponent;
  };
}

const base = ((component: ElementType) => build(component)) as Styled;

/**
 * The main function to build classes.
 * @example tw.div`bg-blue-500 text-white`
 * @example tw(Button)`bg-blue-500 text-white`
 */
export const tw: Styled = new Proxy(base, {
  get(_, key: PropertyKey) {
    return build(key as keyof JSX.IntrinsicElements);
  },
});
