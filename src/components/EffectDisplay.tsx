import { Carousel } from "antd";
import { Flex, Heading, Divider, Center } from "@chakra-ui/react";
import {motion} from 'framer-motion'



const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
    lineHeight: '160px',
    width: '60vw',
  
  textAlign: 'center',
  background: '#364d79',
};


function EffectDisplay({ quotes }) {
  // Ensure that quotes is always an array
  if (!Array.isArray(quotes)) {
    return <div>Invalid data</div>;
  }

  return (
    <div>
      <Center>
        <Heading mt={10} mb={5} fontFamily={'adobe-garamond-pro'}>
          Use Effect Example
        </Heading>
      </Center>
      <Divider />
      <Flex justify={'center'} alignContent={'center'}>
        <Flex w={'700px'} h={'200px'} justify={'center'}>
          <Carousel dotPosition={'right'}>
            {quotes.map((quote, index) => (
              <div key={index}>
                <motion.div whileHover={{scale: 1.1}}>
                  <h3 style={contentStyle}>
                    {quote.text} - {quote.author}
                  </h3>
                </motion.div>
              </div>
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </div>
  );
}

export default EffectDisplay;
