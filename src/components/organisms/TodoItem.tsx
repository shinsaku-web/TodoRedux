import { Box } from '@chakra-ui/react'

interface Props {
  text: string
}

export const TodoItem = ({ text }: Props) => {
  return (
    <Box borderRadius={4} border={'1px'} borderColor={'blue.400'} p={4}>
      {text}
    </Box>
  )
}
