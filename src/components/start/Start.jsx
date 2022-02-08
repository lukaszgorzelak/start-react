
import './start.scss';
import avatar from '../../img/avatar.svg';
import Divider from '../../components/divider/Divider';

const Start = () => {
    return (
        <>
            <div className="start">
                <div className="avatar">
                    <img src={avatar} alt="avatar" className="avatar__img"></img>
                    <h1 className="avatar__title">Start React</h1>
                </div>
                <Divider line="divider__light" star="star__light"/>
                <p className="avatar__text">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>
    );
  };
  
  export default Start;