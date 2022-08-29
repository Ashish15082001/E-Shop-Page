import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 7rem 1fr;
  margin-block: 2rem;
`;

export const StyledLeftPart = styled.div`
  display: grid;
  align-items: center;
`;

export const StyledRightPart = styled.div``;

export const StyledRightUpper = styled.div`
  ${"" /* border: 1px solid red; */}
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const StyledRightLower = styled.div``;

export const StyledItemInfo = styled.div``;

export const StyledCartitemName = styled.p`
  color: var(--color-primary-font);
  font-weight: var(--font-bold);
  font-size: var(--font-medium);
  margin: 0;
`;

export const StyledCompany = styled.p`
  font-size: var(--font-medium);
  color: var(--color-primary-font);
  font-weight: var(--font-bold);
  margin: 0;
`;

export const StyledPrice = styled.p`
  font-size: var(--font-medium);
  color: var(--color-primary-font);
  font-weight: var(--font-bold);
  margin: 0;
`;

export const StyledItemId = styled.p`
  margin: 0;
  color: var(--color-faded-font);
  font-size: var(--font-small);
`;
