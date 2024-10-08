import { Box, Flex, Text } from "@chakra-ui/react";
import { ITask } from "../interfaces/Task";
import { RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit  }: Props) => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" mt={5}>
      <Text fontWeight="bold" fontSize={20} fontFamily="sans-serif" mb={5}>
        Suas Tarefas:
      </Text>

      {taskList.length > 0 ? (
        taskList.map((task) => (
          <Flex
            key={task.id}
            justifyContent="space-between"
            alignItems="center"
            textAlign={'left'}
            mb={4}
            p={4}
            border="1px solid #ccc"
            borderRadius="8px"
            maxWidth={400}
            width="100%"
            
          >
            <Box>
              <Text fontWeight="bold" fontSize="18px" mb={4}>
                {task.title}
              </Text>
              <Text>Dificuldade: {task.difficulty}</Text>
            </Box>
            <Box >
              <Box mb={4} >
              <RiPencilFill  size={20} onClick={() => handleEdit(task)}/>
              </Box>
              <RiDeleteBin2Fill size={20} onClick={() => {
                handleDelete(task.id);
                }}
                /> 
            </Box>
          </Flex>
        ))
      ) : (
        <Text>Não há tarefas cadastradas!</Text>
      )}
    </Flex>
  );
};

export default TaskList;
