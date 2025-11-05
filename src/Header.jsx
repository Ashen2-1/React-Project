import Home from './assets/HomeHeadingImg.png'
import Search from './assets/Search_Icon.png'
import DiscoverMoreImg from './assets/Arrow_Icon.png'
import HomeHeaderLine from './assets/HomeHeaderLine.png'
import HomeHeaderImg2 from './assets/HomeHeaderImg2.png'
import { useNavigate } from 'react-router-dom';
function Header(props){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search');
    };
    const handleTagClick = () => {
        navigate('/DailyArtworkPage');
    };
    const handleArtThread = () => {
        navigate('/ArtThreadsPage');
    };
    const handleStarterPackPage = () => {
        navigate("/StarterPage");  // ← go to /Starter Pack Page 
    };
    return(
        <div className='Header'>
           <header>
            <div className='Nevgbar'>
                <h1 className="HomeHeader">HOME</h1>
                
                    <div className='NevgbarWordsButton'>
                        <button onClick={handleTagClick}>DALY ARTWORK</button>
                        <button>ARTMAP</button>
                        <button onClick={handleArtThread}>ART THREAD</button>
                        <button onClick={handleStarterPackPage}>STARTER PACK</button>
                    </div>
                    
                    <button className = 'HearderSearchButton' onClick={handleClick}>
                        <img className='SearchIcon' src={Search}></img>
                    </button>
                </div>
                
          
            

            
            <div className='HeaderImgContainer'>
                <img className='HeaderImg' src={Home} alt="Home Background"></img>
                <div className='HeaderImgTopText'>
                    <h2>ARTSCOPE</h2>
                    <img src={HomeHeaderLine}></img>
                </div>
                <div className='HeaderImg2'>
                    <img src={HomeHeaderImg2}></img>
                </div>
                <div className='HeaderImgMainText'>
                    <h1 className='HomeHeaderOverlayText'>Explore the World of 
                        <br/>Imagination at Artscope</h1>
                    <h3 className='HomeHeaderOverlayText2'>Art History Exchange and Exploration <br/>Platform</h3>
                </div>
                <div className='HeaderImgButton'>
                    <button className='DiscoverMoreText'>Discover More</button>

                    
                </div>
                <button className='DiscoverMoreImg'>
                    <img src={DiscoverMoreImg}></img>
                </button>
                    
                
            </div>
            
            </header> 
        </div>
        
    );
}

export default Header