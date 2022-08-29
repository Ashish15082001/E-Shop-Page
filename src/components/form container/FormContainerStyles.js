import styled from "styled-components";

export const StyledFormContainer = styled.div`
  padding: 0 6rem;
  max-width: 80rem;

  @media (max-width: 1400px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media (max-width: 810px) {
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 0 2rem;
  }
`;

export const StyledButtonContainer = styled.div`
  margin-top: 5rem;

  & > button:first-child {
    margin-left: 0;
  }
`;

export const StyledFormContainerTitle = styled.p`
  font-size: var(--font-large);
  font-weight: var(--font-bold);
  color: var(--color-primary-font);
  margin-top: 6rem;
`;

export const StyledShippingInfoContainer = styled.div`
  margin-top: 4rem;
`;

export const StyledShippingInfoContainerTitle = styled.p`
  font-size: var(--font-medium);
  font-weight: var(--font-bold);
  color: var(--color-primary-font);
`;

export const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
