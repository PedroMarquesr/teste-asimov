"use client"

import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react"
import LogosBar from "./components/LogosBar/LogosBar"

export default function Hero() {
    return (
        <Flex
            mt={"70px"}
            bgColor="white"
            pb={{ base: "40px", md: "140px" }}
            justify="space-between"
            align="center"
            gap="40px"
            direction={{ base: "column", md: "row" }}
            color="brand.dark"
            flexDir={"column"}
        >
            <Flex w={"100%"} justify={"space-between"}>
                <Flex
                    direction="column"
                    gap="35px"
                    maxW={{ base: "100%", md: "531px" }}
                    alignSelf="flex-start"
                    order={{ base: 1, md: 1 }}
                >
                    <Heading
                        as="h1"
                        fontWeight="500"
                        lineHeight="1"
                        fontSize={{ base: "h1Mob", md: "h1" }}
                    >
                        Navigating the digital landscape for success
                    </Heading>

                    <Image
                        display={{ base: "block", md: "none" }}
                        src="/images/Illustration.svg"
                        alt="Hero"
                        w="100%"
                        objectFit="contain"
                    />

                    <Text fontSize={{ base: "pMob", md: "p" }} lineHeight="28px">
                        Our digital marketing agency helps businesses <br /> grow and
                        succeed online through a range of
                        <br /> services including SEO, PPC, social media marketing,
                        <br /> and content creation.
                    </Text>

                    <Button
                        bgColor="brand.dark"
                        color="white"
                        borderRadius="14px"
                        alignSelf={{ base: "center", md: "flex-start" }}
                        px="35px"
                        py="20px"
                        w={{ base: "100%", md: "264px" }}
                        h="68px"
                        _hover={{ opacity: 0.85 }}
                    >
                        <Text fontWeight="400" fontSize={{ base: "h4Mob", md: "h4" }}>
                            Book a consultation
                        </Text>
                    </Button>
                </Flex>

                <Image
                    display={{ base: "none", md: "block" }}
                    src="/images/Illustration.svg"
                    alt="Hero"
                    w={{ base: "100%", md: "600px" }}
                    h={{ md: "515px" }}
                    objectFit="contain"
                    order={{ base: 2, md: 2 }}
                />
            </Flex>
            <LogosBar />
        </Flex>
    )
}
