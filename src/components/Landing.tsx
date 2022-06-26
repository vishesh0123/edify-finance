import {
  Button,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

export default function Landing() {
  return (
    <Stack
      direction="row"
      spacing={2}
      bgcolor="#fff"
      mt={1}
      borderRadius="15px"
    >
      <Stack direction="column" spacing={3} ml={2} mt={2}>
        <Typography variant="h2" mt={2} fontFamily="fantasy">
          Decentralized Student Loan Protocol
        </Typography>
        <Typography variant="h6" mt={2} component="p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga tenetur
          nemo voluptatem maiores blanditiis pariatur debitis expedita, vel
          ipsum quibusdam nisi provident dicta, adipisci culpa voluptate
          necessitatibus dolores incidunt nobis!
        </Typography>
        <Button variant="contained">Launch Dapp</Button>
      </Stack>

      <ImageList
        cols={1}
        sx={{
          borderColor: "black",
          borderRadius: "300px",
        }}
      >
        <ImageListItem
          sx={{
            marginTop: "20px",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <img src="sl.jpg" alt="img" />
        </ImageListItem>
      </ImageList>
    </Stack>
  );
}
