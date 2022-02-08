import './main.scss';
import Start from '../../components/start/Start';
import Portfolio from '../../components/portfolio/Portfolio';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

const Main = () => {
    return (
        <>
            <main className="main">
                <Start />
                <Portfolio />
                <About />
                <Contact />
                <Footer />
            </main>
        </>
    );
  };
  
  export default Main;