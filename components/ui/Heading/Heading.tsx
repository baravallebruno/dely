import React from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Weight = "regular" | "bold";
type Variant = "title" | "subtitle" | "section";

type HeadingProps = {
  children: React.ReactNode;
  as?: HeadingTag;
  variant?: Variant;
  className?: string;
  weight?: Weight;
};

const Heading = ({
  children,
  as: Tag = "h1",
  className = "",
  weight = "bold",
  variant = "title",
}: HeadingProps): JSX.Element => {
  const variantMap: Record<Variant, string> = {
    title: "text-4xl",
    subtitle: "text-2xl",
    section: "text-base",
  };

  const weightMap: Record<Weight, string> = {
    regular: "font-normal",
    bold: "font-bold",
  };

  const appliedStyles = cn(variantMap[variant], weightMap[weight], className);

  return <Tag className={appliedStyles}>{children}</Tag>;
};

export default Heading;
export type { HeadingProps };
