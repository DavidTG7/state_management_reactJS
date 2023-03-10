import './App.css'
import { ClassState } from './ClassState'
import { ColorChangeClass } from './ColorChangeClass'
import { CounterClass } from './CounterClass'
import { Footer } from './Footer'
import { InputChangeClass } from './InputChangeClass'
import { LottieAnimation } from './LottieAnimation'
import { UseState } from './UseState'


export const App = () => {
  return(
    <>
      <ClassState name="Class State" />
      <UseState name="Use State" />
      <LottieAnimation />
      <InputChangeClass />
      <ColorChangeClass />
      <CounterClass />
      <Footer name="DavidTG" year="2023" />
    </>
  )
}
