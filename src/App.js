import Greeting from './components/Greeting';
import Async from './components/Async';
import './App.css';
import Todos from './components/AsyncAxios';

function App() {
  return (
    <div className='App'>
      {/* <Async /> */}
      <Greeting />

      <Todos />
    </div>
  );
}

export default App;