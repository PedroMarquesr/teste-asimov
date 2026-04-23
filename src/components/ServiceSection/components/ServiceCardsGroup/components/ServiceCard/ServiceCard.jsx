import {
  Flex,
  Text,
  Image,
  IconButton,
  Icon,
  Button,
  Box,
} from "@chakra-ui/react"

export default function ServiceCard({
  titleCard,
  subTitleCard,
  bgColor,
  arrowColor,
  bgText,
  bgArrow,
  learnMoreColor,
}) {
  const selectArrow = (arrowColor) => {
    if (arrowColor === "brand.green") {
      return "/images/icon/Arrow-green.svg"
    } else {
      return "/images/icon/Arrow-black.svg"
    }
  }

  return (
    <Flex
      bgColor={bgColor}
      border={"1px solid black"}
      borderRadius={"45px"}
      w={"600px"}
      h={"310px"}
      p={"50px"}
      boxShadow={"0px 5px 0px 0px #191A23"}
    >
      <Flex flexDir={"column"} justify={"space-between"}>
        <Flex flexDir={"column"}>
          <Box
            bgColor={bgText}
            borderRadius="7px"
            display="inline-flex"
            alignSelf="flex-start"
            px="8px"
            py="2px"
          >
            <Text fontSize="30px" color="brand.dark" fontWeight="500">
              {titleCard}
            </Text>
          </Box>

          <Box
            bgColor={bgText}
            borderRadius="7px"
            display="inline-flex"
            alignSelf="flex-start"
            px="8px"
            py="2px"
          >
            <Text fontSize="30px" color="brand.dark" fontWeight="500">
              {subTitleCard}
            </Text>
          </Box>
        </Flex>
        <Flex align={"center"}>
          <Button bgColor="transparent" _hover={{ bgColor: "transparent" }}>
            <Flex
              w={"41px"}
              h={"41px"}
              mr={"15px"}
              bgColor={bgArrow}
              borderRadius="full"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Icon
                as={Image}
                src={selectArrow(arrowColor)}
                alt="Arrow"
                color="white"
                _hover={{ bgColor: "transparent" }}
                w={"20px"}
                h={"20px"}
              />
            </Flex>
            <Text fontSize={"20px"} color={learnMoreColor}>
              Learn more
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
