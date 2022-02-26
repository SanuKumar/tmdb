import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Users from "./components/Users";
import Products from "./components/Products";
import MutationObj from "./helper/mutationObj";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthRouter } from "./authRouter";
import Profile from "./components/Profile";
import { Spinner } from "react-bootstrap";

const Header = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  // const addExternalReact = () => {
  //   let div = document.getElementById("mock");
  //   div.innerHTML += "http://localhost:3000/";
  // };

  const styles = {
    button: {
      margin: 30,
    },
  };

  return (
    <div className="App">
      {!isAuthenticated && !isLoading && <LoginButton />}
      {isLoading && <Spinner animation="grow" />}
      {isAuthenticated && (
        <>
          <Profile />
          <div>
            <Link to="/user">Users</Link>
          </div>
          <div>
            <Link to="/product">Products</Link>
          </div>
          {/* <div style={styles.button}>
            <Button onClick={addExternalReact}>Add React</Button>
          </div> */}
          {/* <div id="mock"></div> */}
          <div style={styles.button}>
            <Button onClick={() => navigate("/mut")}>Go to Mul</Button>
          </div>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route
          exact
          path="/user"
          element={
            <AuthRouter>
              <Users />
            </AuthRouter>
          }
        />
        <Route
          exact
          path="/product"
          element={
            <AuthRouter>
              <Products />
            </AuthRouter>
          }
        />
        <Route
          exact
          path="/mut"
          element={
            <AuthRouter>
              <MutationObj />
            </AuthRouter>
          }
        />
      </Routes>
    </>
  );
};

export default App;
