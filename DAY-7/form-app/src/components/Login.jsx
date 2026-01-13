import React from "react";
import { useForm } from "react-hook-form";
import Error from "./Error";

let validate = {
  username: {
    required: {
      value: true,
      message: "Enter Username",
    },
    pattern: {
      value: /^[6-9][0-9]{11}$/,
      message: "Invalid username , username a mobile number",
    },
  },
  password: {
    required: {
      value: true,
      message: "Enter password",
    },
  },
  rememberPassword: {
    required: {
      value: true,
      message: "Please select remember password",
    },
  },
};
function Login() {
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      rememberPassword: false,
    },
  });

  let makeLogin = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(makeLogin)}>
      <section>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          placeholder="username"
          {...register("username", { ...validate.username })}
        />
        <Error errors={errors} name="username" />
      </section>
      <section>
        <label htmlFor="">Password</label>
        <input
          type="text"
          placeholder="password"
          {...register("password", { ...validate.password })}
        />
        <Error errors={errors} name="password" />
      </section>
      <section className="form-group">
        <section>
          <input
            type="checkbox"
            {...register("rememberPassword", { ...validate.rememberPassword })}
          />
          <label htmlFor="">Remember Password</label>
        </section>
        <Error errors={errors} name="rememberPassword" />
      </section>
      <section>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </section>
    </form>
  );
}

export default Login;
