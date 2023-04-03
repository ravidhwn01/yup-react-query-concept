import { Flex, Heading } from "@chakra-ui/react";
import Form from "./Form";
import ChakraHook from "./ChakraHook";

function Home() {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
      {/* <Heading textAlign={"center"} bg={"green"}>
        {" "}
        YUP AND REACT QUERY TUTORIAL{" "}
      </Heading> */}

      <Form />
      {/* <ChakraHook /> */}
    </Flex>
  );
}

export default Home;
