import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContent from './Header';
import HomePage from './Home';
import NewApp from './NewApp';
import Categories from "./categories";
 

const Router = () => {
      return(
          <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="contact" element={<NewApp />} />
                <Route path="categories" element={<Categories />} />
                {/* <Route path="about" element={<Contact />} />
                <Route path="contact" element={<Contact />} /> */}
             </Routes>
          </BrowserRouter>
      );
};

export default Router;