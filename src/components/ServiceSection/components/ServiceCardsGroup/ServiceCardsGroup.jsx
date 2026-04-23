import { Flex } from "@chakra-ui/react"
import ServiceCard from "./components/ServiceCard/ServiceCard"

export default function ServiceCardsGroup() {
  return (
    <Flex w={"100%"} flexDir={"column"} gap={"40px"}>
      <Flex gap={"40px"}>
        <ServiceCard
          titleCard="Search engine"
          subTitleCard="optimization"
          bgColor="brand.gray"
          bgText="brand.green"
          arrowColor="brand.green"
          bgArrow="brand.black"
          learnMoreColor="brand.black"
        />
        <ServiceCard
          titleCard="Pay-per-click"
          subTitleCard="advertising"
          bgColor="brand.green"
          arrowColor="brand.green"
          bgText="brand.gray"
          bgArrow="brand.black"
          learnMoreColor="brand.black"
        />
      </Flex>
      <Flex gap={"40px"}>
        <ServiceCard
          titleCard="Social media"
          subTitleCard="marketing"
          bgColor="#191A23"
          arrowColor="brand.dark"
          bgText="brand.gray"
          bgArrow="brand.gray"
          learnMoreColor="brand.gray"
        />
        <ServiceCard
          titleCard="E-mail"
          subTitleCard="marketing"
          bgColor="brand.gray"
          arrowColor="brand.green"
          bgText="brand.green"
          bgArrow="brand.black"
          learnMoreColor="brand.black"
        />
      </Flex>
      <Flex gap={"40px"}>
        <ServiceCard
          titleCard="Content"
          subTitleCard="marketing"
          bgColor="brand.green"
          arrowColor="brand.green"
          bgText="brand.gray"
          bgArrow="brand.black"
          learnMoreColor="brand.black"
        />

        <ServiceCard
          titleCard="Analytics and"
          subTitleCard="Tracking"
          bgColor="#191A23"
          arrowColor="brand.dark"
          bgText="brand.green"
          bgArrow="brand.gray"
          learnMoreColor="brand.gray"
        />
      </Flex>
    </Flex>
  )
}
