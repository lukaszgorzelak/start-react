import './about.scss';
import Divider from '../../components/divider/Divider';

const About = () => {
    return (
        <>
            <div className="about">
                <h2 id="about" className="about__header">about</h2>
                <Divider line="divider__light" star="star__light"/>
                <div className="about_text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit neque quaerat saepe quae quia vitae, eveniet tempora. Nemo quidem facere laboriosam tempora dolorem optio nobis quasi expedita cum. Ipsum.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores impedit neque quaerat saepe quae quia vitae, eveniet tempora. Nemo quidem facere laboriosam tempora dolorem optio!</p>
                </div>
                <button className="about_btn">
                    <i className="fa fa-download" aria-hidden="true"></i>
                    <span>Free Download!</span>
                </button>
            </div>
        </>
    );
  };
  
  export default About;


