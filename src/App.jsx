import { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SizesProvider from './context/SizesContext';
import ThemeProvider from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useLayoutEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <SizesProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </SizesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
