import React from "react";
import Base from "../Base/Base";
import { Button, Card, CardContent, IconButton, Snackbar, TextField } from "@mui/material";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  console.log(setEmail);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://reset-password-flow-backend.vercel.app/users/forgot-password",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      handleClick();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      )
        console.log(error);
      setMessage(error.response.data.message);
    }
  };
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

  return (
    <Base title={"Verfication"}>
      <div className="container-otp">
        <Card sx={{ p: "10px" }}>
          <CardContent>
            <h3 className="otp-heading">Email Verification</h3>
            <h5 className="otp-desp">Note: If the link is not receive .Please, refresh the page and try again😁.</h5>

            <h4 className="otp-desp">We will sent a link to your email</h4>

            <form onSubmit={handleSubmit} className="form">
              <TextField
                sx={{ width: "300px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <div>
                {message && <div className="alert alert-info">{message}</div>}
              </div>

              <div className="otp-verify">
                <Button className="button-Bg" type="submit" variant="outlined">
                  Verify Account
                </Button>
              </div>
            </form>
            <h4 className="otp-desp">
              Didn't recieve link?
              <span>
                <u>Resend Link</u>
              </span>
            </h4>
          </CardContent>
        </Card>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="link will send in few mins😶‍🌫️"
          action={action}
        />
      </div>
    </Base>
  );
};

export default ForgetPassword;
