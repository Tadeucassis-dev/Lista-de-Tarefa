import { Heading, Text } from "@chakra-ui/react"

const Header = () => {
  return (
    <div>
       <Heading
       backgroundColor='#282c34'
       color="#61dafb"
       textAlign="center"
       padding="1em"
       fontFamily={'sans-serif'}
       height={'100px'}
       mb={20}
       >
      <Text fontSize={40}>Lista de Tarefas</Text>
      </Heading>
    </div>
  )
}

export default Header
