import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slice/cartSlice";

interface CartShowProps {
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartShow: React.FC<CartShowProps> = ({ setIsCartOpen }) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-sm mx-auto overflow-y-auto">
      {cart.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your cart is empty
        </div>
      ) : (
        <div>
          {cart.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-6 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md shadow-sm"
              />
              <div className="flex-1 ml-4">
                <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 mt-1">
                  ${item.price} <span className="text-sm text-gray-400">x {item.quantity}</span>
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:text-red-800 transition duration-200 text-3xl"
              >
                &times;
              </button>
            </div>
          ))}
          <div className="text-lg font-semibold mt-4 text-gray-800 flex justify-between">
            <span>Total:</span>
            <span>
              $
              {cart
                .reduce((total: number, item: any) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <button
            className="w-full bg-green-600 text-white py-2 rounded-md mt-6 hover:bg-green-500 transition-colors duration-200"
            onClick={() => {
              setIsCartOpen(false);
            }}
          >
            Back to shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartShow;
