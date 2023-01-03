import './App.css'
import { ClassState } from './ClassState'
import { Footer } from './Footer'
import { UseState } from './UseState'


export const App = () => {
  return(
    <>
      <ClassState name="Class State" />
      <UseState name="Use State" />
      <Footer name="DavidTG" year="2023" />
    </>
  )
}
