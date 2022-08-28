import styled from "styled-components";

export const StyledOrderPageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 3rem 3rem;
`;

export const StyledBackNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
  }
`;

export const StyledBackNavigationIconContainer = styled.span`
  display: grid;
  place-items: center;
`;

export const StyledBackNavigationIconText = styled.p`
  font-size: var(--font-medium);
  color: var(--color-primary-font);
  margin: 0;
`;

export const StyledButtonContainer = styled.div``;

