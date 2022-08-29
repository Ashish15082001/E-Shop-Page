import styled from "styled-components";

export const StyledMethodsContainer = styled.div`
  padding-inline: 3rem;
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
  background-color: var(--color-primary);
  border-radius: 3rem;
  cursor: pointer;
  ${"" /* opacity:  props => props.selected === true ? 1 : 0.8; */}
`;
