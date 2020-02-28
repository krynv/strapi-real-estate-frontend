import React, { useEffect, useState } from "react";
import Head from "next/head";
import useProperties from "../hooks/usePropertes";
import axios from "axios";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1200px;
`;

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
    <Container>
      <Properties />
    </Container>
  );
};

export default Home;
