import React from "react";
import { Box } from "@chakra-ui/react";

interface MapProps {
  width: string;
  height: string;
}

const Map: React.FC<MapProps> = ({ width, height }) => {
  return (
    <Box style={{ width }} maxWidth={"100vh"}>
      <Box
        as="iframe"
        width="100%"
        height={height}
        src="https://maps.google.com/maps?width=80%25&amp;height=500&amp;hl=en&amp;q=243%20Karangahape%20Road,%20Auckland%20CBD,%20Auckland%201010+(Ted%20bar%20and%20cafe)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></Box>
    </Box>
  );
};

export default Map;
