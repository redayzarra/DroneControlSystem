import { Box, Text } from "@chakra-ui/react";

const SerialNumber = () => {
  const number = 3; // Obtain SN once from Drone
  
  return (
    <Box paddingRight={2}>
      <Text fontSize="lg" fontWeight="bold" display="inline">
        Drone: {"   "}
      </Text>
      <Text fontSize="lg" display="inline">
        {number}
      </Text>
    </Box>
  );
};

export default SerialNumber;
