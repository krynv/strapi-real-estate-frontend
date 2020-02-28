import React, { useEffect, useState } from "react";
import Head from "next/head";
import useProperties from "../hooks/usePropertes";
import axios from "axios";
import styled from "@emotion/styled";
import useFilter from "../hooks/useFilter";

const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1200px;
`;

const Home = () => {
  const [properties, setProperties] = useState([]);
  const { Properties } = useProperties(properties);
  const { FilterUI } = useFilter();

  useEffect(() => {
    const getProperties = async () => {
      const result = await axios.get(`http://localhost:1337/properties`);

      setProperties(result.data);
    };

    getProperties();
  }, []);

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
          crossorigin="anonymous"
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
