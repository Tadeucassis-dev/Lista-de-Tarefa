import { Box, FormControl, Input, Text } from "@chakra-ui/react";

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <div>
      <Box>
        <Text>O que você vai fazer?</Text>
        <FormControl>
          <div>
            <label htmlFor="title">Título</label>
            <Input
              type="text"
              name="title"
              placeholder="Título da Tarefa"
            ></Input>
          </div>
          <div>
            <label htmlFor="difficulty">Dificuldade: </label>
            <Input
              type="text"
              name="title"
              placeholder="Dificuldade da tarefa"
            ></Input>
          </div>
          <Input type="submit" value={btnText}/>
        </FormControl>
      </Box>
    </div>
  );
};

export default TaskForm;
