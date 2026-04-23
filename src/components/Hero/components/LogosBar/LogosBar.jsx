import { Flex, Image } from "@chakra-ui/react"

export default function LogosBar() {
  return (
    <Flex color="brand.gray" justify={"space-between"} w={"100%"} wrap="wrap">
      <Image
        src="/images/logos/logo-amazon.svg"
        alt="Amazon"
        filter="grayscale(1)"
      />
      <Image
        src="/images/logos/logo-dribbble.svg"
        alt="Dribbble"
        filter="brightness(0)"
      />
      <Image
        src="/images/logos/logo-hubspot.svg"
        alt="Hubspot"
        filter="grayscale(1)"
      />

      <Image
        src="/images/logos/logo-notion.svg"
        alt="Notion"
        filter="brightness(0)"
      />

      <Image src="/images/logos/logo-netflix.svg" alt="Netflix" />
      <Image src="/images/logos/logo-zoom.svg" alt="Zoom" />
    </Flex>
  )
}
