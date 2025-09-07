import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RootLayout from './base_layouts/root_layout';
import Home from './pages/home';

function App() {
  const storedMode = localStorage.getItem('mode');
  const [isDarkMode, setIsDarkMode] = useState(storedMode === 'dark');

  useEffect(() => {
    document.documentElement.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(newMode === 'dark');
    localStorage.setItem('mode', newMode);
    document.documentElement.classList.toggle('dark-mode'); // Toggle the class on mode change
  };

  return (
    <BrowserRouter>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Routes>
          <Route path="/" element={<RootLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;