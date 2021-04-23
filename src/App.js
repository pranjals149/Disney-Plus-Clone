import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Detail from './Components/Detail';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/detail/:id'>
            <Detail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
