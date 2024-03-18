import PropTypes from "prop-types";
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
        productId: _id,
        email: user.email,
        quantity: 1,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.status === 200) {
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
    <div className="flex flex-col justify-between rounded-lg bg-white p-4 shadow-md">
      <Link to={`/productDetail/${_id}`}>
        <img
          src={image}
          alt={name}
          className="mx-auto mb-4 h-40 w-60 rounded-lg object-cover"
        />
        <h2 className="mb-2 text-lg font-semibold">{name}</h2>
        <p className="mb-2 text-gray-600">{brand}</p>
        <p className="mb-2 font-bold text-gray-800">${price}</p>
        <p className="mb-2 text-gray-600">{description}</p>
        <div className="flex items-center">
          <span className="mr-1 text-yellow-500">&#9733;</span>
          <span>{rating}</span>
        </div>
      </Link>
      <div className="mb-2 mt-5 flex flex-col items-center justify-center gap-5 border-t">
        <button
          onClick={handleAddToCart}
          className=" mt-3 gap-1 rounded-md bg-[#59B210]  px-5 py-2 font-semibold   text-white transition-all  hover:bg-[#0E53A5] "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default ProductCart;
