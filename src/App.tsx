import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import Details from "./components/Details";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";


export default function App() {
  const [query, setQuery] = useState<string>("")
  
  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="main" maxWidth="1440px" mx="auto">
        <Routes>
          <Route path="/" element={<CardGrid onSearch={(searchText)=>setQuery(searchText)} query={query}/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </GridItem>


    </Grid>
  );
}
