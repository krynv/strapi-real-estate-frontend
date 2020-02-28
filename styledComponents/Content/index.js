import styled from "@emotion/styled";

export default styled.div`
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
