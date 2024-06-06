import Button from "@/components/ui/Button";
import { ButtonProps } from "@/components/ui/Button/Button";
import Icon from "../../../../components/ui/Icon";

type SocialNetwork = "google";

type SocialLoginButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: SocialNetwork;
};

const SocialLoginButton = (props: SocialLoginButtonProps) => {
  const { variant, ...rest } = props;

  return (
    <Button
      type="button"
      variant="outline"
      {...rest}
    >
      <Icon
        name="Google"
        className="mr-2.5"
      />
      Google
    </Button>
  );
};

export default SocialLoginButton;
