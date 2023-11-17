import { Container, Box } from "@chakra-ui/react";

function Layout({ children, bg, color }) {
  return (
    <Box bg={bg ? bg : "#464343"} w="100%" color={color ? color : "white"}>
      <Container maxW="container.lg" px="5" py="20">{children }</Container>
    </Box>  
  );
}

export default Layout;
