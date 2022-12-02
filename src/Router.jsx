import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Home';
import NewApp from './NewApp';
import Categories from "./categories";
import LeaseContact from './LeaseContact/LeaseContact'
 

const Router = () => {
      return(
          <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="contact" element={<NewApp />} />
                <Route path="categories" element={<Categories />} />
                <Route path="leaseContact" element={<LeaseContact />} />
                {/* <Route path="contact" element={<Contact />} /> */}
             </Routes>
          </BrowserRouter>
      );
};

export default Router;