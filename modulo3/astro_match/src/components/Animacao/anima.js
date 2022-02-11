import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/heart.json';
import Zoom from 'react-reveal/Zoom';

class LottieAnima extends React.Component{

render() {

  const defaultOptions = {

    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'heart'

    }
    
  };
    return (
    <div>
      <Zoom>
        <Lottie options={defaultOptions} height={'30%'} width={'30%'}/>
      </Zoom>  
    </div>
    );
  }
};
export default LottieAnima;









