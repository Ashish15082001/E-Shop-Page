import styled from "styled-components";

export const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--color-backdrop);
  display: grid;
  place-content: center;
`;
