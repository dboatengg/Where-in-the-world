import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";

export default function App() {

  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main" maxWidth="1440px" mx="auto">
        <CardGrid />
      </GridItem>
    </Grid>
  );
}
