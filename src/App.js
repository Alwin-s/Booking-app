
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Pages/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default App;
