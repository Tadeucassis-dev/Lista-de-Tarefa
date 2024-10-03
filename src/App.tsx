import { Box, Container} from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { ITask } from "./interfaces/Task";

function App() {
 const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <>
      <Container >
        <Header />
        <Box minHeight={"70vh"} textAlign={"center"} >
        <TaskForm 
        btnText="Criar Tarefa" 
        taskList={taskList} 
        setTaskList={setTaskList}/>
        <TaskList />
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default App;
