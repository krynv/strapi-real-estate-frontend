import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid #e1e1e1;
`;

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  border: none;
  text-align: center;
  font-family: "Lato", sans-serif;
  appearance: none;
  background-color: white;
`;

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
