import logo from './logo.svg';
import './App.css';
import ClassProps from './PropsApp/ClassProps';
import FuncProp from './PropsApp/FunctionalProps';

function App() {
  return (
    <div>
     <ClassProps name="Rupesh Mathur" city="Delhi"><p>I am from Child</p> </ClassProps>
     <ClassProps name="Siddharth Mathur" city="Jaipur"><button>Click Me</button></ClassProps>
     <FuncProp name="Shaifali Mathur" city="VDN"></FuncProp>
    </div>
  );
}

export default App;
