import { Button, Container, Flex, HStack } from "@chakra-ui/react"
import { Link, Links } from "react-router-dom"

const Navbar = () => {
  return <Container maxW={"1140x"} px={4}>
    <Flex 
    h={16}
    alignItems={"center"}
    justifyContent={"space-between"}
    flexDir={{
        base: "column",
        sm:"row"
    }}
    >
    <Text
    textTransform={"uppercase"}
    textAlign={"center"}
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    bgClip={'text'}
    fontSize={{base: "22", sm: "28"}}
    fontWeight={"bold"}
    >
        <Links to={"/"}> Product Store  </Links>
    </Text>

    <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
        {/* <Button> 
            <PlusSquareIcon fontSize={20} />
        </Button> */}
        </Link>

    </HStack>

    </Flex>

  </Container>
}

export default Navbar