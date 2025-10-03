
function HomeCard(props){
    return(
        
        
        <div className="HomeCard">
            

            <button  className="HomeCardButton" onClick={props.onClick}>
                <img className="HomeCardImg" src={props.img} alt={props.alt} />
            </button>
        </div>
        
        
        
    );
}

export default HomeCard


