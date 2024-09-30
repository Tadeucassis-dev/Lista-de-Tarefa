import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Box
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#282c34"
        color="#fff"
      >
        <Text fontSize="30px">Lista deTarefas</Text>
        <Text fontWeight={"bold"} color={"#61dafb"} fontSize="30px">
          @2024
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
