
import * as S from "./styles"
import { imageSlider } from "../../@types/types";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SliderImage({ imgUrls } : imageSlider) {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4500,
    adaptiveHeight: true,
    
  };

  return (
    <S.RightBlockContainer>
      <S.SliderContainer>
        <Slider {...settings}>
          
            {imgUrls.map((url) => (
              <S.SliderImg src={url} />  
            ))}
      
        </Slider>
      </S.SliderContainer>
    </S.RightBlockContainer>
  );
}

export default SliderImage;
