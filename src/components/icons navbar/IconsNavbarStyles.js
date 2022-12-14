import styled from "styled-components";

export const StyledIconNavbarNavigationsContainer = styled.div``;

export const StyledIconNavbarNavigations = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  @media (max-width: 810px) {
    display: none;
  }
`;

export const StyledIconNavbarNavigation = styled.li`
  margin-inline: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  display: grid;
  place-items: center;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

  @media (max-width: 810px) {
    margin-inline: 0.5rem;
  }
`;
