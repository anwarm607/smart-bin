import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import InstructionImg from "../../assets/instruction.jpeg";

const TrashInstruction = () => {
  const navigate = useNavigate();
  const complete = () => {
    navigate("/complete");
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
    >
      <Typography
        variant="p"
        fontSize={18}
        fontWeight={700}
        mb={8}
        textAlign="center"
      >
        Put your garbage into the bin
      </Typography>
      <img width={300} src={InstructionImg} alt="Instruction" />
      <Typography
        variant="p"
        fontSize={18}
        fontWeight={700}
        mt={10}
        textAlign="center"
        mb={5.5}
      >
        Click Complete after done
      </Typography>
      <Button
        variant="outlined"
        onClick={() => complete()}
        style={{ width: "90%" }}
      >
        Complete
      </Button>
    </Grid>
  );
};

export default TrashInstruction;
