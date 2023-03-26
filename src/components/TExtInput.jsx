import React, { useState } from 'react'
import { Textarea, Button, useToast} from '@chakra-ui/react'

const TExtInput = ({extractKeyWords}) => {
    const [text, setText] = useState('')


    const toast = useToast();

    const handlClick = () =>{
        if(text === '') {
            toast ({
                title : 'Text field is empty',
                description : 'Please enter some textto axtract Keywords',
                status : 'error',
                duration : 5000,
                isClosable : false,
            })
        } else {
            extractKeyWords(text)
        }
    }


  return (
    <>
        <Textarea bg="blue.400"
        color='white' 
        padding={4} 
        marginTop={6} height={200} value={text}
        onChange={(ev) => setText(ev.target.value)} />
    
    
    <Button bg='blue.500' color='white'
    marginTop={4} width='100%'
     _hover={{ bg: 'blue.700' }} 
     onClick={handlClick}>
        Extract Keywords
    </Button>

    </>
  )
}

export default TExtInput