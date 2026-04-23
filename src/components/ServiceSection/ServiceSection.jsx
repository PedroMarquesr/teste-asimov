import { Flex, Text } from "@chakra-ui/react"
import ServiceCardsGroup from "./components/ServiceCardsGroup/ServiceCardsGroup"

export default function ServiceSection() {
  return (
    <Flex
      mt={"140px"}
      bgColor="white"
      pb={{ base: "40px", md: "140px" }}
      justify="space-between"
      align="center"
      direction={{ base: "column", md: "row" }}
      color="brand.dark"
      flexDir={"column"}
    >
      <ServiceCardsGroup />
    </Flex>
  )
}
