import { Button, Input, Stack, Typography } from "@mui/material";
import React from "react";

export default function Dapp() {
  return (
    <Stack direction="column">
      <Stack direction="column" ml={2} mt={2}>
        <Typography>
          Your Address :
          <br />
          Registered University :
          <br />
          Approval Status:
          <br />
          University Token Issued :
          <br />
          Your USDT Balance :
          <br />
          Your VESIT Token Balance :
          <br />
          Monthly Intrest Charging on loan :
          <br />
          Your Stacked USDT :
          <br />
          Loan Position :
          <br />
          Total Reserve USDT Staked :
          <br />
          Total Borrowed USDT Amount :
          <br />
        </Typography>
      </Stack>
      <Stack direction="row" mt={3} ml={2}>
        <Input />
        <Button variant="contained">STAKE USDT AND EARN</Button>
        <Button variant="contained">Withdraw USDT</Button>
      </Stack>
    </Stack>
  );
}
