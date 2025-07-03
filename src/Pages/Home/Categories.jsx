import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [Categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div className="mb-20">
  <h1 className="text-3xl font-bold text-center my-10">Featured Categories</h1>
  <div className="grid grid-cols-3 gap-10">
    {Categories.map((Category) => (
      <div className="bg-base-100 px- pb-2 shadow-2xl rounded" key={Category._id}>
        <img className="w-full h-80 object-cover mx-auto" src={Category.category_image} alt={Category.category_name} />
        <div className="flex justify-between items-center p-5">
          <h1 className="text-lg font-bold my-3">{Category.category_name}</h1>
          <Link to={`/books/${Category.category_name}`}>
            <button className="btn btn-sm bg-cyan-400 text-white">See all</button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

export default Categories;