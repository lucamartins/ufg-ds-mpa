import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Tab } from "@mui/material";
import LogoIv from "/VERBENA-UFG.png";
import { TabsStyled } from "@/app/shared/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStore, useAuthStore } from "@/app/shared/stores";

const tabNameMapper = [
  {
    route: "/",
    name: "Processos Seletivos",
  },
  { route: "/create", name: "Criar novo PS" },
];

const pages = ["Processos Seletivos", "Criar novo PS"];

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [tabsLocationMapper, setTabsLocationMapper] = useState<number>();
  const logout = useAuthStore((state) => state.logout);
  const openSnackbar = useAppStore((state) => state.openSnackbar);

  useEffect(() => {
    const index = tabNameMapper.findIndex(
      (tab) => tab.route === location.pathname
    );
    const indexFallback = index === -1 ? 0 : index;
    setTabsLocationMapper(indexFallback);
  }, [location]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(tabNameMapper[newValue].route);
  };

  const handleLogout = () => {
    logout();
    openSnackbar("Usuário deslogado");
  };

  const settings = [
    {
      title: "Minha Conta",
      action: () => {
        navigate("/account");
        handleCloseUserMenu();
      },
    },
    { title: "Sair", action: handleLogout },
  ];

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={LogoIv} alt="Logo Instituto Verbena" height={25} />
          </Box>

          <TabsStyled value={tabsLocationMapper} onChange={handleTabChange}>
            {tabNameMapper.map((tab) => (
              <Tab key={tab.route} label={tab.name} />
            ))}
          </TabsStyled>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 3 }}>
            <img src={LogoIv} alt="Logo Instituto Verbena" height={25} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: "214px",
            }}
          >
            <Typography variant="overline">
              Módulo de Processamento Ágil
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir Configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={setting.action}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
