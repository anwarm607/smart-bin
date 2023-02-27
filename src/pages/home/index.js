import { Divider, Fab, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import RewardCard from "../../components/Reward Card";
import rewards from "./rewards";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid
      display="flex"
      flexDirection="column"
      paddingBottom={12}
      paddingTop={9.5}
      minHeight="100vh"
    >
      <Typography variant="p" fontWeight={700} mb={1.5} textAlign="center">
        YOUR BALANCE
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="p" fontSize={36} fontWeight={700} mr={1}>
          250
        </Typography>
        <Typography fontSize={36} fontWeight={300}>
          points
        </Typography>
      </div>
      <Box
        mt={6}
        mb={1.75}
        position="sticky"
        top={0}
        sx={{ backgroundColor: "#fff" }}
      >
        <Box marginX={3} mb={2} pt={1}>
          <Typography variant="p" fontWeight={700}>
            Reward Point History
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Box mt={3.5} marginX={3}>
        {rewards.map((it) => (
          <Box mb={2}>
            <RewardCard {...it} />
          </Box>
        ))}
      </Box>
      <Box position="relative">
        <Box position="fixed" margin="0" bottom={10} right={9}>
          <Fab
            color="secondary"
            aria-label="edit"
            style={{
              background: "#00676f",
            }}
            onClick={() => navigate("/instruction")}
          >
            <QrCodeScannerIcon />
          </Fab>
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
