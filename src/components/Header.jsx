import React from 'react'
import { Image, Heading, Text } from '@chakra-ui/react'
import logo from '../assets/light-bulb.svg'

const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
        <Heading color='white' marginBottom='1rem'>
                AI Keyoword Extractor
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your text below and we'll
        </Text>
    </>
  )
}

export default Header