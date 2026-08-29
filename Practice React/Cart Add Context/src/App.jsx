import { useContext } from "react"
import Cart from "./Components/Cart"
import Container from "./Components/Container"
import Navbar from "./Components/Navbar"
import { CartStore } from "./Context/CartContext"

const App = () => {
  let {cartOpen} = useContext(CartStore)
  return (
    <div>
      <Navbar />
      {cartOpen ? <Container /> : <Cart />}
    </div>
  )
}

export default App
