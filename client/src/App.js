import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./components/common/ProductCard";
import Login from "./components/Login";

const App = () => {
  return (
    <ChakraProvider>
      <ProductCard />
    </ChakraProvider>
  );
};

export default App;
