import { Box, Text } from "@chakra-ui/react";

interface Props {}

const TaskList = (props: Props) => {
  return (
    <div>
      <Box>
        <Text 
        fontWeight={'bold'} 
        fontSize={20}
        fontFamily={'sans-serif'}
        >
          Suas Tarefas:
          </Text>
        <Text
          fontFamily={'sans-serif'}
        >
          Lista de tarefas
          </Text>
      </Box>
    </div>
  );
};

export default TaskList;
