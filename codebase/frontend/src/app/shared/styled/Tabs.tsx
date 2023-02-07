import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const TabsStyled = styled(Tabs)`
  & {
    align-self: stretch;
  }
  & .MuiTabs-scroller {
    display: flex;
  }
  & .MuiTabs-indicator {
    align-self: flex-end;
  }
`;
