import React from "react";
import Base from "../Base/Base";
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import { toast } from "react-toastify";

import { useFormik } from "formik";
// form validation
export const filedValidationScheme = yup.object({
  name: yup.string().required("Please fill your name"),
  email: yup.string().required("Please fill your email"),
  password: yup.string().required("Please fill password"),
});
const Register = () => {
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
        Register();
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

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const history = useHistory();
  return (
    <Base title={"New Registration"}>
      <div className="container">
        <Card sx={{ p: "10px" }} className="Bg-color">
          <form onSubmit={handleSubmit}>
            <CardContent>
              <h2 className="heading">For New Users</h2>
              <TextField
                sx={{ width: "300px" }}
                id="outlined-basic"
                label="User_Name"
                variant="outlined"
                name="name"
                type="name"
                size="small"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
              />
              <div style={{ color: "crimson", fontSize: "small" }}>
                {touched.name && errors ? errors.name : ""}
              </div>
            </CardContent>
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
                label="Password"
                name="password"
                variant="outlined"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                type="password"
                size="small"
              />
              <div style={{ color: "crimson", fontSize: "small" }}>
                {touched.password && errors ? errors.password : ""}
              </div>
            </CardContent>
            <Checkbox {...label} size="small" required />
            <span className="register-new">Agree to terms and conditions</span>
            <div className="Reg">
              <Button
                className="button-Bg"
                onClick={() => history.push("/SuccessfullMessage")}
                variant="outlined"
              >
                Register
              </Button>
            </div>
          </form>
          <div className="bg">
            <h3 className="sub_heading">For Current Users</h3>
            <Button
              className="button-Bg"
              onClick={() => history.push("/")}
              variant="outlined"
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </Base>
  );
};
export default Register;
