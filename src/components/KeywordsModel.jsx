import React from 'react'
import {Text,
Button, Modal, ModalOverlay,
ModalContent, ModalHeader, ModalFooter,
ModalBody, ModalCloseButton, CircularProgress } from '@chakra-ui/react'

const KeywordsModel = ({Keyword, isOpen, loading, closeModal}) => {
  return (
    <>
        <Modal isOpen={isOpen} onClose={closeModal}>
    <ModalOverlay>
        <ModalContent>
            <ModalHeader>KeyWords</ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' alignItems='center' justifyContent='center'>
                {
                    loading ? (
                        <CircularProgress isIndeterminate color='blue.300' />
                    ): (
                        <>
                            <Text>
                                {Keyword}
                            </Text>
                        </>
                    )
                }
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={closeModal}>
                    close
                </Button>
            </ModalFooter>
        </ModalContent>
    </ModalOverlay>
        </Modal>
    </>
  )
}

export default KeywordsModel