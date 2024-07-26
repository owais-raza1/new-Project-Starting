import React, { useState } from "react";
import { addProduct } from "../../config/firebase";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");
  const [image, setImage] = useState<File | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || price === "" || !image) {
      Swal.fire("Validation Error", "All fields are required.", "warning");
      return;
    }

    try {
      if (image instanceof File) {
        await addProduct({ title, description, price, image });
        Swal.fire({
          icon: 'success',
          title: 'Products Loaded',
          text: 'Data has been successfully fetched and combined.',
        });
      } else {
        throw new Error("Invalid image file.");
      }
      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);
    } catch (error: any) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: 'error',
        title: `Error:${error.message}`,
        text: 'There was a problem fetching the products. Please try again.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Price
          </label>
          <input
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            id="price"
            name="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-gray-700 font-semibold mb-2"
          >
            Image
          </label>
          <input
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
            type="file"
            id="image"
            name="image"
            className="w-full"
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
