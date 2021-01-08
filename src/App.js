import './App.css';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
