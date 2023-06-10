import { Button } from "@chakra-ui/react";
import { MdFlightTakeoff } from "react-icons/md";

const TakeOff = () => {
  return (
    <Button
      leftIcon={<MdFlightTakeoff />}
      colorScheme="gray"
      variant="outline"
      marginTop={5}
      size="lg"
    >
      Takeoff
    </Button>
  );
};

export default TakeOff;
