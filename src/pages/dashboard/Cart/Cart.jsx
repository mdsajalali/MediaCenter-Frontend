const Cart = () => {
  return (
    <div className="my-10">
      <div className="flex items-center justify-evenly gap-10 ">
        <h1 className="uppercase text-2xl">Total Order: </h1>
        <h2 className="uppercase text-2xl">Total Price: $</h2>

        <button className="flex items-center  gap-2 bg-[#59B210]  px-5 py-2 text-white  hover:bg-[#0E53A5] transition-all rounded-md">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
