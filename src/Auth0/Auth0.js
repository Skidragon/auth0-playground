import auth0 from "auth0-js";
export class Auth0 {
  auth0 = new auth0.WebAuth({
    domain: "test-playground.auth0.com",
    clientID: "BPxXF78Nv3AHBrbg2WR97UU0OvoQwP0W",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });
  signup(signupParams, successCb, errorCb) {
    console.log("signup called");
    console.log(this.auth0);
    this.auth0.signup(
      {
        ...signupParams,
        username: "a",
        connection: "Username-Password-Authentication",
        user_metadata: {
          plan: "silver"
        }
      },
      (err, signupResult) => {
        if (err) {
          if (errorCb) {
            errorCb();
          }
        }
        console.log(signupResult);
        if (successCb) {
          successCb();
        }
      }
    );
  }
  login(loginParams, successCb, errorCb) {
    const authResult = this.auth0.login(
      {
        ...loginParams,
        realm: "Username-Password-Authentication"
      },
      err => {
        if (err) {
          if (errorCb) {
            errorCb();
          }
        }
        if (successCb) {
          successCb();
        }
      }
    );
    console.log(authResult);
  }
  getUserInfo() {
    this.auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (err) {
        return console.log(err);
      }
      console.log(authResult);
      this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
        if (err) {
          return console.log(err);
        }
        console.log(user);
        return user;
      });
    });
  }
}

// export class Auth0 {
//   auth0 = new auth0.WebAuth({
//     domain: "test-playground.auth0.com",
//     clientID: "BPxXF78Nv3AHBrbg2WR97UU0OvoQwP0W",
//     redirectUri: "http://localhost:3000/callback",
//     responseType: "token id_token",
//     scope: "openid"
//   });
//   create(user, callback) {
//     //this example uses the "pg" library
//     //more info here: https://github.com/brianc/node-postgres

//     const conString =
//       "postgres://mgotqphortqsmn:e54e8f13e4025c54e3596bfc2ea9c464d474747ea3299c8b54d71027c0d06996@ec2-184-73-210-189.compute-1.amazonaws.com:5432/dd1gjnr08aktae";
//     postgres(conString, function(err, client, done) {
//       if (err) return callback(err);

//       bcrypt.hash(user.password, 10, function(err, hashedPassword) {
//         if (err) return callback(err);

//         const query = "INSERT INTO users(email, password) VALUES ($1, $2)";
//         client.query(query, [user.email, hashedPassword], function(
//           err,
//           result
//         ) {
//           // NOTE: always call `done()` here to close
//           // the connection to the database
//           done();

//           return callback(err);
//         });
//       });
//     });
//   }

//   login(loginParams) {
//     console.log("login called");

//     this.auth0.login(
//       {
//         ...loginParams,
//         realm: "Username-Password-Authentication"
//       },
//       err => {
//         if (err) return alert("Something went wrong: " + err.message);
//         return alert("success signup without login!");
//       }
//     );
//   }
// }
