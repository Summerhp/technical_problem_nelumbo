// src/App.tsx
import React from 'react';
import './App.css';
import Navbar from './components/navbar.tsx';
import Footer from './components/footer.tsx';
const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Footer/>
    </div>
  );
};
export default App;
