import { Flex, Text, Button, Image, Heading } from "@chakra-ui/react"

export default function ServiceProposal() {
    return (
        <Flex
            w="100%"
            bgColor="#F3F3F3"
            borderRadius="45px"
            p={{ base: "40px", md: "60px" }}
            mt={{ base: "60px", md: "100px" }}
            justify="space-between"
            align="center"
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "40px", md: "0" }}
            position="relative"
        >
            <Flex flexDir="column" gap="20px" maxW={{ base: "100%", md: "500px" }} zIndex="1">
                <Heading
                    as="h3"
                    fontSize={{ base: "26px", md: "30px" }}
                    fontWeight="500"
                    color="brand.dark"
                >
                    Let's make things happen
                </Heading>
                <Text fontSize={{ base: "16px", md: "18px" }} color="brand.dark" lineHeight="28px">
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </Text>
                <Button
                    bgColor="brand.dark"
                    color="white"
                    borderRadius="14px"
                    px="35px"
                    py="20px"
                    w={{ base: "100%", sm: "max-content" }}
                    h="68px"
                    mt="10px"
                    transition="all 0.3s ease"
                    _hover={{ opacity: 0.8 }}
                >
                    <Text fontWeight="400" fontSize={{ base: "18px", md: "20px" }}>
                        Get your free proposal
                    </Text>
                </Button>
            </Flex>

            <Flex
                display={{ base: "none", md: "flex" }}
                position="absolute"
                right={{ md: "20px", lg: "10%" }}
                top="50%"
                transform="translateY(-50%) scale(1.1)"
                zIndex="1"
            >
                <Image
                    src="/images/image-proposal/image-proposal.svg"
                    alt="Proposal Illustration"
                    objectFit="contain"
                />
            </Flex>
        </Flex>
    )
}