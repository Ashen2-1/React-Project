import Home from './assets/HeadingImg.png'
function Header(){

    return(
        <div className='Header'>
           <header>
            <h1 className="HomeHeader">HOME</h1>
            <hr className='Line'></hr>
            <div className='HeaderImgContainer'>
                <img className='HeaderImg' src={Home} alt="Home Background"></img>
            </div>
            
            </header> 
        </div>
        
    );
}

export default Header