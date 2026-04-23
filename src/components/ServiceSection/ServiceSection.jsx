import { Flex, Text } from "@chakra-ui/react"
import ServiceCardsGroup from "./components/ServiceCardsGroup/ServiceCardsGroup"
import ServiceIntro from "./components/ServiceIntro/ServiceIntro"
import ServiceProposal from "./components/ServiceProposal/ServiceProposal"

export default function ServiceSection() {
  return (
    <Flex
      mt={"100px"}
      bgColor="white"
      pb={{ base: "40px", md: "140px" }}
      direction={{ base: "column", md: "row" }}
      color="brand.dark"
      flexDir={"column"}
    >
      <ServiceIntro />
      <ServiceCardsGroup />
      <ServiceProposal />
    </Flex>
  )
}
