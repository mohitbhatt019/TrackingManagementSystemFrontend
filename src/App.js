import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import CompanyList from './components/CompanyList';
import Navbar from './components/Navbar';
import CreateCompany from './components/CreateCompany';
import UpdateCompany from './components/UpdateCompany';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/create" element={<CreateCompany/>}/>
        <Route exact path="/companyList" element={<CompanyList/>}/>
        <Route exact path={`/edit/:id`}element={<UpdateCompany/>}/>
        <Route exact path={`/search`}element={<SearchUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
