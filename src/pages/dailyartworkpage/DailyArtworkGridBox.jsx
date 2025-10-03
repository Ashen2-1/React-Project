import TodayArtworkBig from '../../assets/TodayArtworkBig.png';


function DailyArtworkGridBox(props) {

    const handleTagClick = (tag) => {
    console.log("Clicked tag:", tag);
    // Here Eric or Me this is a note from the Tom in July 29 2025! Here is where to add route, or do anything with the tag
    };
  return(

    <div className='DailyArtwork'>
        <h1 id='DailyArtworkTitile'>{props.DailyArtworkTitile}</h1>
        <div className="DailyArtworkPageSeaction">

                <img id="DailyArtworkImg" src={TodayArtworkBig} alt="This is the Daily Artwork Image!"></img>

                <div className='SubSeaction'>
                    <h3 id='DailyArtworkSubtitle'>{props.subtitle}</h3>
                    <p id='DailyArtworkSubdescription'>{props.subdescription}</p>
                </div>

                <div className='TitleSeaction'>
                    <h3 id='DailyArtworkTitle'>{props.title}</h3>
                    <h4 id='DailyArtworkAuthor'>{props.author}</h4>
                    <h4 id='DailyArtworkLoaction'>{props.loaction}</h4>
                    <hr id='DailyArtworkLine'></hr> 
                </div>
                

                <div className="TagsSection">
                    {props.tags && props.tags.map((tag, index) => (
                        <button className="TagButton" key={index} onClick={() => handleTagClick(tag)}>
                        {tag}
                        </button>
                    ))}
                </div>

                <div className='DailyArtworkParg'>
                    <p>{props.paragraph}</p>
                </div>

                
            </div>

    </div>

    
    

  );
  
  
}

export default DailyArtworkGridBox