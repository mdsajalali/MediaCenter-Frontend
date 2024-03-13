import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart
    .reduce((total, item) => total + Number(item.productId?.price || 0), 0)
    .toFixed(2);
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
          if (res.status === 200) {
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
    <div className="mx-auto my-10 max-w-[1200px] px-4">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-2 md:gap-10">
        <h1 className="w-full text-2xl font-semibold uppercase md:w-auto">
          Total Order: {cart.length}
        </h1>
        <h2 className="w-full text-2xl font-semibold uppercase md:w-auto">
          Total Price: ${totalPrice}
        </h2>
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
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.productId?.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-2/6">
                  <div>
                    <div className="font-bold">{item.productId?.name}</div>
                    <div className="flex items-center">
                      <span className="mr-1 text-yellow-500">&#9733;</span>
                      <span>{item.productId?.rating}</span>
                    </div>
                  </div>
                </td>
                <td className="w-1/6">${item.productId?.price}</td>
                <td className="w-1/6">{item.productId?.brand}</td>
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
