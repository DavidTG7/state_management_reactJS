import Hands from "./handsTyping.json"
import Loading from "./loading.json"

import Lottie from "lottie-react"
import { useEffect, useRef } from "react"

export const LottieAnimation = () => {

  const lottieRef = useRef();
  const yearRef = useRef();

  useEffect(() =>{
    lottieRef.current.setSpeed(.8);
    yearRef.current.setSpeed(2)

  },[])
  
  
  return(
    <>
      <h1>Lottie</h1>
      <div style={{width: "300px",margin: "auto"}}>
        <Lottie
          style={{cursor: "pointer"}}
          autoplay={false}
          lottieRef={lottieRef}
          onMouseEnter={() => lottieRef.current.play()}
          onMouseLeave={() => lottieRef.current.pause()}
          animationData={Hands}
        />
        <input
          type="text"
          onFocus={() => lottieRef.current.play()}
          onBlur={() => lottieRef.current.pause()}
        />
        <Lottie
          // style={{cursor: "pointer"}}
          // autoplay={false}
          lottieRef={yearRef}
          // onMouseEnter={() => lottieRef.current.play()}
          // onMouseLeave={() => lottieRef.current.pause()}
          animationData={Loading}
        />
      </div>
    </>
  )
}