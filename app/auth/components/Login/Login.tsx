import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

const Login = () => {
  return (
    <div className="bg-red-50">
      <Heading
        as="h3"
        variant="subtitle"
      >
        Bienvenido otra vez 👋
        <br
          aria-hidden="true"
          className="block"
        />
        a<span className="text-dely-primary"> Dely</span>
      </Heading>
      <Text
        variant="small"
        className="mt-1"
      >
        Hola, ingresá para continuar
      </Text>
    </div>
  );
};

export default Login;
