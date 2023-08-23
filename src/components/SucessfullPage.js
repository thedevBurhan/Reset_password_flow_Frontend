import React from "react";
import success from "./Gif/success.gif";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const SuccessfullMessage = () => {
  const history = useHistory();
  return (
    <div className="main-component">
      <div className="logOut">
        <Button
          className="button-Bg"
          onClick={() => history.push("/")}
          variant="outlined"
        >
          Log out
        </Button>
      </div>

      <h1 className="success">Success! 👍</h1>
      <img src={success} alt="success.gif" />
    </div>
  );
};

export default SuccessfullMessage;
