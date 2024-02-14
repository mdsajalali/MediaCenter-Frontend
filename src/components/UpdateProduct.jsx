import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedInfo = {
      image,
      name,
      brand,
      category,
      price,
      rating,
      description,
    };
    console.log(updatedInfo);

    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product Updated");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="my-10">
      <form className="max-w-[1200px] mx-auto px-4" onSubmit={handleUpdate}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="text"
              name="photo"
              placeholder="Photo"
              defaultValue={product?.image}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={product?.name}
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
              defaultValue={product?.brand}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <select
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              name="category"
              defaultValue={product?.category}
            >
              <option value="">Select Category</option>
              <option value="camera">Camera</option>
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="headphone">Headphone</option>
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
              defaultValue={product?.price}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
              type="number"
              name="rating"
              placeholder="Rating"
              defaultValue={product?.rating}
            />
          </div>
        </div>
        <div className="w-full px-3 mb-4">
          <textarea
            className="w-full bg-gray-100 rounded-sm py-2 px-3 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#59B210] focus:border-transparent"
            name="description"
            placeholder="Description"
            defaultValue={product?.description}
            rows="5"
          ></textarea>
        </div>
        <div className="w-full px-3 mb-4">
          <input
            type="submit"
            value="Update"
            className="w-full bg-[#59B210] rounded-sm text-white  font-semibold py-3 hover:bg-[#0E53A5]  transition-all hover:scale-95 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
