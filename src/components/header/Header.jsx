import './header.scss';
import Nav from '../../components/navigation/Nav';
import Portfolio from '../../components/portfolio/Portfolio';
import About from '../../components/about/About';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

const Header = () => {

    return (
        <>
         <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <p>Start React</p>
                    <Router>
                        <Nav />
                        <Routes>
                            <Route path='/portfolio' component={Portfolio} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Header} />
                            <Route path='*' component={Header} />
                        </Routes>
                    </Router>
                </div>
            </div>
         </header>
        </>
    );
  };
  
  export default Header;