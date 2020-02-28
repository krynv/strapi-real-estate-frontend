import React, { useState } from "react";
import styled from "@emotion/styled";

const Grid = styled.div`
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: 1px solid #b5b5b5;
  background-color: #f5f5f5;

  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  padding: 1rem;
  h3 {
    margin: 0 0 2rem 0;
    font-size: 1.4rem;
    font-family: "Lato", sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  ul li {
    display: flex;
  }

  ul li p {
    font-family: "Lato", sans-serif;
    font-weight: 900;
  }

  ul li img {
    height: 25px;
    width: 25px;
    margin-right: 1rem;
  }
`;

export default properties => {
  const Properties = () => (
    <Grid>
      {properties.map(property => (
        <Card key={property.id}>
          <img src={`http://localhost:1337${property.image[0].url}`} />
          <Content>
            <h3>{property.name}</h3>
            <ul>
              <li>
                <img src="assets/img/bed.svg" />
                <p>{property.bedrooms}</p>
              </li>
              <li>
                <img src="assets/img/toilet.svg" />
                <p>{property.bathrooms}</p>
              </li>
              <li>
                <img src="assets/img/car.svg" />
                <p>{property.parking}</p>
              </li>
            </ul>
          </Content>
        </Card>
      ))}
    </Grid>
  );

  return {
    Properties
  };
};
