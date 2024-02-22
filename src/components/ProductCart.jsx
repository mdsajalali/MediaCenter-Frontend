import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useAxiosSecure from "./../hooks/useAxiosSecure";

const ProductCart = ({ product }) => {
  const { _id, image, name, brand, price, description, rating } = product;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
        brand,
        description,
        rating,
      };
      console.log(cartItem);
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link to={`/productDetail/${_id}`}>
        <img
          src={image}
          alt={name}
          className="w-60 mx-auto h-40 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{brand}</p>
        <p className="text-gray-800 font-bold mb-2">${price}</p>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">&#9733;</span>
          <span>{rating}</span>
        </div>
        <hr className="mt-2" />
      </Link>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={handleAddToCart}
          className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-md  px-5 py-2 mt-3   font-semibold text-white  gap-1 "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
