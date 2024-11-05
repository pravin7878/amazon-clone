import MySlider from "../../utils/swiperSlide/Swiper"
import { sliderOneCont } from "../../utils/content"
import { ProductListing } from "../ProductListing"

export const Page1 = () => {



  return (<>
    <div className="relative ">
      <MySlider data={sliderOneCont} />
      <div className="absolute top-[50%] left-0 w-full flex items-center justify-center z-10 text-white ">
        <ProductListing/>
       
      </div>
      
    </div>
    <div className="w-full bg-[#E3E6E6] h-[1000px] ">
      </div>
  </>
  )
}
