import { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Shared/Header/Header';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/privateRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AddBlog from './Component/Dashboard/AddBlog/AddBlog';
import ManageBlog from './Component/Dashboard/ManageBlog/ManageBlog';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addBlogs">
            <AddBlog></AddBlog>
          </PrivateRoute>
          <PrivateRoute path="/blogManage">
           <ManageBlog></ManageBlog>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
    
  );
}

export default App;
