import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Repositories from './pages/Repositories';

export default function App() {
  return (
    <div className="flex bg-[#FAFAFA] w-full min-h-screen">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/repositories" element={<Repositories />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}