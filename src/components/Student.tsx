import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Student() {
  return (
    <Stack maxWidth="xl" direction="column" mt={1}>
      <Stack bgcolor="#fff" mt={2}>
        <Typography variant="h5" color="black" ml={2}>
          Your Address Is :
          <br />
          Registered University Name :
          <br />
          Approval Status :
        </Typography>
      </Stack>
      <Stack mt={2}></Stack>
    </Stack>
  );
}
