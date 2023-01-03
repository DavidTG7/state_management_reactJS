import './App.css'
import { ClassState } from './ClassState'
import { CounterClass } from './CounterClass'
import { Footer } from './Footer'
import { UseState } from './UseState'


export const App = () => {
  return(
    <>
      <ClassState name="Class State" />
      <UseState name="Use State" />
      <CounterClass />
      <Footer name="DavidTG" year="2023" />
    </>
  )
}
