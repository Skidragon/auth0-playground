import React, { useState, useEffect } from "react";
import { Auth0 } from "../../Auth0/Auth0";
const Callback = () => {
  useEffect(() => {
    console.log(new Auth0().getUserInfo());
  }, []);
  return <div>Callback</div>;
};

export { Callback };
