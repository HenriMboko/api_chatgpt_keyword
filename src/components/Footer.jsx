import React from 'react'
import { Image, Box, Text, Flex} from '@chakra-ui/react'
import logo from "../assets/openai.png"


const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent="centr" alignItems='center'>
            <Image src={logo} marginRight={1} />
            <Text>
                Powered By open IA
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer