import styled from "styled-components";

export const StyledHeader = styled.header`
  border-bottom: 0.2rem solid var(--color-border-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5rem;

  @media (max-width: 810px) {
    padding-inline: 2rem;
  }
`;

export const StyledMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 810px) {
    display: block;
  }
`;

export const StyledMenuIconContainer = styled.span`
  display: grid;
  place-items center;
`;

export const StyledMenuOptions = styled.ul`
  background-color: var(--color-secondary);
  position: absolute;
  list-style: none;
  top: 8rem;
  right: 0;
  width: 25rem;
  border: 0.2rem solid var(--color-border-grey);
`;

export const StyledMenuOption = styled.li`
  padding: 2rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--color-primary);
  }

  & > span {
    margin-right: 2rem;
  }
`;

export const StyledMenuIconText = styled.p`
  font-size: var(--font-medium);
  color: var(--color-primary-font);
`;
