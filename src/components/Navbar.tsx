import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "lightblue",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".05rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Edify Finance
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Flasloans</Button>
            <Button color="inherit">Docs</Button>
            <Button color="inherit">About Us</Button>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="flex-end" ml={70}>
            <Button color="success" variant="outlined" disableElevation>
              Connect Metamask
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
