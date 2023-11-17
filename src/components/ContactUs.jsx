import { Input, Textarea, VStack, HStack, Heading, Button } from "@chakra-ui/react";
import Layout from "./Layout";

export const ContactUs = () => {
  return (
    <Layout bg="white" color="black">

      <VStack justifyContent="flex-start" alignItems="flex-start" gap="30px">
        <Heading>Contact Us</Heading>
        <HStack w="100%" gap={{base: "10px", md: "50px"}}>
          <Input placeholder="Full Name"  />
          <Input placeholder="Phone" />
        </HStack>
        <HStack w="100%" gap={{base: "10px", md: "50px"}}>
          <Input placeholder="Address" />
          <Input placeholder="Email" />
        </HStack>
        <HStack w="100%">
          <Textarea placeholder="Message" resize="none" minH="200px" />
        </HStack>
        <Button alignSelf="flex-end">Submit</Button>
      </VStack> 
    </Layout>
  );
};
