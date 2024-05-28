type RoundedDividerProps = {
  className?: string;
};

const RoundedDivider = (props: RoundedDividerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={1024}
    fill="none"
    {...props}
  >
    <path
      //   fill="#fff"
      fillRule="evenodd"
      d="M110.874 1024C40.159 873.837 0 701.818 0 519 0 330.474 42.705 153.433 117.585 0H120v1024h-9.126Z"
      clipRule="evenodd"
    />
  </svg>
);
export default RoundedDivider;
