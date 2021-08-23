import React from "react";

interface LoginPageProps {
  [key: string]: any;
}

const LoginPage = (props: LoginPageProps) => {
  return <div>登录</div>;
};

export default React.memo<LoginPageProps>(LoginPage);
