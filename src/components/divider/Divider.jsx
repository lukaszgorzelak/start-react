import './divider.scss';

const Divider = (props) => {
    return (
        <>
            <div className="divider">
                <div className={`divider__line ${props.line} `}></div>
                <div className="divider__star">
                    <i className={`fa fa-star ${props.star}`} aria-hidden="true"></i>
                </div>
                <div className={`divider__line ${props.line} `}></div>
            </div>
        </>
    );
  };
  
  export default Divider;


