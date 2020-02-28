import React from "react";
import { Grid, Card, Content } from "../styledComponents";

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
