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
  selectedImageCard,
}) {
  const selectArrow = (arrowColor) => {
    if (arrowColor === "brand.green") {
      return "/images/icon/Arrow-green.svg"
    } else {
      return "/images/icon/Arrow-black.svg"
    }
  }
  const selectImage = (selectedImageCard) => {
    switch (selectedImageCard) {
      case "search-engine":
        return "/images/card-images/tokyo-magnifier-web-1.svg"
      case "pay-per-click":
        return "/images/card-images/tokyo-selecting-a-value-2.svg"
      case "social-media":
        return "/images/card-images/tokyo-browser-window-3.svg"
      case "e-mail":
        return "/images/card-images/tokyo-sending-messages-4.svg"
      case "content":
        return "/images/card-images/tokyo-many-browser-5.svg"
      case "analytics":
        return "/images/card-images/tokyo-volumetric-analytics-6.svg"
      default:
        return ""
    }
  }

  return (


    <Flex
      bgColor={bgColor}
      border={"1px solid black"}
      borderRadius={"45px"}
      w={{ base: "100%", lg: "600px" }}
      minH={"310px"}
      p={{ base: "30px", md: "50px" }}
      boxShadow={"0px 5px 0px 0px #191A23"}
      justify={"space-between"}
      alignItems={"center"}
      flexDir={{ base: "column", sm: "row" }}
      gap={{ base: "20px", sm: "0" }}
    >
      <Flex flexDir={"column"} justify={"space-between"} h="100%" minH={{ sm: "210px" }} w={{ base: "100%", sm: "50%" }}>
        <Flex flexDir={"column"} gap="0" align="flex-start">
          <Box
            bgColor={bgText}
            borderRadius="7px"
            display="inline-flex"
            px="8px"
            py="2px"
          >
            <Text fontSize={{ base: "24px", md: "30px" }} color="brand.dark" fontWeight="500">
              {titleCard}
            </Text>
          </Box>

          <Box
            bgColor={bgText}
            borderRadius="7px"
            display="inline-flex"
            px="8px"
            py="2px"
            mt="-2px"
          >
            <Text fontSize={{ base: "24px", md: "30px" }} color="brand.dark" fontWeight="500">
              {subTitleCard}
            </Text>
          </Box>
        </Flex>

        <Button 
          bgColor="transparent" 
          p="0" 
          justifyContent="flex-start"
          mt={{ base: "20px", sm: "0" }}
          transition="all 0.3s ease"
          _hover={{ opacity: 0.7, transform: "translateX(5px)", bgColor: "transparent" }}
        >
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
              w={"20px"}
              h={"20px"}
            />
          </Flex>
          <Text fontSize={"20px"} color={learnMoreColor} display="block">
            Learn more
          </Text>
        </Button>
      </Flex>
      
      <Flex w={{ base: "100%", sm: "50%" }} justify={{ base: "center", sm: "flex-end" }} alignItems="center">
        <Image 
          src={selectImage(selectedImageCard)} 
          alt="Image" 
          w={{ base: "150px", sm: "210px" }} 
          objectFit="contain" 
        />
      </Flex>
    </Flex>
  )
}
