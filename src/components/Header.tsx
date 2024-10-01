import { Heading } from "@chakra-ui/react"

const Header = () => {
  return (
    <div>
       <Heading
       backgroundColor='#282c34'
       color="#61dafb"
       textAlign="center"
       padding="1em"
       fontFamily={'sans-serif'}
       >
      <h1>Lista de Tarefas</h1>
      </Heading>
    </div>
  )
}

export default Header
