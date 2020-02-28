import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import useFilter from "../hooks/useFilter";
import useProperties from "../hooks/usePropertes";
import { Container } from "../styledComponents";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { Properties } = useProperties(filtered);
  const { category, FilterUI } = useFilter();

  useEffect(() => {
    if (category) {
      // filter the properties
      const filtered = properties.find(property =>
        property.categories.find(cat => cat.id == category)
      );
      setFiltered([filtered]);
    } else {
      // get data from api
      const getProperties = async () => {
        const result = await axios.get(`http://localhost:1337/properties`);

        setProperties(result.data);
        setFiltered(result.data);
      };

      getProperties();
    }
  }, [category]);

  return (
    <Container>
      <Head>
        <title>Strapi Real Estate | Next.js + Strapi</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
      </Head>

      <FilterUI />

      <h2 style={{ textAlign: "center", fontFamily: "Lato, sans-serif" }}>
        Properties
      </h2>
      <Properties />
    </Container>
  );
};

export default Home;
