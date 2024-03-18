import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { RegisterForm } from "../../components/RegisterForm";

export function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  function handleChange() {
    setIsLoginMode(!isLoginMode);
  }

  return (
    <>
      {isLoginMode ? (
        <LoginForm isLoginMode={isLoginMode} handleChange={handleChange} />
      ) : (
        <RegisterForm isLoginMode={isLoginMode} handleChange={handleChange} />
      )}
    </>
  );
}
