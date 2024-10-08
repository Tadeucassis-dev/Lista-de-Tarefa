import { Box, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler}>
      <Box>
        <Text fontWeight={"bold"} fontSize={30} fontFamily={"sans-serif"}>
          O que você vai fazer?
        </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"400px"}
          margin={"0 auto"}
        >
          <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
            <Text
              fontWeight={"bold"}
              marginBottom={".4em"}
              fontFamily={"sans-serif"}
            >
              Título
            </Text>
            <Input
              padding={"8px 15px"}
              marginBottom={"1.5rem"}
              borderRadius={5}
              border={"1px solid #282c34"}
              type="text"
              name="title"
              placeholder="Título da Tarefa"
              onChange={handleChange}
              value={title}
            />

            <Text
              fontWeight={"bold"}
              marginBottom={".4em"}
              fontFamily={"sans-serif"}
            >
              Dificuldade:
            </Text>
            <Input
              padding={"8px 15px"}
              marginBottom={"1.5rem"}
              borderRadius={5}
              border={"1px solid #282c34"}
              type="text"
              name="difficulty"
              placeholder="Dificuldade da tarefa"
              onChange={handleChange}
              value={difficulty}
            />
          </Box>
          <Input
            height={"40px"}
            backgroundColor={"#61dafb"}
            border={"1px solid #61dafb"}
            borderRadius={5}
            color={"#000"}
            transition={".5s"}
            cursor={"pointer"}
            _hover={{
              backgroundColor: "#ffff",
              color: "#282c34",
            }}
            type="submit"
            value={btnText}
          />
        </Box>
      </Box>
    </form>
  );
};

export default TaskForm;
