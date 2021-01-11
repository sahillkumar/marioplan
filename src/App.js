import './App.css';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreateProject';
import PrivateRoute from './components/auth/privateRoute'
import HomeRoute from './components/auth/homeRoute';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute exact path="/project/create" component={CreateProject}/>
            <PrivateRoute exact path="/project/:id" component={ProjectDetails}/>
            <HomeRoute path="/signup" component={SignUp}/>
            <HomeRoute path="/signin" component={SignIn}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
