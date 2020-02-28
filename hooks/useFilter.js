import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Select } from "../styledComponents";

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
    <Form>
      <Select onChange={e => setCategory(e.target.value)} value={category}>
        <option value="">Show All</option>
        {categories.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </Form>
  );

  return { category, FilterUI };
};
