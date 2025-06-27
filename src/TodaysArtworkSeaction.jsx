import TodayArtworkSectionImg from './assets/TodayArtworkBig.png'

function TodayArtworkSection(props) {
  return (
    <div className="TASection">
      <div className="TASectionCard" style={{ backgroundImage: `url(${TodayArtworkSectionImg})` }}>
        <h1 className="TASectionTitle">{props.title}</h1>
        <h3 className="TASectionSubtitle">{props.subtitle}</h3>
        <div className='TASectionDescriptioContainer'>
            <p className="TASectionDescription">{props.description}</p>
        </div>
        
        <div className='TASectionButtonContainer'>
            <button className="TASectionButton">Read More</button>
        </div>
        
      </div>
    </div>
  );
}

export default TodayArtworkSection;
