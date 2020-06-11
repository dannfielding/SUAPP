//Modules
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import {useEffect} from 'react';

//Components
import Header from "./Components/Header";
import Error from "./Components/Error";

//Views
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import Profile from "./Views/Profile";
import Assignments from "./Views/Assignments";
import Contact from "./Views/Contact";

function App(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const history = props.history;
  const location = useLocation();
  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => props.history.listen(() => {
    menuOpen(false);
}));

  return (
    <div>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/" && location.pathname !== "/login" &&(
          <Header onClick={handleClick} open={menuOpen} />
        )}
        <GlobalStyles />
        <Route>
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/Profile">
                  <Profile />
                </Route>
                <Route path="/assignments">
                  <Assignments />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route component={Error} />
              </Switch>
        </Route>
      </ThemeProvider>
    </div>
  );
}

export default App;