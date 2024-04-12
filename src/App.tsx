import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Country from "./components/Country";

export default function App() {

  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <GridItem area="main">
        <Country/>
      </GridItem>
    </Grid>
  );
}
