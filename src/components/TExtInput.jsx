import React, { useState } from 'react'
import { Textarea, Button, useToast} from '@chakra-ui/react'

const TExtInput = () => {
    const [text, setText] = useState('')


    const handlClick = () =>{
        console.log(text)
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