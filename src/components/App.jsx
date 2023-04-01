import './App.css'
import '../index.js'
import { NavBar } from './NavBar/NavBar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
export const App = () => {
  // Aqui irian los hooks
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Productos"}/>
    </div>
  )
}
