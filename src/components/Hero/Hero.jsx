
// 'use client'

// import { Flex, Heading, Text, Image } from "@chakra-ui/react";

// export default function Hero() {
//     return (
//         <Flex bgColor={"brand.gray"} pb={{ base: '20px', md: '140px' }} color={"brand.dark"} pt={{ base: '20px', md: '108.84px' }} justify={"space-between"}>
//             <Flex w={{ base: '100%', md: '531px' }} flexDir={"column"}>
//                 <Heading as="h1" fontWeight={"500"} lineHeight={{ md: '100px' }} fontSize={{ base: 'h2Mob', md: '60px' }}>Navigating the digital landscape for success</Heading>

//                 <Text pr={"33px"} fontSize={"pMob"} textAlign={"initial"}>


//                     Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
//                 </Text>
//             </Flex>
//             <Flex>
//                 <Image src="/images/Illustration.svg" alt="Hero" w={{ md: '600.46' }} h={{ md: '515px' }} />
//             </Flex>

//         </Flex>
//     )
// }


'use client'

import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

export default function Hero() {
    return (
        <Flex
            bgColor="white"
            pt={{ base: '40px', md: '108px' }}
            pb={{ base: '40px', md: '140px' }}
            justify="space-between"
            align="center"
            gap="40px"
            direction={{ base: 'column', md: 'row' }}
            color="brand.dark"
        >
            {/* Texto */}
            <Flex direction="column" gap="35px" maxW={{ base: '100%', md: '531px' }}>
                <Heading
                    as="h1"
                    fontWeight="500"
                    lineHeight="1.1"
                    fontSize={{ base: 'h1Mob', md: 'h1' }}
                >
                    Navigating the digital landscape for success
                </Heading>

                <Text fontSize={{ base: 'pMob', md: 'p' }} lineHeight="1.6">
                    Our digital marketing agency helps businesses grow and succeed online
                    through a range of services including SEO, PPC, social media
                    marketing, and content creation.
                </Text>

                <Button
                    bgColor="brand.dark"
                    color="white"
                    borderRadius="14px"
                    px="35px"
                    py="20px"
                    fontSize="16px"
                    fontWeight="500"
                    w="fit-content"
                    _hover={{ opacity: 0.85 }}
                >
                    Book a consultation
                </Button>
            </Flex>

            {/* Imagem */}
            <Image
                src="/images/Illustration.svg"
                alt="Hero"
                w={{ base: '100%', md: '600px' }}
                h={{ md: '515px' }}
                objectFit="contain"
            />
        </Flex>
    )
}