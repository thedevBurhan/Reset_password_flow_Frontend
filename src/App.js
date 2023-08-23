
import './App.css';
import {Switch,Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ForgetPassword from './components/Forget-password';
import SuccessfullMessage from './components/SucessfullPage';
import ChangePassword from './components/ChangePassword';
function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path='/'>
        <Login/>
      </Route>
      <Route path="/forget-password">
        <ForgetPassword/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/ChangePassword">
        <ChangePassword/>
      </Route>
      <Route path="/SuccessfullMessage">
        <SuccessfullMessage/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
