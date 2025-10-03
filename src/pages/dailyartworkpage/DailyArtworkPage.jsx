//// Package
import DailyArtworkGridBox from '../dailyartworkpage/DailyArtworkGridBox';

//// Imges




function DailyArtworkPage(props) {


  return(

    <>
      <DailyArtworkGridBox 
        DailyArtworkTitile = "Daily Artwork"
        subtitle = "Grande Décoration"
        subdescription = "If Impressionism is a hymn to the natural interplay of light and shadow, then Claude Monet’s “Water Lilies” series is its softest melody. “Water Lilies” is not the title of a single painting, but the name of an entire series. Over the last three decades of his life, Claude Monet continually explored and reinterpreted this motif, creating over 250 paintings of water lilies. "
        title = "Water Lilies"
        author = "Claude Monet, Water Lilies, 1905,"
        loaction = "The Museum of Fine Arts, Boston, MA"
        paragraph = " In the garden of his home in Giverny, France, Monet intertwined the pond’s lilies, reflections, and sky into a dreamlike space with no clear boundaries. What appears on the canvas is no longer a direct representation of reality, but rather an emotional projection where light and water merge, an attempt to capture fleeting moments in the flow of time"
        tags = {["Oil Painting", "19th century", "Impressionist", "Claude Monet"]}
      />
    </>

  );
  
  
}

export default DailyArtworkPage