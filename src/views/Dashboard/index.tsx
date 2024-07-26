import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { auth, onAuthStateChanged } from "../../config/firebase";
import { getFirestoreProducts } from "../../config/firebase";

interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>();
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const apiResponse = await fetch("https://fakestoreapi.com/products");
        const apiProducts = await apiResponse.json();

        const firestoreProducts = await getFirestoreProducts();

        const combinedProducts = [...firestoreProducts, ...apiProducts];

        setProducts(combinedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gotoDetail = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 p-6 min-h-screen flex flex-col justify-center items-center relative">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
            <p className="text-blue-800 text-lg">Loading products...</p>
          </div>
        ) : (
          <>
            <h1 className="text-xl text-blue-800 hover:text-blue-900 text-center mb-8">
              {user?.email}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg shadow-lg p-4 bg-white hover:shadow-xl hover:border-red-500 transform transition-transform duration-500 ease-in-out cursor-pointer"
                  onClick={() => gotoDetail(item.id)}
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-36 h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <p className="text-lg font-semibold text-red-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed left-1/2 transform -translate-x-1/2 top-20 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 15l-7-7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
