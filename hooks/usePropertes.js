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

export default properties => {
  console.log(properties);
  const Properties = () => (
    <Grid>
      {properties.map(property => (
        <div>
          <img src={`http://localhost:1337${property.image[0].url}`} />
        </div>
      ))}
    </Grid>
  );

  return {
    Properties
  };
};
