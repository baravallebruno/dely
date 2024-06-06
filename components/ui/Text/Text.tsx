import { cn } from "@/lib/utils";

type Variant = "body" | "small";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
  variant?: Variant;
};

const Text = ({
  children,
  className,
  variant = "body",
  as: Tag = "p",
}: TextProps) => {
  const variantMap: Record<Variant, string> = {
    body: "text-base font-normal",
    small: "text-sm md:text-base font-light text-dely-gray",
  };

  const appliedStyles = cn(variantMap[variant], className);

  return <Tag className={appliedStyles}>{children}</Tag>;
};

export default Text;
