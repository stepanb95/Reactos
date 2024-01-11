import './App.css';
import Navbar from "./Navbar.js";
import Button from "./Button.js"
import Podstranka from './Podstranka.js';
import Add from './Add.js';
import Add2 from './Add2.js';


const App = () => {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Add></Add>
        <Podstranka></Podstranka>
        <Add2></Add2>
        
        
      </div>
    
    
  
      
    );
  }

  export default App;