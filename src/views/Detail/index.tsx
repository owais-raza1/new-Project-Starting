import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getFirestoreSingleProduct } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";

function Detail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const color: any = useSelector((state: any) => state.color);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartFun = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;
        const productData = await getFirestoreSingleProduct(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: color }}
        className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 mt-[72px]"
      >
        {loading ? (
          <div className="flex flex-col items-center bg-gray-300">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
            <p className="text-blue-800 text-lg">Loading product...</p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="flex flex-col md:flex-row">
              <img
                src={product?.image}
                alt={product?.title}
                className="w-full md:w-1/2 h-96 object-cover"
              />
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-semibold mb-4 text-gray-800">
                    {product?.title}
                  </h1>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">ID:</span> {product?.id}
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    {product?.description}
                  </p>
                  <p className="text-xl font-bold text-red-600 mb-4">
                    ${product?.price?.toFixed(2)}
                  </p>
                  <p className="text-lg text-gray-600 mb-4">
                    {product?.category}
                  </p>
                  {product?.rating && (
                    <>
                      <p className="text-sm text-green-700 font-bold mb-2">
                        <span className="font-bold text-gray-600">Rating:</span>{" "}
                        {product.rating.rate}
                      </p>
                      <p className="text-sm font-bold text-green-700">
                        <span className="font-bold text-gray-600">
                          Reviews:
                        </span>{" "}
                        {product.rating.count}
                      </p>
                    </>
                  )}
                </div>
                <button
                  onClick={addToCartFun}
                  className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition ease-in-out duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 py-2 px-4 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 transition ease-in-out duration-300"
                >
                  Back to Products
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
