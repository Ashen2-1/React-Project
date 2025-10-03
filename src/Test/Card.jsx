///This will create a Card on the web with titl, image and more
///<p>: This stand for paragraph
import ArtPic from "./assets/Mona_Lisa.jpg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={ArtPic} alt="Art Picture"></img>
            <h2 className="card-titl">Mona Lisa</h2>
            <p className="card-text">A portrait of Lisa Gherardini, known for her enigmatic smile and mysterious expression.</p> 

        </div>
    );
}

export default Card