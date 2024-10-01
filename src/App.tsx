import { Box, Container} from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Container >
        <Header />
        <Box minHeight={"70vh"} textAlign={"center"} >
        <TaskForm btnText="Criar Tarefa"/>
        <TaskList />
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default App;
