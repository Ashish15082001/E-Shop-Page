import styled from "styled-components";

export const StyledSecondaryButton = styled.button`
  padding: 1.5rem 2rem;
  border-radius: 2.5rem;
  font-size: var(--font-medium);
  margin-inline: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: var(--color-secondary);
  color: var(--color-primary-font);
  border: 0.2rem solid var(--color-primary-font);

  &:hover {
    background-color: var(--color-secondary-dark);
    color: var(--color-black);
    border: 0.2rem solid var(--color-black);
  }
`;
