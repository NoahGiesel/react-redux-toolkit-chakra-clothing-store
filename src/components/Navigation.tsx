import { Text , Button, Flex, Spacer, Tooltip } from '@chakra-ui/react';
import React from 'react';

const Navigation = () => {
  return <div  >
      <Flex p={4} mr={5} ml={5} >
            <Text 
                bgGradient='linear(to-l, #2CA51F, #3DD02D)'
                flex="start"
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'
                >
                SHIRT
            </Text>
            <Spacer />
            <Tooltip hasArrow label='See your card' bg='green'> 
                <Button 
                    pl={6}
                    pr={6}
                    mr={5}
                    my={3}
                    colorScheme='green' 
                >Card
                </Button>
            </Tooltip>
        </Flex>
      </div>;
};

export default Navigation;
