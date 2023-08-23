import React from "react";
import Base from "../Base/Base";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  const history = useHistory();
  return (
    <Base title={"Change Password"}>
      <div>
        <Card sx={{ p: "10px" }}>
          <CardContent>
            <h3 className="password">New password</h3>
            <TextField
              sx={{ width: "300px" }}
              id="outlined-basic"
              type="password"
              variant="outlined"
            />
          </CardContent>
          <CardContent>
            <h3 className="password">Confirm password</h3>
            <TextField
              sx={{ width: "300px" }}
              id="outlined-basic"
              type="password"
              variant="outlined"
            />
          </CardContent>
          <div className="otp-verify">
            <Button
              className="button-Bg"
              onClick={() => history.push("/")}
              variant="outlined"
            >
              Reset Password
            </Button>
          </div>
        </Card>
      </div>
    </Base>
  );
};

export default ChangePassword;
