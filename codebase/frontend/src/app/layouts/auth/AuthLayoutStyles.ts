import { Col } from "@/app/shared/styled";
import styled from "@emotion/styled";

export const LeftCol = styled(Col)`
  width: 45vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const RightCol = styled(Col)`
  width: 55vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.img`
  display: block;
  max-width: 200px;
  max-height: 95px;
  width: auto;
  height: auto;
  position: absolute;
  bottom: 0;
  margin: 80px;
`;
