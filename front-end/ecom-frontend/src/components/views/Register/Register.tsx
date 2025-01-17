import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
  return (
    <div className="gap:10 flex w-full flex-col items-center justify-center">
      <Image
        className="w-full max-w-xs"
        src="/images/general/logo.svg"
        alt="logo"
      />
      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl font-bold text-red-600">Sign Up</h2>
          <p className="mb-4 text-small">
            Have an account? &nbsp;
            <Link href="/auth/login" className="font-semibold text-red-500">
              Login here
            </Link>
          </p>
          <form action="" className="flex w-80 flex-col gap-4">
            <Input
              type="text"
              label="Username"
              variant="bordered"
              radius="lg"
              autoComplete="off"
            />
            <Input
              type="email"
              label="Email"
              variant="bordered"
              radius="lg"
              autoComplete="off"
            />
            <Input
              type="text"
              label="Password"
              variant="bordered"
              radius="lg"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("password")}
                >
                  {visiblePassword.password ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Input
              type="text"
              label="Confirm Password"
              variant="bordered"
              radius="lg"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("confirmPassword")}
                >
                  {visiblePassword.confirmPassword ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Button className="bg-red-600" color="danger">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
export default Register;
