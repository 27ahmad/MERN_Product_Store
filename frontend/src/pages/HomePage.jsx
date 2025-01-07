import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();
    
    useEffect(() => {
        fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Remove fetchProducts from dependency array

    return (
        <Container maxW="container.xl" py={12}>
            <VStack margin={20}>
                <Text
                    fontSize="6xl"
                    fontWeight="extrabold"
                    textAlign="center"
                    letterSpacing="tight"
                    color={"purple.500"}
                >
                    Welcome to Product Store
                </Text>

                {products.length > 0 ? (
                    <SimpleGrid
                        columns={{ // Fix spelling of 'columns'
                            base: 1,
                            md: 2,
                            lg: 3
                        }}
                        margin={50}
                        gap={30}
                        w={"full"}
                    >
                        {products.map((product) => (  // Add return parentheses
                            <ProductCard 
                                key={product._id} 
                                product={product}
                            />
                        ))}
                    </SimpleGrid>
                ) : (
                    <Text 
                        fontSize='xl' 
                        textAlign={"center"}
                        fontWeight={"bold"} 
                        color='gray.500'
                    >
                        No Products found ☹️ {" "}
                        <Link to={"/create"}>
                            <Text 
                                as='span' 
                                color='blue.500' 
                                _hover={{ textDecoration:"underline"}}
                            >
                                Add Product
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    );
};

export default HomePage;