import styled from "styled-components";

export const StyledOrderPageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 3rem 3rem;

  @media (max-width: 810px) {
    flex-direction: column;
  }
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
  margin-right: 1rem;
`;

export const StyledBackNavigationIconText = styled.p`
  font-size: var(--font-medium);
  font-weight: var(--font-bold);
  color: var(--color-primary-font);
  margin: 0;
`;

export const StyledButtonContainer = styled.div`
  @media (max-width: 810px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
  }

  & > button:first-child {
    margin-bottom: 2rem;
  }
`;
