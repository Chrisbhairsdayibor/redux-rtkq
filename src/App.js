import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
  <h1>RTK Query</h1>


  <Routes>

<Route path='/' element={<Home />}/>
<Route path='/:id' element={<Detail />}/>
  </Routes>
    </div>
  );
}

export default App;
