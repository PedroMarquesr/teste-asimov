"use client"
import { Button, CloseButton, Drawer, Flex, Link, Portal } from "@chakra-ui/react"

const menuLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

export default function DrawerNavbar({ isOpen, onClose }) {
    return (
        <Drawer.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                        <Drawer.Body>
                            <Flex direction="column" gap="30px" mt="60px" align="center">
                                {menuLinks.map((link) => (
                                    <Link key={link} fontSize="18px" onClick={onClose} color={"brand.dark"}>
                                        {link}
                                    </Link>
                                ))}
                                <Button
                                    variant="outline"
                                    px="35px"
                                    py="20px"
                                    fontWeight="500"
                                    w="full"
                                >
                                    Request a quote
                                </Button>
                            </Flex>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}