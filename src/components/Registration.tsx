import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Registration() {
  return (
    <div>
      <Typography variant="h5" ml={2} mt={2} fontFamily="serif">
        Your address is not registered with Edify Finance
      </Typography>
      <Stack direction="row" spacing={20} mt={3} ml={2} justifyContent="center">
        <Stack direction="column" spacing={2}>
          <Button variant="contained">Register As University</Button>
          <FormControl>
            <InputLabel htmlFor="name">University/College Name</InputLabel>
            <Input id="name " margin="dense" required={true} disabled={true} />
            <FormHelperText id="name">
              You can use short name of your university/college
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="name">Symbol for issuing token</InputLabel>
            <Input id="name " margin="dense" required={true} disabled={true} />
            <FormHelperText id="name">Short name for your token</FormHelperText>
          </FormControl>
        </Stack>
        <Stack direction="column">
          <Button variant="contained">Register As Student</Button>
          <FormControl>
            <InputLabel htmlFor="name">
              University/College contract address
            </InputLabel>
            <Input id="name " margin="dense" required={true} disabled={true} />
            <FormHelperText id="name">
              Enter contract address provided by your university/college
            </FormHelperText>
          </FormControl>
        </Stack>
      </Stack>
    </div>
  );
}
