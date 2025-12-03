import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hackathons from './pages/Hackathons';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { BackgroundGradientAnimationDemo } from './components/BackgroundGradientAnimationDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hackathons" element={<Hackathons />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register/:id" element={<Register />} />
          <Route path="demo" element={<BackgroundGradientAnimationDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
