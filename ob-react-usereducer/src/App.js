import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';
import Ejercicio27 from './components/Ejercicio27';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer Examples</h1>
        {/* <Counter></Counter> */}
        {/* <LoginUseState></LoginUseState> */}
        { /*<LoginUseReducer></LoginUseReducer> */} 
        <Ejercicio27></Ejercicio27>
      </header>
    </div>
  );
}

export default App;
