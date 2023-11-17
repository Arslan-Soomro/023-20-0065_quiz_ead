import { Heading, Grid, GridItem } from "@chakra-ui/react";
import Layout from "./Layout";
import ProductCard from "./ProductCard";

const productsList = [1, 2, 3, 4, 5, 6];

const Offerings = () => {
  return (
    <Layout>
      <Heading as="h1" size="xl" mb="10">
        Our Offerings
      </Heading>
      <Grid templateColumns={"1fr 1fr 1fr"} templateRows="1fr 1fr" gap="50px">
        {productsList.map((product, idx) => {
          return (
            <GridItem>
              <ProductCard
                key={idx}
                name="Barfi"
                price={900}
                img={`images/product_${idx + 1}.png`}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default Offerings;
