import { Breadcrumbs, Typography, useTheme } from "@mui/material";
import { BreadcrumbProps } from "./Breadcrumb.types";
import { LinkStyled } from "./BreadcrumbStyles";

const Breadcrumb = ({ items, curPageLabel }: BreadcrumbProps) => {
  const theme = useTheme();

  return (
    <>
      <Breadcrumbs>
        {items.map((item) => (
          <LinkStyled theme={theme} to={item.path}>
            {item.label}
          </LinkStyled>
        ))}
        <Typography>{curPageLabel}</Typography>
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumb;
