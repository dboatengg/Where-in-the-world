import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <Grid templateAreas={{base:`"nav" "main"`, lg:`"nav nav" "sidebar main"`}} templateColumns={{base:"1fr" ,lg:"200px 1fr"}}>
      <GridItem area="nav"><Navbar/></GridItem>
      <GridItem area="sidebar" bg="coral" height="50rem"></GridItem>
      <GridItem area="main" bg="red" height="50rem"></GridItem>
    </Grid>
  );
}
