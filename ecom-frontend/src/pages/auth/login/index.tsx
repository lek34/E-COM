import AuthLayout from "@/components/commons/PageHead/layouts/AuthLayout";
import Login from "@/components/views/Login";

const LoginPage = () => {
  return (
    <AuthLayout title="CrossBuy | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
