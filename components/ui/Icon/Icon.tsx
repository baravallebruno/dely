import { cn } from "../../../lib/utils";
import { customColors } from "../../../styles/colors.config";
import Box from "../Box";
import { Icons, svgIcons } from "./icon.constants";

type Colors = keyof typeof customColors;

type IconProps = {
  name: Icons;
  className?: string;
  color?: Colors;
};

const Icon = ({ name, className, color }: IconProps) => {
  const SvgIcon = svgIcons[name];

  const colorMap: Record<Colors, string> = {
    "dely-gray": "stroke-dely-gray",
    "dely-primary": "stroke-dely-primary",
  };

  const getStrokeColor = (color?: Colors) => {
    if (!color) return "stroke-transparent";

    return colorMap[color];
  };

  const stylesToApply = cn(getStrokeColor(color));

  return (
    <Box className={className}>
      <SvgIcon
        width="24"
        height="24"
        className={stylesToApply}
      />
    </Box>
  );
};

export default Icon;
