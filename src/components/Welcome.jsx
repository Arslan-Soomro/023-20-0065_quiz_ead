import {
  Box,
  Text,
  HStack,
  Image,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Layout from "./Layout";

function Welcome() {
  return (
    <Layout>
      <Grid templateColumns={{base: "1fr", md: "1.5fr 1fr"}} alignItems="center" gap="50px">
        <GridItem fontSize="lg">
          <Text>
            Indulge in a symphony of flavors at our artisanal bakery. Welcome to
            a world where the aroma of freshly baked wonders captivates your
            senses. Our master bakers craft each creation with passion, using
            only the finest ingredients to ensure every bite is pure delight.
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
    </Layout>
  );
}

export default Welcome;
