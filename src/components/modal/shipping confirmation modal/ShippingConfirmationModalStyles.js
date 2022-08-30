import styled from "styled-components";

export const StyledShippingConfirmationModal = styled.div`
  padding: 4rem;
  background-color: var(--color-secondary);
`;

export const StyledShippingConfirmationModalTitle = styled.p`
  color: var(--color-primary-font);
  font-size: var(--font-large);
  font-weight: var(--font-bold);
`;

export const StyledShippingDetailsContainer = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

export const StyledShippingDetailsContainerItem = styled.li`
  display: flex;
  margin-block: 0.5rem;
`;

export const StyledShippingDetailsContainerItemType = styled.p`
  color: var(--color-primary-font);
  font-size: var(--font-medium);
  font-weight: var(--font-bold);
  margin-right: 1rem;
`;

export const StyledShippingDetailsContainerItemValue = styled.p`
  color: var(--color-primary-font);
  font-size: var(--font-medium);
`;

export const StyledButtonContainer = styled.div`
  margin-top: 3rem;
`;
