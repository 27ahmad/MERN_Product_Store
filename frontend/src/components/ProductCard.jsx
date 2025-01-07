/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  VStack,
  Input,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useProductStore } from "../store/product";
import { toaster } from "../components/ui/toaster";
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
} from "../components/ui/dialog";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: message,
        type: "success",
      });
    } else {
      toaster.create({
        title: message,
        type: "error",
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsOpen(false);
    if (success) {
      toaster.create({
        title: message,
        type: "success",
      });
    } else {
      toaster.create({
        title: message,
        type: "error",
      });
    }
    console.log(message);
  };

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight={"bold"} fontSize="xl" color={"blackAlpha.700"} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <Button
            p={2}
            bg="white"
            color="blue.500"
            _hover={{
              transform: "translateY(-2px)",
              color: "blue.600",
            }}
            onClick={() => setIsOpen(true)}
          >
            <FiEdit2 size={20} />
          </Button>
          <Button
            p={2}
            bg="white"
            color="red.500"
            _hover={{
              transform: "translateY(-2px)",
              color: "red.600",
            }}
            onClick={() => handleDeleteProduct(product._id)}
          >
            <FiTrash2 size={20} />
          </Button>
        </HStack>
      </Box>
      <DialogRoot open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />
            </VStack>
          </DialogBody>
          <DialogFooter>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              colorScheme="purple"
            >
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </Box>
  );
};

export default ProductCard;
