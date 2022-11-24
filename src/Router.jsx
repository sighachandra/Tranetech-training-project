import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContent from './Header';
import HomePage from './Home';
import NewApp from './NewApp';
 

const Router = () => {
      return(
          <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="contact" element={<NewApp />} />
                {/* <Route path="categories" element={<Contact />} />
                <Route path="about" element={<Contact />} />
                <Route path="contact" element={<Contact />} /> */}
             </Routes>
          </BrowserRouter>
      );
};

export default Router;