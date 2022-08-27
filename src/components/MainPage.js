import { NavBar } from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Footer } from './Footer';

export const MainPage = () => {
    return (
        <div className="MainPage">
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
    
}