import ArtThreadsBox from "./ArtThreadsBox"
import ArtThreadsHeader from "./ArtThreadsHeader";
// Image Seactions
import HeaderImage from '../../assets/1.png';

// Image Frist Seaction
import FristSeactionImg1 from "../../assets/2.png";
import FristSeactionImg2 from "../../assets/3.png";
import FristSeactionImg3 from "../../assets/4.png";
import FristSeactionImg4 from "../../assets/5.png";

const slidesData = [
    {
        imgSrc: FristSeactionImg1,
        title: "Painting",
        description: "Tom is your father",
        
    },
    {
        imgSrc: FristSeactionImg2,
        title: "Sculpture",
        description: "Tom is your father",
        
    },
    {
        imgSrc: FristSeactionImg3,
        title: "Print Media",
        description: "Tom is your father",
        
    },
    {
        imgSrc: FristSeactionImg4,
        title: "Print Media",
        description: "Tom is your father",
        
    },
    {
        imgSrc: FristSeactionImg4,
        title: "Print Media",
        description: "Tom is your father",
        
    },
    {
        imgSrc: FristSeactionImg4,
        title: "Print Media",
        description: "Tom is your father",
        
    },
    {
        imgSrc: FristSeactionImg4,
        title: "Print Media",
        description: "Tom is your father",
        
    },
 
]

function ArtThreadsPage() {


    return(
        <div>
            <ArtThreadsHeader Img={HeaderImage}/>
            <ArtThreadsBox title="Medium" data={slidesData}/>
            <ArtThreadsBox title="Genre" data={slidesData} />
        </div>
        
        
    );
  
  
  
}
export default ArtThreadsPage