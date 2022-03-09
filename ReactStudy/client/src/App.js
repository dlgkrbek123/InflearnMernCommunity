import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h3>헤딩입니다.</h3>
      <Routes>
        <Route path="/" element={<div>엄준식</div>} />
        <Route path="/a" element={<div>A</div>} />
        <Route path="/b" element={<div>B</div>} />
        <Route path="/c" element={<div>C</div>} />
      </Routes>
    </>
  );
}

export default App;
