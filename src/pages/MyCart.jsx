import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="max-w-[1200px] mx-auto px-4 my-10">
      <div className="flex flex-wrap items-center justify-between md:gap-10 gap-2 mb-10">
        <h1 className="uppercase text-2xl font-semibold md:w-auto w-full">
          Total Order: {cart.length}
        </h1>
        <h2 className="uppercase text-2xl font-semibold md:w-auto w-full">
          Total Price: ${totalPrice}
        </h2>

        <button className="flex items-center gap-2 bg-[#59B210] px-5 py-2 text-white hover:bg-[#0E53A5] transition-all rounded-md md:w-auto w-full">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="w-1/6">Id</th>
              <th className="w-1/6">Image</th>
              <th className="w-2/6">Name</th>
              <th className="w-1/6">Price</th>
              <th className="w-1/6">Brand</th>
              <th className="w-1/6">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th className="w-1/6">{idx + 1}</th>
                <td className="w-1/6">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-2/6">
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">&#9733;</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </td>
                <td className="w-1/6">${item.price}</td>
                <td className="w-1/6">{item.brand}</td>
                <th className="w-1/6">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
