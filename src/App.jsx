// Chakra UI imports
import { Flex, Box, Text, Input, Button, Grid } from "@chakra-ui/react";
import ToggleColorMode from "./components/ToggleColorMode";
// React etc
import GithubButton from "./components/GithubButton";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    setResult(result + number);
  };

  const handleClearClick = () => {
    setResult("");
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  };

  const squareClick = (number) => {
    setResult(number ** 2);
  };

  const handleDelClick = () => {
    try {
      setResult(result.slice(0, -1));
    } catch {
      setResult("Error");
    }
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justify="center"
      h="100vh"
      p={5}
    >
      <ToggleColorMode />
      <GithubButton />
      <Box p={5} borderWidth={2} borderRadius="xl" boxShadow="lg">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Calculator
        </Text>
        <Input
          mb={4}
          value={result}
          placeholder="0"
          isReadOnly
          textAlign="right"
          fontSize="2xl"
        />
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          <Button onClick={() => handleNumberClick(7)}>7</Button>
          <Button onClick={() => handleNumberClick(8)}>8</Button>
          <Button onClick={() => handleNumberClick(9)}>9</Button>
          <Button onClick={() => setResult(result + "+")}>+</Button>
          <Button onClick={() => handleNumberClick(4)}>4</Button>
          <Button onClick={() => handleNumberClick(5)}>5</Button>
          <Button onClick={() => handleNumberClick(6)}>6</Button>
          <Button onClick={() => setResult(result + "-")}>-</Button>
          <Button onClick={() => handleNumberClick(1)}>1</Button>
          <Button onClick={() => handleNumberClick(2)}>2</Button>
          <Button onClick={() => handleNumberClick(3)}>3</Button>
          <Button onClick={() => setResult(result + "*")}>*</Button>
          <Button onClick={() => setResult(result + "(")}>(</Button>
          <Button onClick={() => handleNumberClick(0)}>0</Button>
          <Button onClick={() => setResult(result + ")")}>)</Button>
          <Button onClick={() => squareClick(result)}>x²</Button>
          <Button onClick={() => handleClearClick()}>C</Button>
          <Button onClick={() => handleDelClick()}>del</Button>
          <Button onClick={() => setResult(result + ".")}>.</Button>
          <Button onClick={() => setResult(result + "/")}>/</Button>
        </Grid>
        <Button mt={4} width="100%" onClick={() => handleEqualClick()}>
          =
        </Button>
      </Box>
    </Flex>
  );
}

export default App;
