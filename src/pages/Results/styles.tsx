import styled from "styled-components";
import { theme } from "../../shared/theme";

// export const ResultsContainer = styled.div`
//   max-width: 100vw;
//   margin: 0.5rem;
//   margin-left: 25%;
//   margin-right: 25%;
//   grid-gap: 0.2rem;

//   grid-auto-flow: row;
//   column-count: 4;
//   @media (max-width: 1200px) {
//     column-count: 4;
//     margin-left: 12%;
//     margin-right: 12%;
//   }
//   @media (max-width: 1000px) {
//     column-count: 3;
//     margin-left: 12%;
//     margin-right: 12%;
//   }
//   @media (max-width: 800px) {
//     column-count: 2;
//     margin-left: 15%;
//     margin-right: 15%;
//   }
//   @media (max-width: 400px) {
//     column-count: 2;
//     /* -webkit-column-count: 2; */
//     margin-left: 2%;
//     margin-right: 2%;
//   }
// `;

export const ResultsContainer = styled.div`
  margin-top: 0.5rem;
  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1300px) {
    margin-left: 8%;
    margin-right: 8%;
  }

  @media (max-width: 1024px) {
    margin-left: 4%;
    margin-right: 4%;
  }

  @media (max-width: 480px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

export const Image = styled.img`
  height: 180px;
  width: 180px;
  cursor: pointer;
  display: block;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 10px 40px #494949;

  @media (max-width: 400px) {
    height: 150px;
    width: 150px;
  }
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

export const StickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const Column = styled.div`
  padding: 0.2em 0.2em;
`;
