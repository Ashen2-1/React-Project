
function HomeGridCard(props) {
  return (
    
      <button className={`HomeGridSectionCard ${props.className}`} style={{ '--bg-img': `url(${props.img})` }} onClick={props.onClick}>

        <h1 className="HomeGridSectionTitle">{props.title}</h1>
        <p className="HomeGridSectionDescription">{props.description}</p>
      </button>
    
    
  );
}

HomeGridCard.defaultProps = {
  title: "",
  description: "",
};

export default HomeGridCard;