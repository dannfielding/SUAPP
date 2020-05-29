//Modules
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//Components
import Header from "./Components/Header";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

//Views
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import Profile from "./Views/Profile";
import Assignments from "./Views/Assignments";
import Feedback from "./Views/Feedback";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };

  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}

  return (
    <div>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/login" && (
          <Header onClick={handleClick} open={menuOpen}/>
        )}
        <GlobalStyles />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="animation" key={location.key} timeout={400}>
              <Switch location={location}>
                <Route exact path="/login">
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
                <Route path="/feedback">
                  <Feedback />
                </Route>
                <Route path="*" component={Error} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        {location.pathname !== "/login" && (
          <Footer onClick={handleClick} open={menuOpen}/>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;