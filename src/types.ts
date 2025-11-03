import type { ClassValue } from "clsx";
import type {
  ComponentPropsWithoutRef,
  ComponentRef,
  ElementType,
  ForwardRefExoticComponent,
  JSX,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export type ComponentProps<Tag extends ElementType> = (
  | ComponentPropsWithoutRef<Tag>
  | JSX.IntrinsicAttributes
) & {
  className?: ClassValue;
};

export type StyledFn<
  Tag extends ElementType | keyof JSX.IntrinsicElements,
  P extends ComponentProps<Tag>
> = (
  template: TemplateStringsArray,
  ...args: Interpolation<P>[]
) => ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<ComponentRef<Tag>>
>;

export type Interpolation<P> = ClassValue | ((props: P) => ClassValue);
export type InstrinsicFn<Tag extends keyof JSX.IntrinsicElements> = StyledFn<
  Tag,
  JSX.IntrinsicElements[Tag]
>;
export type ComponentFn<Tag extends ElementType> = StyledFn<
  Tag,
  ComponentPropsWithoutRef<Tag>
>;

export type Styled = {
  <Component extends ElementType>(comp: Component): ComponentFn<Component>;
} & {
  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): InstrinsicFn<Tag>;
};
