import styled from "styled-components";

export const StyledNavbarNavigationsContainer = styled.div``;

export const StyledNavbarNavigations = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  @media (max-width: 810px) {
    display: none;
  }
`;

export const StyledNavbarNavigation = styled.li`
  padding: 1rem 2rem;
  margin-inline: 4rem;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  font-size: var(--font-medium);
  font-weight: var(--font-bold);
  color: var(--color-primary-font);

  &:hover {
    background-color: var(--color-primary);
  }

  @media (max-width: 1400px) {
    margin-inline: 1rem;
  }
  @media (max-width: 810px) {
    margin-inline: 0.5rem;
  }
`;
