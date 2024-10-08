import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar o modal
  const [taskToEdit, setTaskToEdit] = useState<ITask | null>(null); // Estado para armazenar a tarefa a ser editada

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const openModal = (task: ITask) => {
    setTaskToEdit(task); // Define a tarefa a ser editada
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
    setTaskToEdit(null); // Reseta a tarefa a ser editada
  };

  return (
    <Container>
      {/* Modal, só é renderizado se estiver aberto */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm btnText={"Editar Tarefa"} taskList={taskList} task={taskToEdit} />
        </Modal>
      )}

      <Header />
      <Box minHeight={"71vh"} textAlign={"center"}>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={openModal} />
      </Box>
      <Footer />
    </Container>
  );
}

export default App;