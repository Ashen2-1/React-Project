
function HomeGridCard(props) {
  return (
    
      <div className={`HomeGridSectionCard ${props.className}`} style={{ '--bg-img': `url(${props.img})` }}>

        <h1 className="HomeGridSectionTitle">{props.title}</h1>
        <p className="HomeGridSectionDescription">{props.description}</p>
      </div>
    
    
  );
}

HomeGridCard.defaultProps = {
  title: "",
  description: "",
};

export default HomeGridCard;