import '../App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Fibonacci } from '../Pages/Fibonacci'
import { NumericalSequence } from '../Pages/NumericalSequence'
import { Home } from '../Pages/Home'
import { Movies } from '../Pages/Movies'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/fibonacci' component={Fibonacci} />
          <Route exact path='/secuencia-numerica' component={NumericalSequence} />
          <Route exact path='/movies' component={Movies} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
