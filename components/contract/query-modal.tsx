import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

interface QueryModalProps {
  onClose: () => void;
  isOpen: boolean;
  compSetSize: number;
}

export const QueryModal: FC<QueryModalProps> = ({
  isOpen,
  onClose: onModalClose,
  compSetSize,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };
  const onClose = () => {
    setIsSubmitted(false);
    onModalClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="60vh">
          <ModalHeader>Submit Query</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>
                Query the following terms on the set of{' '}
                {compSetSize.toLocaleString()} comparable
                {compSetSize > 1 && 's'}.
              </FormLabel>
              <Textarea isDisabled={isSubmitted} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr="3" onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={onSubmit}
              isLoading={isLoading}
              isDisabled={isSubmitted}
            >
              {isSubmitted ? 'Submitted' : 'Submit'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
