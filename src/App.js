import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditForm from './components/editform';
import AllForms from './components/allforms';
import CreateForm from './components/createform';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/all' element = {<AllForms/>}></Route>
        <Route path = '/create' element = {<CreateForm/>}></Route>
        <Route path = '/edit/:id' element = {<EditForm/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
