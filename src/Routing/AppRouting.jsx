import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Second_Page from '../Pages/Second-Page';
import First_Page from '../Pages/Fisrt-Page'
import { ThemeProvider } from '../ThemeContext/ThemeProvider';

function App() {
  return (
   <>
   <ThemeProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<First_Page />} />
        <Route path="saved" element={<Second_Page />} />
      </Route>
    </Routes>
    </ThemeProvider>
    </>

  );
}

export default App;
