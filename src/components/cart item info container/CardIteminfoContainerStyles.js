import styled from "styled-components";

export const StyledCardItemInfoContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  margin-inline: auto;
`;

export const StyledTitle = styled.p`
  margin: 0;
  color: var(--color-primary-font);
  font-weight: var(--font-bold);
  font-size: var(--font-medium);
`;

export const StyledCardItems = styled.ul`
  padding: 0;
  height: 20rem;
  margin: 0;
  margin-bottom: 2rem;
`;

export const StyledTotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  background-color: var(--color-faded-background);
  border-radius: 3rem;
  width: 80%;
  margin-inline: auto;
`;

export const StyledTotalAmountLabel = styled.p`
  margin: 0;
  font-size: var(--font-medium);
  color: var(--color-primary-font);
`;
export const StyledTotalAmount = styled.p`
  margin: 0;
  font-size: var(--font-medium);
  color: var(--color-primary-font);
  font-weight: var(--font-bold);
`;
