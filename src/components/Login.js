import React, { useState } from "react";
import Base from "../Base/Base";
import Card from "@mui/material/Card";
import { Button, CardContent, IconButton, Snackbar, TextField } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import { useFormik } from "formik";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// form validation
export const filedValidationScheme = yup.object({
  email: yup.string().required("Please fill your email"),
  password: yup.string().required("Please fill password"),
});
const Login = () => {
  const history = useHistory();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: filedValidationScheme,
      onSubmit: (userInfo) => {
        // console.log("onsubmit",userInfo)
        handleLogin(userInfo);
      },
    });
      // ---------------------------------------------------------------------------------------------------------------------------------------
  // pop-up message
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    history.push("/SuccessfullMessage");
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        close
      </IconButton>
    </React.Fragment>
  );
  // pop-up end------------------------------------------------------------------------------------------------------------------------
  
  const handleLogin = async (userInfo) => {
    const res = await fetch(
      `https://reset-password-flow-backend.vercel.app/users/login`,
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(userInfo);
    const data = await res.json();
     console.log(data) 
     const datas=data.data.statusCode;
     console.log(datas);
     if(datas ===404){
      toast.success('😳User Not Found!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        history.push("/register");
     }else if(datas===400){
      toast.error('Invalid Password 😳', {
        position: "top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
     
     } else{
      toast.success('😁❤️ Success!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        handleClick();
     } 
   
  };
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
                type="submit"
                variant="outlined"
              >
                Login
              </Button>
            </div>
          </form>
        </Card>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Login Successfully"
          action={action}
        />
      </div>
    </Base>
  );
};

export default Login;
