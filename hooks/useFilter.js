import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const result = await axios.get(`http://localhost:1337/categories`);
      setCategories(result.data);
    };
    getCategories();
  }, []);

  const FilterUI = () => (
    <>
      <h3>Filter</h3>
      <form>
        <select onChange={e => setCategory(e.target.value)} value={category}>
          <option value="">All</option>
          {categories.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );

  return { FilterUI };
};
