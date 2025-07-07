import Header from './Header.jsx'
import HomeCard from './HomeCards.jsx';
import TodayArtworkSection from './TodaysArtworkSeaction.jsx';
import HomeGridCard from './HomeGridCard.jsx';
import SearchButton from './SearchButton.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage.jsx';

///////images
import DailyArtwork from './assets/DailyArtwork.png'
import ArtMap from './assets/ArtMap.png'
import ArtThreads from './assets/ArtThreads.png'
import StarterPack from './assets/StarterPack.png'

import HomeGridCard1 from './assets/HomeGridCard1.png'
import HomeGridCard2 from './assets/HomeGridCard2.png'
import HomeGridCard3 from './assets/HomeGridCard3.png'
import HomeGridCard4 from './assets/HomeGridCard4.png'

function App() {
    return(
      
      <Router>
        <div className='HomeColor'>
          
          <Routes>
            <Route path="/" element={
              <>

                <Header></Header>
                <div className="searchButtonContainer">
                  <SearchButton />
                </div>
                <div className="HomeCardRow">
                  <HomeCard img= {DailyArtwork} alt = "Daily Artwork"/>
                  <HomeCard img= {ArtMap} alt = "Art Map"/>
                  <HomeCard img= {ArtThreads} alt = "Art Threads"/>
                  <HomeCard img= {StarterPack} alt = "Starter Pack"/>
                </div>
                <TodayArtworkSection
                  title="Today's Artwork"
                  subtitle="Claude Monet, Water Lilies, 1905"
                  description="In Monet’s Water Lilies, time dissolves into color—each petal floats like a dream upon the mirror of still water. It breathes with the hush of nature, where light dances gently over lilies in an eternal moment of serenity."
                />

                <div className="HomeGridCardContainer">
                  <HomeGridCard className="HomeGridCard1" img={HomeGridCard1} title="How to Read a Contemporary Oil Painting?" description="Don't understand contemporary art?..." />
                  <HomeGridCard className="HomeGridCard2" img={HomeGridCard2} title="Into To Art History" description="A short introduction to art history." />
                  <HomeGridCard className="HomeGridCard3" img={HomeGridCard3} title="The Spread of Buddhist Art in Central Asia: Visual Culture along the Silk Road" />
                  <HomeGridCard className="HomeGridCard4" img={HomeGridCard4} title="The Impressionist Revolution: The Birth of Light, Shadow, and Modern Perception" />
                </div>
              </>
            } />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App
