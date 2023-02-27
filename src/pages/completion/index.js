import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SuccessImg from "../../assets/success.png";

const Completion = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };
  return (
    <Grid
      display="flex"
      flexDirection="column"
      paddingBottom={12}
      paddingTop={9.5}
      minHeight="100vh"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      paddingX={2}
    >
      <img width={253} src={SuccessImg} alt="success" />
      <Typography
        variant="p"
        fontSize={24}
        mt={9}
        fontWeight={700}
        textAlign="center"
      >
        Success!!
      </Typography>
      <Typography
        variant="p"
        fontSize={24}
        fontWeight={700}
        mb={8}
        textAlign="center"
      >
        You have earned 20 Points for 0.4 kg of garbage
      </Typography>
      <Button
        variant="outlined"
        onClick={() => backToHome()}
        style={{ width: "90%" }}
      >
        Complete
      </Button>
    </Grid>
  );
};

export default Completion;
