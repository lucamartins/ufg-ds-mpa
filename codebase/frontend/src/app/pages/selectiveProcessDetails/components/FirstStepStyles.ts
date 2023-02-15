import styled from "@emotion/styled";
import { Box, Theme } from "@mui/material";

export const FileDropContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: "4px",
  padding: "30px 0",
  cursor: "pointer",
}));
