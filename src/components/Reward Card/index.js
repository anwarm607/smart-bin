import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Coin } from "../../assets/coin.svg";
import RupeeCoin from "../../assets/rupee.png";

const RewardCard = (props) => {
  let { transactionType, points, time } = props;

  return (
    <Card elevation={2}>
      <Box paddingY={2.5} paddingX={4}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={2}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            {transactionType === "earn" ? (
              <Coin width={54} height={54} />
            ) : (
              <img src={RupeeCoin} alt="rupee" width={54} height={54} />
            )}
          </Grid>
          <Grid item xs={10}>
            {transactionType === "earn" ? (
              <Typography
                variant="p"
                component="p"
                fontSize={14}
                fontWeight={700}
              >
                Earned {points} Points
              </Typography>
            ) : (
              <Typography
                variant="p"
                component="p"
                fontSize={14}
                fontWeight={700}
              >
                Claimed {points} Points
              </Typography>
            )}
            <Typography
              variant="p"
              component="p"
              fontSize={12}
              color="#BDC3C7"
              mt={1}
            >
              {time} days ago
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default RewardCard;
