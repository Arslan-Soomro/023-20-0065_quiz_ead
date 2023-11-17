import { VStack, Box, Text, Button, Image } from "@chakra-ui/react";

function ProductCard({ name, price, img }) {
    return <Box>
        <VStack>
            <Image src={img} w="200px" />
            <Text fontWeight="bold" fontSize="xl">{name}</Text>
            <Text fontWeight="bold" fontSize="lg">Rs. {price}</Text>
            <Button bg="white" color="black">Order Now</Button>
        </VStack>
    </Box>;
};

export default ProductCard;