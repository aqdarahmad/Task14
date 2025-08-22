import {   Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

import Second_Page from '../Pages/Second-Page';
import First_Page from '../Pages/Fisrt-Page'

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route index element={<First_Page />} />        
          <Route path="saved" element={<Second_Page />} /> 
        </Route>
      </Routes>
  
  );
}

export default App;
