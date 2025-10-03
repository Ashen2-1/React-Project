import React, {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ArtThreadsCSS.css'

import FristSeactionImg1 from "../../assets/2.png";
import FristSeactionImg2 from "../../assets/3.png";
import FristSeactionImg3 from "../../assets/4.png";
import FristSeactionImg4 from "../../assets/5.png";




function ArtThreadsBox(props) {
    const swiperWrappedRef = useRef(null);

    function adjustMargin(){
        const screenWidth = window.innerWidth;

        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft = 
            screenWidth <= 520
            ? "-60px"
            : screenWidth <= 650
            ? "-120px"
            : screenWidth <= 800
            ? "-100px"
            : "-122px";     /** Here shift the img left by 60px when screen bigger or equal to 800 */
        }
    }

    useEffect(() => {
        adjustMargin();
        window.addEventListener("resize", adjustMargin);
        return () => window.removeEventListener("resize", adjustMargin);

    }, []);
    
  return(
    //main
    <div className="artthreads-wrapper">

    
        <div className="ArtThreadsContainer">
            
            
            <div className="ArtThreadsHeaderImgContainer">
                
                <h1 className="ArtThreadsSeactionText">{props.title}</h1>
            </div>
            
            <Swiper
                modules={[Pagination, Autoplay]}
                grabCursor={true}
                initialSlide={Math.floor(props.data.length / 2)}
                centeredSlides={true}
                slidesPerView="auto"
                speed={800}
                longSwipes={true}
                slideToClickedSlide={true}
                
                rewind={true}
                pagination={{ el: ".swiper-pagination", clickable: true}}
                breakpoints={{
                    320: { spaceBetween: 40},
                    430: { spaceBetween: 50},
                    580: { spaceBetween: 70},
                    650: { spaceBetween: 30},

                }}
                onSwiper={(swiper) => {
                    swiperWrappedRef.current = swiper.wrapperEl;
                }}
                >
                
                {props.data.map((slide, index) => (
                /** {props.data.map((slide, index) => ( */
                
                    <SwiperSlide key={index} className="ArtThreadsSwiperSlideSeaction">
                        <img id="ArtThreadsSubImg" src={slide.imgSrc} alt={slide.title}/>
                        <div className="title">
                            <h1>{slide.title}</h1>
                        </div>
                        <div className="content">
                            <div className="title-box">
                                <h1 id='ArtThreadsSubTitle'>{slide.title}</h1>
                            </div>
                            <div className="text-box">
                                
                                <p>{slide.description}</p>
                            </div>
                            <div className="footer">
                            
                                <button>
                                    <span className="label">More..</span>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
                
                
                <div className="swiper-pagination"></div>
            </Swiper>

        </div>
    
    </div>//main
  );
  
  
}
export default ArtThreadsBox