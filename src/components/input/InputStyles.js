import styled from "styled-components";

export const StyledInputContainer = styled.div`
  border-radius: 2.5rem;
  border: 0.2rem solid var(--color-faded-font);
  overflow: hidden;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.5rem 4rem;
  color: var(--color-primary-font);
  font-size: var(--font-medium);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--color-faded-font);
  }
`;
