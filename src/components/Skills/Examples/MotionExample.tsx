import { Heading, Center, Box } from '@chakra-ui/react';
import {motion} from 'framer-motion'



function MotionExample() {
    return (
        <>
            <Box h={300} w="100%">
        <Center><Heading fontFamily={'adobe-garamond-pro'}>Framer Motion Example</Heading></Center>
        <motion.div
        className="outline outline-blue-gray-900  w-20"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag={true}
       
                    dragConstraints={{ left: 300, right: 600, top: 100, bottom: 100 }}
        animate={{x: 500, y: 100}}
      >
        <div className="bg-blue-500 w-20 h-20 "><Center>Drag me!</Center></div>
      </motion.div></Box></>);
}

export default MotionExample;