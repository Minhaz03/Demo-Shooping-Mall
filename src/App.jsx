import { useState } from "react";
import AllProducts from "./Components/Allproducts/AllProducts";
import CartContainer from "./Components/CartContainer/CartContainer";
import Header from "./Components/Header/Header";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handelIsActiveState = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    }
    else{
      setIsActive({
        cart: false,
        status: "about",
      })
    }
  };

  console.log(isActive)

  return (
    <>
      <section className="max-w-screen-2xl mx-auto">
        <Header></Header>

        <div className="flex justify-around mt-10">
          <AllProducts></AllProducts>

          <CartContainer
          handelIsActiveState={handelIsActiveState}
          isActive={isActive}
          ></CartContainer>
        </div>
      </section>
    </>
  );
}

export default App;
