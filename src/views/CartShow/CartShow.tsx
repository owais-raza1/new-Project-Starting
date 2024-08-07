import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slice/cartSlice";

const CartShow = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-5xl text-gray-600">Your cart is empty</p>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6 space-y-6">
          {cart.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center p-4 border-b border-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-52 h-52 object-cover rounded-lg shadow-md"
              />
              <div className="flex-1 ml-6">
                <h2 className="text-2xl font-semibold text-gray-700">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-lg">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-gray-600 text-md mt-1">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-4 ml-4">
                <div className="text-xl font-bold text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-2xl mt-6 text-gray-800">
            Total: $
            {cart
              .reduce(
                (acc: number, item: any) => acc + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartShow;
