import {
  Accordion,
  AccordionButton,
  Text,
  AccordionPanel,
  Box,
  AccordionIcon,
  AccordionItem,
} from "@chakra-ui/react";

export default function FactAccordian() {
  return (
    <Accordion className="h-40 w-screen mt-20">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box fontSize={30} as="span" flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontFamily={"helvetica"} fontSize={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              fontFamily={"helvetica"}
              fontSize={30}
              as="span"
              flex="1"
              textAlign="left"
            >
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontFamily={"helvetica"} fontSize={20}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
