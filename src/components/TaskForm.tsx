import { Box, FormControl, Input, Text } from "@chakra-ui/react";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <div>
      <Box>
        <Text 
        fontWeight={'bold'} 
        fontSize={30}
        fontFamily={'sans-serif'}
        >
          O que você vai fazer?
          </Text>
        <FormControl
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"400px"}
          margin={"0 auto"}
        >
          <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
            <Text 
            fontWeight={'bold'} 
            marginBottom={'.4em'}   
            fontFamily={'sans-serif'}
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
            />

            <Text 
            fontWeight={'bold'} 
            marginBottom={'.4em'}
            fontFamily={'sans-serif'}
            >
              Dificuldade:
               </Text>
            <Input
              padding={"8px 15px"}
              marginBottom={"1.5rem"}
              borderRadius={5}
              border={"1px solid #282c34"}
              type="text"
              name="title"
              placeholder="Dificuldade da tarefa"
            />
          </Box>
          <Input 
          height={'40px'}
          backgroundColor={'#61dafb'}
          border={'1px solid #61dafb'}
          borderRadius={5}
          color={'#000'}
          transition={'.5s'}
          cursor={'pointer'}
          _hover={{
            backgroundColor: '#ffff', 
            color: '#282c34' 
          }}
        
          type="submit" value={btnText} />
        </FormControl>
      </Box>
    </div>
  );
};

export default TaskForm;
