import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { auth, onAuthStateChanged } from "../../config/firebase";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user logged in", user);

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const gotoDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <h1 className="text-xl text-blue-800 hover:text-blue-900 text-center">
          {user?.email}
        </h1>
      </div>
      <div className="container mx-auto p-6">
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
              <p className="text-sm text-gray-700 mb-4">{item.description}</p>
              <p className="text-lg font-semibold text-red-500">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;