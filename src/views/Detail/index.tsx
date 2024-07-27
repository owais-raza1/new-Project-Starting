import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function Detail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;
        const firestoreDoc = await getDoc(doc(db, "products", id));
        if (firestoreDoc.exists()) {
          setProduct({ id, ...firestoreDoc.data() });
        } else {
          const apiResponse = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          const apiProduct = await apiResponse.json();
          setProduct(apiProduct);
        }
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
      <div className="min-h-screen flex items-center justify-center mt-[74px]">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
            <p className="text-blue-800 text-lg">Loading product...</p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-5xl w-full">
            <div className="flex flex-col md:flex-row">
              <img
                src={product.image}
                alt={product.title}
                className="w-full md:w-1/2 h-auto object-cover"
              />
              <div className="p-6 w-full md:w-1/2">
                <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">ID:</span> {product.id}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-red-600 mb-2">
                  ${product.price?.toFixed(2)}
                </p>
                <p className="text-lg text-gray-600 mb-4">{product.category}</p>
                {product.rating && (
                  <>
                    <p className="text-sm text-green-700 font-bold mb-2">
                      <span className="font-bold text-gray-600">Rating:</span>{" "}
                      {product.rating.rate}
                    </p>
                    <p className="text-sm mb-2 font-bold text-green-700">
                      <span className="font-bold text-gray-600">Reviews:</span>{" "}
                      {product.rating.count}
                    </p>
                  </>
                )}
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
