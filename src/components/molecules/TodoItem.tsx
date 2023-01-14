import { EditIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface Props {
  id: number
  title: string
}

export const TodoItem = ({ id, title }: Props) => {
  const router = useRouter()
  const handleClickDetailLink = (id: number) => {
    router.push(`/show/${id}`)
  }
  const handleClickUpdateIcon = (id: number) => {
    router.push(`/update/${id}`)
  }
  return (
    <Box
      borderRadius={4}
      display={'flex'}
      alignItems='center'
      justifyContent={'space-between'}
      border={'1px'}
      borderColor={'blue.400'}
      p={4}
    >
      <Text _hover={{ opacity: 0.7 }} cursor='pointer' onClick={() => handleClickDetailLink(id)}>
        {title}
      </Text>
      <EditIcon
        cursor={'pointer'}
        color={'blackAlpha.800'}
        onClick={() => handleClickUpdateIcon(id)}
      />
    </Box>
  )
}
