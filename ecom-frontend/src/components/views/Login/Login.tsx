import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import useLogin from "./useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";
import GoogleSignInButton from "@/components/commons/UI";
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";

const Login = () => {
  const {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    errors,
    isPendingLogin,
  } = useLogin();
  return (
    <div className="gap:10 flex w-full flex-col items-center justify-center">
      <Image
        className="w-full max-w-xs"
        src="/images/general/logo.svg"
        alt="logo"
      />
      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl font-bold text-red-600">Sign In</h2>
          <p className="mb-4 mt-2 text-small">
            Don't have an account? &nbsp;
            <Link href="/auth/register" className="font-semibold text-red-500">
              Register here
            </Link>
          </p>
          <form
            action=""
            className="flex w-80 flex-col gap-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  variant="bordered"
                  size="lg"
                  radius="lg"
                  autoComplete="off"
                  placeholder="Email / Username"
                  isInvalid={errors.identifier !== undefined}
                  labelPlacement="outside"
                  startContent={<FiUser className="text-2xl text-red-800" />}
                  errorMessage={errors.identifier?.message}
                  classNames={{
                    inputWrapper: "border-red-700",
                    input: ["placeholder:text-red-700 text-sm"],
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  size="lg"
                  radius="lg"
                  autoComplete="off"
                  placeholder="Password"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  startContent={
                    <RiLock2Line className="text-2xl text-red-800" />
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                  classNames={{
                    inputWrapper: "border-red-700",
                    input: ["placeholder:text-red-700 text-sm"],
                  }}
                />
              )}
            />
            <Button
              className="bg-red-600"
              color="danger"
              size="lg"
              type="submit"
            >
              {isPendingLogin ? <Spinner color="white" size="sm" /> : "Login"}
            </Button>
            <div className="flex items-center">
              <div className="flex-grow border-t border-red-300"></div>
              <span className="mx-4 text-red-600">Login with Others</span>
              <div className="flex-grow border-t border-red-300"></div>
            </div>
            <GoogleSignInButton />
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
export default Login;
