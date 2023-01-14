import { Box, Container } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
 children:ReactNode   
}

export const Layout = ({ children }:Props) => {
  return (
    <Container py={20}>
      <Box padding='4' bg='white' border={"2px"} borderColor={"blue.400"} color='black' maxW='lg' mx={"auto"} borderRadius={4}>{children}</Box>
    </Container>
  )
}