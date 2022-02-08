import './App.scss';
// import '../../variables';
import Header from './components/header/Header';
import Main from './components/main/Main';
// import Modal from './components/modal/Modal';

// import Nav from './components/navigation/Nav';

// import {
//   BrowserRouter as Router, 
//   Routes, 
//   Route
// } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Main />
    {/* <Router>
      <Nav />
        <Routes>
          <Route path='/portfolio' component={Header} />
          <Route path='/about' component={Header} />
          <Route path='/contact' component={Header} />
          <Route path='*' component={Header} />
        </Routes>
    </Router> */}
    </>
  );
};

export default App;
