import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Offerings from "./components/Offerings";
import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return <Box width="100vw" height="100vh" overflow="scroll">
    <Navbar />
    <Welcome />
    <Offerings />
    <About />
    <ContactUs />
    <Footer />
  </Box>;
}

export default App;
