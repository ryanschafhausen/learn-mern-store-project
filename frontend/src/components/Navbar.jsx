import { Container, Flex, Text, Link, HStack, Icon, Button, useColorMode } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


const NavBar = () => {
const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW={'1140px'} px={4}>
        <Flex 
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDir={{
                base: 'column',
                sm: 'row'
            }}>

            <Text
                textAlign={'center'}
                textTransform={'uppercase'}
                bgGradient='linear(to-r, cyan.400, blue.500)'
                bgClip='text'
                fontSize={{base: '22', sm: '28'}}
                fontWeight='bold'>
                <Link href={'/'}>Product Store <Icon as={FaShoppingCart} color='blue.500' /></Link>
            </Text>

            <HStack spacing={2} alignItems={'center'}>
                <Link href={'/create'}>
                    <Button>
                        <Icon as={FaPlusSquare} fontSize={20}></Icon>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <Icon as={FaMoon} fontSize={20}></Icon> : <Icon as={FaSun} fontSize={20}></Icon>}
                </Button>
            </HStack>

        </Flex>
    </Container>;
};

export default NavBar;