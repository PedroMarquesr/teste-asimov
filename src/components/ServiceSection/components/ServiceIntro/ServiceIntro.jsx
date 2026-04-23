import { Flex, Box, Heading, Text } from "@chakra-ui/react"

export default function ServiceIntro() {
    return (
        <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "30px", md: "40px" }}
            mb={{ base: "40px", md: "80px" }}
            align={{ base: "flex-start", md: "center" }}
        >
            <Box
                bgColor="brand.green"
                borderRadius="7px"
                px="8px"
                py="2px"
                display="inline-block"
            >
                <Heading
                    as="h2"
                    p={"8px"}
                    fontWeight="500"
                    fontSize={{ base: "h2Mob", md: "h2" }}
                    color="brand.dark"
                >
                    Services
                </Heading>
            </Box>
            <Text
                maxW={{ base: "100%", md: "580px" }}
                fontSize={{ base: "pMob", md: "p" }}
                lineHeight="28px"
                color="brand.dark"
            >
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </Text>
        </Flex>
    )
}