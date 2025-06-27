
function HomeCard(props){
    return(
        
        
        <div className="HomeCard">
            

            <button  className="HomeCardButton">
                <img className="HomeCardImg" src={props.img} alt={props.alt} />
            </button>
        </div>
        
        
        
    );
}

export default HomeCard


