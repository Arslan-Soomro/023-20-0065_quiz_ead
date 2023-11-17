import {
  Box,
  Text,
  HStack,
  Image,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function Welcome() {
  return (
    <Box bg="#464343" w="100%" color="white">
      <Container maxW="container.lg" px="5" py="20">
        <Grid templateColumns="1.5fr 1fr" alignItems="center" gap="50px">
          <GridItem fontSize="lg">
            <Text>
              Indulge in a symphony of flavors at our artisanal bakery. Welcome
              to a world where the aroma of freshly baked wonders captivates
              your senses. Our master bakers craft each creation with passion,
              using only the finest ingredients to ensure every bite is pure
              delight.
            </Text>
            <Text mt="5">
              From flaky croissants to decadent cakes, experience the epitome of
              taste and craftsmanship. Whether it's a special occasion or a
              craving for the extraordinary, our bakery offers a haven for your
              palate. Elevate your moments with the magic of our oven-fresh
              delights. Your journey to exceptional taste begins here.
            </Text>
          </GridItem>
          <GridItem>
            <Image src="images/welcome.png" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Welcome;
