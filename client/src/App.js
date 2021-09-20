import React, { useReducer, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import "./home/Home.css"; giving error
import Navbar1 from "./components/home/Navbar1";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import { initialState, reducer } from "./components/reducer/UseReducer";
import List from "./components/Influencer/List";
import Search from "./components/search/Search";
import Footer from "./components/home/Footer";

// we create a contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/userlist">
        <List />
      </Route>

      {/* <Route path="/list" component={List} /> */}

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

const App = () => {
  //* we use useReducer

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Navbar1 />
      <Routing />
      <Footer />
    </UserContext.Provider>
  );
};

export default App;
