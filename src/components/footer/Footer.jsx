import './footer.scss';

const Footer = () => {
    return (
        <>
         <div className="footer">
            <div className="footer__item">
                <h4 className="footer__heading">location</h4>
                <p className="footer__text">2215 John Daniel Drive<br/>
                Clark, MO 65243</p>
            </div>
            <div className="footer__item">
                <h4 className="footer__heading">around the web</h4>
                <div className="footer__icon-wrapper">
                    <i className="fab fa-facebook-square footer__icon"></i>                    
                    <i className="fab fa-twitter-square footer__icon"></i>                    
                    <i className="fab fa-linkedin footer__icon"></i>                
                </div>
            </div>
            <div className="footer__item">
                <h4 className="footer__heading">about react</h4>
                <p className="footer__text">Lorem ipsum dolor sit amet <br/>Dicta maiores aliquam minima!</p>
            </div>
         </div>
        </>
    );
  };
  
  export default Footer;