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
    max-width: 100%l;
  }
`;

export default properties => {
  console.log(properties);
  const Properties = () => (
    <Grid>
      {properties.map(property => (
        <Card>
          <img src={`http://localhost:1337${property.image[0].url}`} />
        </Card>
      ))}
    </Grid>
  );

  return {
    Properties
  };
};
