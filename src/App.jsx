import './App.css'
import { ClassState } from './ClassState'
import { UseState } from './UseState'


export const App = () => {
  return(
    <>
      <ClassState name="Class State" />
      <UseState name="Use State" />
    </>
  )
}
