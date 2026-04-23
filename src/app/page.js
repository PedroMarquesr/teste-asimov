import Image from "next/image"
import { Flex, Text } from "@chakra-ui/react"
import styles from "./page.module.css"
import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import ServiceSection from "@/components/ServiceSection/ServiceSection"

export default function Home() {
  return (
    <Flex w="100%" bgColor={"white"} flexDir={"column"} alignItems={"center"}>
      <Flex
        w="100%"
        maxW="1440px"
        px={{ base: "20px", md: "100px" }}
        flexDir={"column"}
      >
        <Navbar />
        <Hero />
        <ServiceSection />
      </Flex>
    </Flex>
  )
}
