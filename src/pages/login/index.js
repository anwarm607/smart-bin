import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Grid
        alignContent="space-between"
        minHeight="100vh"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingBottom={12}
      >
        <div>
          <Typography variant="h3" textAlign="center" pt={10.5}>
            SmartBin
          </Typography>
          <Typography variant="h5" textAlign="center" mt={5.5} fontWeight="700">
            Think Globally, Act Locally
          </Typography>
        </div>

        <div>
          <Button variant="outlined" onClick={() => signIn()}>
            Sign in with Google
          </Button>
        </div>
      </Grid>
    </Container>
  );
};

export default Login;
