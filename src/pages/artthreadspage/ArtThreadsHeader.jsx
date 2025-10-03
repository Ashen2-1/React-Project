import './ArtThreadsCSS.css'


function ArtThreadsHeader(props) {
    return(
        <div className="ArtThreadsHeaderContainer">
            <img id="ArtThreadsHeaderImg" src={props.Img} alt="Art"/>
        </div>
    );


}
export default ArtThreadsHeader