import Image from "next/image"
import { Flex, Text } from "@chakra-ui/react"
import styles from "./page.module.css"
import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import ServiceSection from "@/components/ServiceSection/ServiceSection"

export default function Home() {
  return (
    <Flex
      bgColor={"white"}
      px={{ base: "20px", md: "100px" }}
      flexDir={"column"}
    >
      <Navbar />
      <Hero />
      <ServiceSection />
    </Flex>
  )
}
