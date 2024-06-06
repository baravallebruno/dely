type BoxType = "div" | "section" | "article";

type BoxProps = {
  children?: React.ReactNode;
  as?: BoxType;
  className?: string;
};

const Box = ({ children, className, as: Tag = "div" }: BoxProps) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Box;
