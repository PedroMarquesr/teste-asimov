'use client'

import { Flex, Button, HStack, Image, Link, Box, Icon } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerNavbar from './components/DrawerNavbar/DrawerNavbar';
import { useState } from 'react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Flex
            py="20px"
            justify="space-between"
            align="center"
        >
            <Image
                src="/images/logo-positivus.svg"
                alt="Positivus"
                width={"219.54px"}
                height={"56px"}
                border={"1px solid red"}

            />

            <HStack
                gap="40px"
                display={{ base: 'none', md: 'flex' }}
                color={"brand.dark"}
                border={"1px solid red"}
                fontSize={"20px"}
            >
                <Link>About us</Link>
                <Link>Services</Link>
                <Link>Use Cases</Link>
                <Link>Pricing</Link>
                <Link>Blog</Link>
                <Button
                    variant="outline"
                    borderColor="brand.dark"
                    borderRadius="14px"
                    border="1px solid"
                    px="35px"
                    py="20px"
                    fontWeight="500"
                    fontSize="16px"
                    display={{ base: 'none', md: 'flex' }}
                    _hover={{ bgColor: "brand.dark", color: "brand.green" }}
                >
                    Request a quote
                </Button>
            </HStack>
            <Button
                display={{ base: 'flex', md: 'none' }}
                bgColor="brand.gray"
                color="brand.black"
                onClick={() => setIsOpen(true)}
            >
                <Icon as={GiHamburgerMenu} w={6} h={6} />
            </Button>


            <DrawerNavbar
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

        </Flex>
    )
}