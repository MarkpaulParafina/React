import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Product from "./Product.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
      <Header></Header>
      <UserGreeting isLoggedIn={true} username="Bigbrew"></UserGreeting>
      <Card></Card>
      <Food></Food>
      <Button></Button>
      <Product name="Regular Milktea" price={38} isAvailable={true}></Product>
      <Product name="Regular Milktea" price={38} isAvailable={true}></Product>
      <Product name="Fraffe" price={38} isAvailable={false}></Product>
      <Footer></Footer>
    </>
  );
}

export default App
