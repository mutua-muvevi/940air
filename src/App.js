import './themes/theme.css';
import './App.css';
import Main from './components/main/main'
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import User from './components/User/User';
import Notfound from './components/NotFound/Notfound';
import Contactus from './components/ContactUs/Contactus';
import About from './components/About/About';
import Services from './components/Services/Services';
import AirFreight from './components/Services/AirFreight';
import Trucking from './components/Services/Trucking';
import SeaFreight from './components/Services/SeaFreight';
import DoorToDoor from './components/Services/DoorToDoor';
import TempControlled from './components/Services/TempControlled';
import AirCharter from './components/Services/AirCharter';
import Blogs from './components/Blogs/Blogs';
import SingleBlog from './components/Blogs/SingleBlog/SingleBlog';
import Customer from './components/Customer/Customer';
import PrivacyPolicy from './components/Customer/PrivacyPolicy/PrivacyPolicy';
import ResourceFormula from './components/Customer/ResourceFormula/ResourceFormula';
import TermsAndConditions from './components/Customer/TermsAndConditions/TermsAndConditions';
import PastPerformance from './components/Customer/PastPerformance/PastPerformance';

function App() {
  return (
    // <div className="app">
    //       <Navbar/>
    //       <Main/>
    // </div>

    <Router className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/air-freight" element={<AirFreight/>}/>
        <Route path="/services/trucking" element={<Trucking/>}/>
        <Route path="/services/sea-freight" element={<SeaFreight/>}/>
        <Route path="/services/door-to-door" element={<DoorToDoor/>}/>
        <Route path="/services/temperature-controlled" element={<TempControlled/>}/>
        <Route path="/services/air-charter" element={<AirCharter/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:slug" element={<SingleBlog/>}/>
        <Route path="/customer-resources" element={<Customer/>}/>
        <Route path="/resource-formula" element={<ResourceFormula/>}/>
        <Route path="/terms-and-condition" element={<TermsAndConditions/>}/>
        <Route path="/past-performance" element={<PastPerformance/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>

        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>

  );
}

export default App;
