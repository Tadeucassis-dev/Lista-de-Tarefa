import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;  // Adicione uma função de fechamento como prop
}

const Modal = ({ children, onClose }: Props) => {

  // Função para fechar o modal ao clicar fora do conteúdo principal
  const closeModal = (e: React.MouseEvent): void => {
    const modalContent = document.querySelector("#modal-content");
    if (e.target === modalContent) return;  // Evita fechar se clicar no conteúdo
    onClose();  // Fecha o modal
  };

  // Fechar o modal com "Esc"
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();  // Fecha o modal quando "Esc" é pressionado
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc); // Limpa o evento
    };
  }, [onClose]);

  return (
    <div id="modal" onClick={closeModal}>
      <Box
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        backgroundColor={"rgba(0, 0, 0, 0.2)"} // Ajuste para o fundo
      >
        <Box
          id="modal-content"  // ID para identificar o conteúdo do modal
          position={"absolute"}
          top={"19%"}
          left={0}
          right={0}
          margin={"0 auto"}
          width={"500px"}
          height={"400px"}
          zIndex={1}
          backgroundColor={"#fff"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          textAlign={"center"}
          p={4}
        >
          {/* Conteúdo do modal */}
          {children}

          {/* Botão de fechar */}
          <Button mt={4} colorScheme="red" onClick={onClose}>
            Fechar
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Modal;