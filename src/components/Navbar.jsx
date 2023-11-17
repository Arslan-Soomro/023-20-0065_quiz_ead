import { HStack, Box, Text, Image } from "@chakra-ui/react";

const Navbar = () => {
  return <Box w="full">
    <HStack justifyContent="space-between" alignContent="center" pb="0" px="10" bg="white" borderBottom="1px solid" borderColor="gray.100">
        <Box>
            <Image src="images/logo.png" w="75px" />
        </Box>
        <HStack gap="50px">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </HStack>
    </HStack>
  </Box>;
};

export default Navbar;
