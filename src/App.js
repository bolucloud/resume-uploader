import { AmplifyProvider } from "@aws-amplify/ui-react";
import Amplify from "@aws-amplify/core";
import config from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { Box, ChakraProvider, Container, Stack } from "@chakra-ui/react";
import { ResumeModal } from "./components/ResumeModal";
import { PageBody } from "./components/PageBody";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(config);

function App() {
  return (
    <ChakraProvider>
      <PageBody />
      <ResumeModal />
    </ChakraProvider>
  );
}

export default withAuthenticator(App);
