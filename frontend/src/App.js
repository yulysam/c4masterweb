import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import Navigation from './components/Navbar'
import RegisterForm from './components/RegisterForm'
import EditUser from './components/EditUser'
import UserList from './components/UserList'
import EditProyec from './components/EditProyec'
import EditProyeclider from './components/EditProyeclider'
import InscripcionsList from './components/InscripcionsList'





import "bootswatch/dist/lumen/bootstrap.min.css"


function App() {
  return (
    <Router>
      <Navigation/>
      <div className='container p-4'>
        <Routes>
          <Route exact path="/" element={<MessageList/>} />
          <Route exact path="/new-message" element={<MessageForm/>} />
          <Route exact path="/new-register" element={<RegisterForm/>} />
          <Route exact path="/edit-user" element={<EditUser/>} />
          <Route exact path="/list-user" element={<UserList/>} />
          <Route exact path="/edit-proyec" element={<EditProyec/>} />
          <Route exact path="/edit-proyec-lider" element={<EditProyeclider/>} />
          <Route exact path="/list-inscripcions" element={<InscripcionsList/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
