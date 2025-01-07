import { Box, Container, Flex, Text, HStack, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiPlusSquare} from 'react-icons/fi'

const NavBar = () => {

    // const {colorMode, toggleColorMode} = useColorMode();


    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bg="white"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
            zIndex={1000}
        >
            <Container maxW="6xl">
                <Flex py={4} justifyContent="space-between" alignItems="center">
                    <Link to="/">
                        <HStack
                            spacing={4}
                            _hover={{ transform: 'translateX(2px)' }}
                            transition="all 0.2s"
                        >
                            <FiShoppingBag size={28} style={{ color: '#805AD5' }} />
                            <Text
                            fontSize={{base: 'xl', md: '2xl'}}
                            fontWeight="bold"
                            textTransform={"uppercase"}
                            textAlign={"center"}
                            color="#805AD5"
                            bgGradient={"linear(to-l, #805AD5, #2D3748)"}
                            // bgClip="text"
                            >
                                Product Store
                            </Text>
                        </HStack>
                    </Link>
                    <HStack spacing={4}>
                        {/* <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <FiSun size={24} style={{ color: '#805AD5' }} /> : <FiMoon size={24} style={{ color: '#805AD5' }} />}
                        </Button> */}
                        <Link to="/create">
                            <Button
                                p={2}
                                bg="white"
                                boxShadow="sm"
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    bg: 'gray.50',
                                    boxShadow: 'md'
                                }}
                                transition="all 0.3s"
                            >
                                <FiPlusSquare size={24} style={{ color: '#805AD5' }} />
                            </Button>
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default NavBar