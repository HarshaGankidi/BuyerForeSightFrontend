import { Routes, Route } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;
