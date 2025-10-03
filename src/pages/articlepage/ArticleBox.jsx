function ArticleBox(props) {
  const handleTagClick = (tag) => {
    console.log("Clicked tag:", tag);
  };

  // Function to render different section types
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className="article-text-section">
            {section.title && <h2>{section.title}</h2>}
            <p>{section.content}</p>
          </div>
        );
      case 'image':
        return (
          <div key={index} className="article-image-section">
            <img src={section.src} alt={section.alt || "Article image"} />
            {section.caption && <div className="image-caption">{section.caption}</div>}
          </div>
        );
      case 'divider':
        return <hr key={index} className="article-divider" />;
      default:
        return null;
    }
  };

  return(
    <div className="ArticleContent">
      <div className='Article'>
        <h1 id='ArticleTitle'>{props.title}</h1>
        
        <div className="ArticlePageSection">
          {/* Render all sections */}
          {props.sections && props.sections.map((section, index) => 
            renderSection(section, index)
          )}
          
          <hr id='ArticleLine'></hr>
          
          {/* Tags section */}
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

export default ArticleBox;