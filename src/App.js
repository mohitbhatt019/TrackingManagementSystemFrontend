import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CreateCompany from './components/CreateCompany';
import CompanyList from './components/CompanyList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/create" element={<CreateCompany/>}/>
        <Route exact path="/companyList" element={<CompanyList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
