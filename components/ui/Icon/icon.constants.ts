import GoogleIcon from "@/public/assets/icons/google.svg";
import { icons } from "lucide-react";

type Icons = keyof typeof svgIcons;

const customIcons = {
  Google: GoogleIcon,
};

const svgIcons = {
  ...icons,
  ...customIcons,
};

export { svgIcons };
export type { Icons };
