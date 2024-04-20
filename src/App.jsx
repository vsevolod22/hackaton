
import './App.css'

// import FetchUtils from './components/utils/FetchUtils.jsx'

// import FetchUtils from './components/fetchUtils/FetchUtils.jsx'

// import TableMeets from './components/fetchUtils/TableMeets.jsx'
import AddUsers from './Components/AddUsersPage/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Components/profilePage/index.jsx'


function App() {

  return (
    <>
      {/* <FetchUtils /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/profile/:id' element={<Profile />}/>
          <Route path="/" element={<AddUsers />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
