import { View, Text } from 'react-native'
import React from 'react'
import {SliderBox} from "react-native-image-slider-box"
import COLORS from '../../constants/color'

const Carousel = () => {
    const images=[
        require("../../assets/images/carousel1.jpg"),
        require("../../assets/images/carousel1.jpg"),
        require("../../assets/images/carousel1.jpg"),    
        
    ]
       
    
  return (
    <View>
      <Text style={{fontSize:17,fontWeight:"bold" ,marginLeft:24,color:"black",margin:10}}>Join Us For More Services</Text>
      <SliderBox 
      images={images}
      dotColor={COLORS.dark}
      inactiveDotColor={COLORS.white}
      imageLoadingColor={COLORS.black}
      autoplay
      autoplayInterval={1000}
      circleLoop
      paginationBoxVerticalPadding={20}
      sliderBoxHeight={180}
      paginationBoxStyle={{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 30
      }}
      ImageComponentStyle={{borderRadius: 25, width: '97%', margin: 20}}

      
    //   onCurrentImagesPressed={()=>alert("Clicked")}
      />
    </View>
  )
}

export default Carousel