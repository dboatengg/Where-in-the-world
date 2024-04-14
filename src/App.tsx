import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import { useState } from "react";

// interface SearchQuery {
//   searchText:string
// }

export default function App() {
  const [query, setQuery] = useState<string>("")
  
  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main" maxWidth="1440px" mx="auto">
        <CardGrid onSearch={(searchText)=>setQuery(searchText)} query={query}/>
      </GridItem>
    </Grid>
  );
}
