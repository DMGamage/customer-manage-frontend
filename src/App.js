
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddCustomer from './users/AddCustomer';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addcustomer" element={<AddCustomer/>}/> 

      </Routes>
      

      </Router>
      
      
    </div>
  );
}

export default App;
