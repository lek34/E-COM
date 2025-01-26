import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = () => {
  const router = useRouter();
  const callbackUrl: string = (router.query.callbackUrl as string) || "/";
  const loginWithGoogle = () => signIn("google", { callbackUrl });
  return (
    <Button
      className="border-gray-300 text-sm text-gray-500"
      variant="bordered"
      size="lg"
      startContent={<FcGoogle className="text-4xl" />}
      onPress={loginWithGoogle}
    >
      Login with google
    </Button>
  );
};

export default GoogleSignInButton;
