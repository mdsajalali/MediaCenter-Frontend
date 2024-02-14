import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../components/Container";
import useAuth from "../hooks/useAuth";

// categories list
const categories = ["all products", "camera", "phone", "laptop", "headphone"];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const { loading } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:5000/products";
      if (category !== "all products") {
        url += `?category=${category}`;
      }
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-20">
        <span className="loading loading-spinner  loading-lg  text-[#59B210]"></span>
      </div>
    );
  }

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire({
                title: "Product Deleted!",
                text: "Product has been deleted.",
                icon: "success",
              });
              const filteredProduct = products.filter(
                (product) => product._id !== id
              );
              setProducts(filteredProduct);
              console.log(data);
            }
          });
      }
    });
  };

  return (
    <>
      <h1 className="text-3xl font-semibold pb-1 border-[#59B210] border-b-[3px]   w-[120px] mx-auto">
        Products
      </h1>

      <Container>
        <div className="flex justify-end items-center mt-5">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Choose one</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={product?.image}
                alt={product?.name}
                className="w-60 mx-auto h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold mb-2">{product?.name}</h2>
              <p className="text-gray-600 mb-2">{product?.brand}</p>
              <p className="text-gray-800 font-bold mb-2">${product?.price}</p>
              <p className="text-gray-600 mb-2">{product?.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span>{product?.rating}</span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Link to={`/productDetail/${product._id}`}>
                  <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white ">
                    Quick View
                  </button>
                </Link>
                <Link to={`/updateProduct/${product._id}`}>
                  <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white flex items-center gap-1">
                    Update <FiEdit />
                  </button>
                </Link>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white flex items-center gap-1 "
                >
                  Delete <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
