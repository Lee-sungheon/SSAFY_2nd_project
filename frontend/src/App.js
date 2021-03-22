import React from "react";
import { Provider } from "react-redux";
import store from "./common/store";
// import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/container/Home";
import Header from "./navbar/container/Header";
import EmptyPage from "./common/EmptyPage";
import "./App.css";
import Evaluation from "./evaluation/container/Evaluation";
import Account from "./User/container/Account";
import Login from "./User/container/Login";
import Signup from "./User/container/Signup";
import ProfileList from "./User/container/ProfileList";

// const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/eval">
              <Evaluation />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profilelist">
              <ProfileList />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
