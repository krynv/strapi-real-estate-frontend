import React, { useEffect, useState } from "react";
import Head from "next/head";
import useProperties from "../hooks/usePropertes";
import axios from "axios";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const { Properties } = useProperties(properties);

  useEffect(() => {
    const getProperties = async () => {
      const result = await axios.get(`http://localhost:1337/properties`);

      setProperties(result.data);
    };

    getProperties();
  }, []);

  return (
    <>
      <Properties />
    </>
  );
};

export default Home;
