import styled from "@emotion/styled";

export default styled.div`
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
