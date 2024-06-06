import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Position = "top" | "bottom" | "left" | "right";

type RoundedDividerProps = {
  className?: string;
  position: Position;
  children: ReactNode;
};

type DividerProps = {
  className?: string;
};

const Horizontal = ({ className }: DividerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={716}
      height={120}
      fill="none"
      className={className}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 110.873C104.997 40.159 225.275 0 353.105 0 484.926 0 608.717 42.705 716 117.586V120H0v-9.127Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Vertical = ({ className }: DividerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={120}
      height={1024}
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M110.874 1024C40.159 873.837 0 701.818 0 519 0 330.474 42.705 153.433 117.585 0H120v1024h-9.126Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const RoundedDivider = (props: RoundedDividerProps) => {
  const { position, className, children, ...rest } = props;

  const positionMap: Record<Position, string> = {
    //TODO: Check the correct implementation for horizontal dividers
    top: "",
    bottom: "",
    left: "rotate-180 left-0 h-full",
    right: "h-full right-0",
  };

  const commonStyles = "absolute fill-white z-10";

  const appliedStyles = cn(positionMap[position], commonStyles);
  const containerStyles = cn("w-full h-full z-10");

  const isVertical = position === "left" || position === "right";

  return (
    <div className={containerStyles}>
      {isVertical ? (
        <Vertical className={appliedStyles} />
      ) : (
        <Horizontal className={appliedStyles} />
      )}
      <div className={className}>{children}</div>
    </div>
  );
};
export default RoundedDivider;
