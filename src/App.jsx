
// import './App.css'
import { Routes, Route } from 'react-router-dom';
import BackToTopButton from './Components.jsx/Effects/BackToTop';
import { Header } from './Components.jsx/Header';
import ProfilePage from './Components.jsx/LandingPage';
import { Footer } from './Components.jsx/Footer';

function App() {
  return (
    <div className="dark:bg-black">
      <div className="relative  dark:bg-neutral-900 bg-white border-x border-gray-200 dark:border-gray-700">
        
        {/* Sticky Header */}
        <Header />

        {/* Spacer */}
        <div > {/* Adjust based on your header height */}
          <BackToTopButton />

          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App
