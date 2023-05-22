import styled from "@emotion/styled";

export const ButtonsWrapper = styled.div`
display: flex;
gap: 20px;
`;

export const Button = styled.button`
background-color: white;
text-transform: uppercase;
border: 1px solid;
border-radius: 4px;
&:hover {
    cursor: pointer;
    background-color: #F0997D;
  }
`;