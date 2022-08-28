import styled from "styled-components";

export const NavbarNavigationsContainer = styled.div``;

export const NavbarNavigations = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  ${'' /* border: 1px solid red; */}
`;

export const NavbarNavigation = styled.li`
  font-size: var(--font-medium);
  padding: 1rem 2rem;
  margin-inline: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  color: var(--color-primary-font);

  &:hover {
    background-color: var(--color-primary);
  }
`;
