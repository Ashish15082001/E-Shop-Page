import styled from "styled-components";

export const StyledNavbarNavigationsContainer = styled.div``;

export const StyledNavbarNavigations = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const StyledNavbarNavigation = styled.li`
  font-size: var(--font-medium);
  padding: 1rem 2rem;
  margin-inline: 4rem;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  color: var(--color-primary-font);

  &:hover {
    background-color: var(--color-primary);
  }
`;
