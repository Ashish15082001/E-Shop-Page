import styled from "styled-components";

export const StyledCartInfoContainer = styled.div`
  display: grid;
  grid-template-rows: 15rem 1fr 15rem;
  padding: 0 6rem;

  @media (max-width: 810px) {
    padding: 0 2rem;
  }
`;

export const StyledCartInfoContainerTop = styled.div`
  ${"" /* background-color: orange; */}
`;

export const StyledCartInfoContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDeliveryIconContainer = styled.span`
  ${"" /* border: 1px solid red; */}
  display: grid;
  place-items: center;
  margin-right: 2rem;
`;
export const StyledDeliveryIconTextContainer = styled.div`
  ${"" /* border: 1px solid red; */}
`;

export const StyledDeliveryIconText = styled.p`
  ${"" /* border: 1px solid red; */}
  color: var(--color-primary-font);
  font-size: var(--font-medium);
  margin: 0;
`;
