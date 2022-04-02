import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home'
import { Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav/BottomNav';
import Wallet from './components/Pages/Wallet/Wallet';
import Chat from './components/Pages/Wallet/Wallet';
import Settings from './components/Pages/Wallet/Wallet';
import Favourite from './components/Pages/Wallet/Wallet';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/wallet' element={<Wallet />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
