import React, { useState } from "react";

const NewProductPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission and add the new product using the form data (title, price, description)
    // You can make an API request or update the state with the new product data
    console.log("New product submitted:", { title, price, description });
    // Reset the form fields
    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <div>
        
      <h1>New Product</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductPage;
