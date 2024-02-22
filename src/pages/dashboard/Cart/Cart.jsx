import { FaTrashAlt } from "react-icons/fa";
import useCart from "./../../../hooks/useCart";
const Cart = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <div className="my-10">
      <div className="flex items-center justify-evenly gap-10 ">
        <h1 className="uppercase text-2xl">Total Order: </h1>
        <h2 className="uppercase text-2xl">Total Price: $</h2>

        <button className="flex items-center  gap-2 bg-[#59B210]  px-5 py-2 text-white  hover:bg-[#0E53A5] transition-all rounded-md">
          Pay
        </button>
      </div>
      {/* table item show */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.rating}</div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
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

export default Cart;
