import { Heading, VStack, Container, Box, Input, Button, } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster"
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const {success, message } = await createProduct(newProduct)
    if (success) {
      
      toaster.create({
        title: message,
        type: "success",
      })
  } else {
    toaster.create ({
      title: message,
      type: "error",
    })
  }
}
  return (
    <Container maxW={"xl"}
    mt={"100px"}
    py={10}>
      <VStack spacing={8}>
        <Heading as={"h1"} size="4xl" textAlign={"center"} mb={8} color={"purple.500"} fontWeight={"bold"}>
          Create Product
        </Heading>

        <Box w={"full"} bg={"white"} boxShadow={"2xl"} p={8} rounded={"lg"}>
          <VStack gap={10}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }/>

             <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }/>

               <Input
              placeholder="Image URL"
              name="name"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }/>

              <Button borderRadius={8} bgColor={"purple.500"} size="lg" onClick={handleAddProduct}>
                Add Product
                </Button>

              
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
