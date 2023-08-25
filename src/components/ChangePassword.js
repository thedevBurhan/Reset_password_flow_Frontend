import React from "react";
import Base from "../Base/Base";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from "react";

const ChangePassword = () => {
  const history = useHistory();
  const { randomString } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (newPassword === confirmPassword) {
      try {
        const response = await fetch(`https://reset-password-flow-backend.vercel.app/users/reset-password/${randomString}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPassword }),
        });

        if (response.status === 200) {
          setMessage("Password reset successful")
           history.push("/")

        } else {
          setMessage("Password reset failed")
        }
      } catch (error) {
        console.error('Error resetting password:', error);
      }
    } else {
      // Show password mismatch error
      setMessage("Password is mismatching please check...")
    }
  };
  return (
    <Base title={"Change Password"}>
      <div>
        <Card sx={{ p: "10px" }}>
        <form onSubmit={handleSubmit}>
          <CardContent>
         
            <h3 className="password">New password</h3>
            <TextField
              sx={{ width: "300px" }}
              id="outlined-basic"
              type="password"
              variant="outlined"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </CardContent>
          <CardContent>
            <h3 className="password">Confirm password</h3>
            <TextField
              sx={{ width: "300px" }}
              id="outlined-basic"
              type="password"
              variant="outlined"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
             {message && <div className="alert alert-info">{message}</div>}
          </CardContent>
          <div className="otp-verify">
            <Button 
            type="submit"
              className="button-Bg"
              variant="outlined"
            >
              Reset Password
            </Button>
          </div>
          </form>
        </Card>
      </div>
    </Base>
  );
};

export default ChangePassword;
