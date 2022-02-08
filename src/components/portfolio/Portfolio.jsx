import './portfolio.scss';
import cabin from '../../img/cabin.png';
import cake from '../../img/cake.png';
import circus from '../../img/circus.png';
import game from '../../img/game.png';
import safe from '../../img/safe.png';
import submarine from '../../img/submarine.png';
import Divider from '../divider/Divider';
import Card from '../card/Card';

const photos = [
{ 
    id: 1, 
    name: cabin
},
{ 
    id: 2, 
    name: cake
},
{ 
    id: 3, 
    name: circus 
},
{ 
    id: 4, 
    name: game
},
{ 
    id: 5, 
    name: safe
},
{ 
    id: 6, 
    name: submarine 
},
]

const Portfolio = () => {

    return (
        <>
            <div className="portfolio">
                <h2 id="portfolio" className="heading">Portfolio</h2>
                <Divider line="divider__dark" star="star__dark"/>
                <div className="portfolio__wrapper">
                    {photos.map((photo) => (
                        <Card key={ photo.id } photo={ photo.name } />
                    ))}
                </div>
            </div>
        </>
    );
  };
  
  export default Portfolio;