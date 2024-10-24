import './CartContainer.css'

const CartContainer = ({handelIsActiveState, isActive }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Cart Container</h3>

      <div className="flex justify-around">
        <button onClick={() => handelIsActiveState("cart")} className={`
            btn cursor-pointer ${isActive.cart? "btn active" : 'btn cursor-pointer'}`
            }>Cart</button>

        <button 
        onClick={() => handelIsActiveState("about")}  
        className={
            `${isActive.cart? "btn cursor-pointer" : "active btn"}`}>About</button>
      </div>
    </div>
  );
};

export default CartContainer;
