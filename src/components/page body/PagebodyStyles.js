import styled from "styled-components";

export const StyledPageBody = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 810px) {
    grid-template-columns: 1fr;
  }
`;
