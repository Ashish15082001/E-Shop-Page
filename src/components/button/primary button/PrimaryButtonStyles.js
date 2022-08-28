import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  padding: 1.5rem 2rem;
  border-radius: 2.5rem;
  font-size: var(--font-medium);
  margin-inline: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: 0.2rem solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary-dark);
    border: 0.2rem solid var(--color-primary-dark);
  }
`;
