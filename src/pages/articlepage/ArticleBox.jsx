
function ArticleBox(props) {

    const handleTagClick = (tag) => {
    console.log("Clicked tag:", tag);
    // Here Eric or Me this is a note from the Tom in July 29 2025! Here is where to add route, or do anything with the tag
    };
  return(
    <div className="ArticleContent">
        <div className='Article'>
            <h1 id='ArticleTitile'>{props.DailyArtworkTitile}</h1>
            
                <div className="ArticlePageSeaction">

                    <div className="ArticleParagraphTitle">
                        <h2>{props.ParagraphTitle}</h2>
                    </div>
                    <div className='ArticleParagraph'>
                        <p>{props.paragraph}</p>
                    </div>

                    <div className="ArticleImg">
                        <img>{props.Img}</img>
                        <h4>{props.ImgLable}</h4>
                    </div>

                    <hr id='ArticleLine'></hr>
                    <div className="TagsSection">
                        {props.tags && props.tags.map((tag, index) => (
                            <button className="TagButton" key={index} onClick={() => handleTagClick(tag)}>
                            {tag}
                            </button>
                        ))}
                    </div>

                </div>
            
        </div>
    </div>
  );
  
  
}
export default ArticleBox