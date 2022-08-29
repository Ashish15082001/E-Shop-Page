import styled from "styled-components";

export const StyledAvatar = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  background-image: url(${(props) => props.imageUrl});
`;
