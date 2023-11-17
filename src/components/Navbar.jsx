import { HStack, Box, Text, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box w="full">
      <HStack
        justifyContent="space-between"
        alignContent="center"
        pb="0"
        px="10"
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.100"
      >
        <Box>
          <Image src="images/logo.png" w="75px" />
        </Box>
        <HStack gap="50px">
          <Link href="/">Home</Link>
          <Link href="/">Menu</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
