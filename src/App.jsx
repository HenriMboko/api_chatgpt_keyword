import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TExtInput from './components/TExtInput'
import KeywordsModel from './components/KeywordsModel'

function App() {

    const [Keyword, setKeyword] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)

const extractKeyWords = async(text) =>{

    setIsOpen(true);
    setLoading(true);

    const options = {
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${import.meta.env.VITE_OPENAI_API_KEY} `

        },
        body : JSON.stringify({
            model : 'text-davinci-003',
            prompt : 'Extract Keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n ' + text + '',
            temperature : 0.5,
            max_tokens : 60,
            frequency_penalty : 0.8 
        })
    }


    const response = await fetch(import.meta.env.VITE_OPENAI_API_KEY, options)

    const json = await response.json();

   const data = json.choices[0].text.trim();

    console.log(data);

    setKeyword(data);
    setLoading(false);

}

const closeModal = () =>{
    setIsOpen(false)
}


  return (
    <Box bg='blue.600' color="white" height='100vh' paddingTop={130}>
    <Container maxW='3xl' centerContent>
    <Header />
    <TExtInput extractKeyWords ={extractKeyWords} />
    <Footer/>
    </Container>
     <KeywordsModel Keyword={Keyword}
      loading={loading}
    isOpen={isOpen}
      closeModal={closeModal} />
    </Box>
  )
}

export default App