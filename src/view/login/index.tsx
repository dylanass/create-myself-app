import usePersistFn from "@/components/hooks/usePersistFn";
import React, { useEffect } from "react";
import "./index.scss";
interface LoginPageProps {
  [key: string]: any;
}

/**
 * 两个问题 1.label覆盖input 导致光标没办法聚焦  2.浏览器默认用户名密码会出现白色背景
 * @param props
 * @returns Component
 */

const LoginPage = (props: LoginPageProps) => {
  const handleSubmit = usePersistFn(() => {
    const email = document.querySelector(".email") as any;
    console.log("email.value :>> ", email.value);
  });

  useEffect(() => {
    const email = document.querySelector(".email") as any;
    console.log("email.value :>> ", email.value);
    // setTimeout(() => {
    //   console.log("email.value :>> ", email.value);
    // }, 1000);

    const labels = document.querySelectorAll(".form-control label");
    const createLetter = (v) =>
      v
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join("");
    labels.forEach((item) => {
      item.innerHTML = createLetter(item.getAttribute("data-value"));
    });

    /**
     * @todo 获取input value
     */
    // const email = document.querySelector("#email") as any;
  });
  return (
    <div className="container-wrapper">
      <div className="container">
        <form name="login" autoComplete="off">
          <h1>please login</h1>
          <div className="form-control ">
            <input type="text" required className="email" />
            <label data-value="Email"></label>
          </div>
          <div className="form-control ">
            <input type="password" required />
            <label data-value="PassWord"></label>
          </div>
          <div className="form-control">
            <button type="button" className="btn" onClick={handleSubmit}>
              login
            </button>
          </div>
          <div className="form-control">
            Don't have an account?
            <a href="/" target="_blank" rel="noopener noreferrer">
              register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo<LoginPageProps>(LoginPage);
