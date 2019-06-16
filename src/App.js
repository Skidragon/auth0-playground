import React from "react";
import "./App.css";
import { Home } from "./views/home/Home";
import { Auth } from "./views/auth/Auth";
import { Callback } from "./views/callback/Callback";
import { Route } from "react-router-dom";
import { GlobalContext } from "./GlobalContext/GlobalContext";
import { Auth0 } from "./Auth0/Auth0";
function App() {
  const auth0 = new Auth0();
  return (
    <div className="App">
      <div className="routes">
        <GlobalContext.Provider
          value={{
            auth0
          }}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/callback" component={Callback} />
        </GlobalContext.Provider>
      </div>
    </div>
  );
}

export default App;
