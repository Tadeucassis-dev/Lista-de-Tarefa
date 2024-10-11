import { Box } from "@chakra-ui/react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que o evento se propague e feche o modal
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClose} // Fecha o modal ao clicar fora dele
    >
      <Box
        backgroundColor="white"
        padding={6}
        borderRadius={8}
        onClick={handleModalClick} // Impede a propagação do clique
      >
        {children}
      </Box>
    </Box>
  );
};

export default Modal;