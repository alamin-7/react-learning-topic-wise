import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import ClassComponent from './components/ClassComponent';


function App() {

  function Temp(){
    return <div>This is temporary function</div>
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Users />
      <Temp />
      <ClassComponent />
    </div>
  );
}

export default App;
