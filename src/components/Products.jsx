import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  useEffect(() => {
    if (loading || error) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading, error]);

  if (error) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <p className="text-red-500 text-lg">
          Error: Failed to fetch
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <p className="text-white text-lg">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-white text-3xl text-center mb-10">
          Products
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => (
            <div
              key={product.id}
              className="border border-white p-5 text-white text-center"
            >
              <img
                src={product.images?.[0] || product?.category?.image}
                alt={product.title}
                className="w-full h-64 object-cover mb-4"
              />

              <h3 className="font-semibold">
                {product.title}
              </h3>
              
              {/* <p className="text-gray-400 text-sm">
                Category: {product.category?.name}
              </p>

              <p className="text-green-400 font-bold mt-2">
                ₹ {product.price}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
