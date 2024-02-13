const AddProduct = () => {
  return (
    <div className="my-10">
      <form className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="text"
              name="url"
              placeholder="Image URL"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="text"
              name="brand"
              placeholder="Brand Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <select
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              name="category"
            >
              <option value="">Select Category</option>
              <option value="electronics">Camera</option>
              <option value="clothing">Laptop</option>
              <option value="home">Phone</option>
              {/* Add more categories as needed */}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="number"
              name="rating"
              placeholder="Rating"
            />
          </div>
        </div>
        <div className="w-full px-3 mb-4">
          <textarea
            className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
            name="description"
            placeholder="Description"
            rows="5"
          ></textarea>
        </div>
        <div className="w-full px-3 mb-4">
          <input
            type="submit"
            value="Submit"
            className="w-full bg-[#59B210] rounded-sm text-white  font-semibold py-3 hover:bg-[#0E53A5]  transition-all hover:scale-95 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
