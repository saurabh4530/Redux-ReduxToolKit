//@ts-nocheck
import logo from './logo.svg';
import './App.css';
import Index from './features/Index';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';


function App() {
  return (
    <div className="App">

      {/* fetch data using async thunk */}
      {/* <Index/> */}

      {/* CRUD app and create async thunk */}
   <h1>hello</h1>
   <BrowserRouter>
   <Navbar/>
   <Routes>

    <Route exact path='/' element={<Create/>}/>
    <Route exact path='/read' element={<Read/>}/>
    <Route exact path='/edit/:id' element={<Update/>}/>
   </Routes>
   </BrowserRouter>

</div>
  );
}

export default App;
