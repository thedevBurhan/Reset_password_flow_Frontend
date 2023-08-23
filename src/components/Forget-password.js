import React from "react";
import Base from "../Base/Base";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

// form validation
export const filedValidationScheme = yup.object({
  email: yup.string().required("Please fill your email"),
});

const ForgetPassword = () => {
  const history = useHistory();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
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
    <Base title={"Verfication"}>
      <div className="container-otp">
        <Card sx={{ p: "10px" }}>
          <CardContent>
            <h3 className="otp-heading">Email Verification</h3>
            <h4 className="otp-desp">We have sent a link to your email</h4>
            <div>
              <form onSubmit={handleSubmit} className="form">
                <TextField
                  sx={{ width: "300px", mb: "5px" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  size="small"
                />
                <div style={{ color: "crimson", fontSize: "small" }}>
                  {touched.email && errors ? errors.email : ""}
                </div>
              </form>
            </div>
            <div className="otp-verify">
              <Button
                className="button-Bg"
                onClick={() => history.push("/ChangePassword")}
                variant="outlined"
              >
                Verify Account
              </Button>
            </div>
            <h4 className="otp-desp">
              Didn't recieve link?
              <span>
                <u>Resend Link</u>
              </span>
            </h4>
          </CardContent>
        </Card>
      </div>
    </Base>
  );
};

export default ForgetPassword;
