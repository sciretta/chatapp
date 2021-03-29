import { Input } from "@chakra-ui/input"
import { Container, Flex, Text, VStack } from "@chakra-ui/layout"
import { Skeleton } from "@chakra-ui/skeleton"


const LobyView = () => {
  return(
    <>
      <Container backgroundColor="#F8E6CB" maxW="100vw">
        <Flex maxW="container.xl" height="100vh" justifyContent="center" alignItems="center" color="white">
          <VStack
            spacing={1}
            align="stretch"
          >
            <Flex flexDirection="row" justifyContent="space-around" alignItems="center">
              <Text color="#332851" textAlign="center" fontSize="3xl">
                users connected
              </Text>
              <Skeleton height="10px" width="10px" startColor="green.500" endColor="green.900" borderRadius="50%"/>
            </Flex>
            <Text color="#332851" fontWeight="bold" textAlign="center" fontSize="9xl">
              1234
            </Text>
            <Input color="#332851" borderColor="#332851" focusBorderColor="#332851" textAlign="center" placeholder="Create your username" />
          </VStack>
        </Flex>
      </Container>
    </>
  )
}

export default LobyView