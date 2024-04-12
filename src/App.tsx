import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
}
