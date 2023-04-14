import './App.css'
import { NavBar } from './NavBar/NavBar'
import { ItemCount } from './ItemCount/ItemCount';
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
// import { Dolar } from './Dolar/Dolar';
export const App = () => {
  // Aqui irian los hooks
  return(
    <div>
      <NavBar/>
      {/* <Dolar/> */}
      <ItemCount ValInicial={1} stock={15} />
      <ItemListContainer />
    </div>
  )
}
