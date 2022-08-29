import styled from "styled-components";

export const StyledMethodsContainer = styled.div`
  padding: 0 6rem;
`;

export const StyledMethodsOptionsContainer = styled.div`
  &:first-child {
    margin-top: 15rem;
  }
  &:last-child {
    margin-top: 4rem;
  }
`;

export const StyledMethodsOptionsContainerTitle = styled.p`
  color: var(--color-primary-font);
  font-size: var(--font-medium);
  font-weight: var(--font-bold);
`;

export const StyledMethodOptions = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const StyledDeliveryMethodOptions = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const StyledMethodsOption = styled.li`
  height: 5rem;
  border: 0.2rem solid var(--color-faded-font);
  border-radius: 3rem;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const StyledIconContainer = styled.span`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  & > svg {
    transform: scale(2);
  }
`;
