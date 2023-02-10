import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
