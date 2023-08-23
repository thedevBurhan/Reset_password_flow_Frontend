import React from "react";
import Base from "../Base/Base";
import Card from "@mui/material/Card";
import { Button, CardContent, TextField } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

// form validation
export const filedValidationScheme = yup.object({
  name: yup.string().required("Please fill your name"),
  email: yup.string().required("Please fill your email"),
  password: yup.string().required("Please fill password"),
});
const Login = () => {
  const history = useHistory();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: filedValidationScheme,
      onSubmit: (userInfo) => {
        // console.log("onsubmit",userInfo)
        // handleLogin(userInfo);
        toast("It will take Few Seconds to Load....", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          icon: "😶‍🌫️",
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    });
  return (
    <Base title={"Login Your Account"}>
      <div className="container">
        <Card sx={{ p: "10px" }} className="Bg-color">
          <div className="bg">
            <h3 className="sub_heading">Don't have an account?</h3>
            <Button
              className="button-Bg"
              onClick={() => history.push("/register")}
              variant="outlined"
            >
              Register
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <CardContent>
              <TextField
                sx={{ width: "300px" }}
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                type="email"
                size="small"
              />
              <div style={{ color: "crimson", fontSize: "small" }}>
                {touched.email && errors ? errors.email : ""}
              </div>
            </CardContent>
            <CardContent>
              <TextField
                sx={{ width: "300px" }}
                id="outlined-basic"
                type="password"
                label="Password"
                name="password"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
              <div style={{ color: "crimson", fontSize: "small" }}>
                {touched.password && errors ? errors.password : ""}
              </div>
            </CardContent>
            <div className="forget-password">
              <p onClick={() => history.push("/forget-password")}>
                Forget password?
              </p>
            </div>
            <div className="button">
              <Button
                className="button-Bg"
                onClick={() => history.push("/SuccessfullMessage")}
                variant="outlined"
              >
                Login
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Base>
  );
};

export default Login;
