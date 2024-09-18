import { useState } from "react";
import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return <Container maxW={'container.sm'}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
            Create New Product
        </Heading>

        <Box w={'full'} bg={useColorModeValue('white', 'gray.800')} p={6} rounded={'lg'} shadow={'md'}>
            <VStack spacing={4}>
                <Input placeholder="Product Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
                <Input placeholder="Price" name="name" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
                <Input placeholder="Image URL" name="name" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} />
            </VStack>

            <Button colorScheme="blue" onClick={handleAddProduct} w={'full'} mt={8}>Add Product</Button>
        </Box>
    </Container>
};

export default CreatePage;