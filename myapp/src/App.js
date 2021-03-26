import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './componentes/Home'


function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path = "/">
          <Home titulo="Bienvenido al Home"/>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
