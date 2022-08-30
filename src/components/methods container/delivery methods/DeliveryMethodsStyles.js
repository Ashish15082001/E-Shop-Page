import styled from "styled-components";

export const StyledMethodsOptionsContainer = styled.div`
  max-width: 50rem;
  margin-inline: auto;
  margin-top: 4rem;
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
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  opacity: ${(props) => (props["data-choosen"] ? 1 : 0.4)};

  &:hover {
    opacity: 1;
  }
`;

export const StyledIconContainer = styled.span`
  display: grid;
  place-items: center;
  width: 50%;
  height: 100%;

  & > svg {
    transform: scale(2);
  }
`;

export const StyledIconText = styled.p`
  color: var(--color-primary-font);
  font-size: var(--font-medium);
`;
