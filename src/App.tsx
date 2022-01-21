import './App.css';
import Navigation from "./components/Navigation"
import ItemList from "./components/ItemList"
import { Box, Button, HStack, Input, useNumberInput ,Image, Flex, Grid, Badge} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { useState } from 'react';

 

function MyInput() {
  const [inputVal , setInputVal ] = useState<number>(1);
  return ( 
    <> 
      <Button w={25} onClick={() => setInputVal((e) => e += 1) } >+</Button>
        <Input readOnly w={50} value={ inputVal} mx={2}/>
      <Button  w={25} onClick={() => setInputVal((e) => e -= 1)}>-</Button>
    </>
  )
}





function HookUsage() { 
  const item = useSelector((state: RootState) => state.itemList.items )
  // console.log(item)
  return (
    <Box  mx={300} py={50} >
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
          {item.map((x :any, index:number) => {
            return (
              <Box borderRadius={15} w={350} bg="white" p={3}  my={50}  key={index}    >
                <Image  borderRadius={10} w={350}  src={x.img} alt={x.title} />

                <Box my={4} display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                  </Badge>
                  <Box
                    color='black.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    {123} beds &bull; {2} baths
                  </Box>
                </Box>
                <Grid my={4} templateColumns='1fr 1fr' gap={0} > 
                  <div > 
                    <Box
                      mt='1'
                      fontWeight='bold'
                      fontSize={20}
                      as='h4'
                      lineHeight='tight'
                      isTruncated 
                      >
                      {x.title}
                    </Box>
                    <Box  fontSize={18} color='black.600'my={1} >
                      {x.price + " "}
                      <Box as='span' color='black.600' fontSize='lg'>
                        €
                      </Box>
                    </Box>
                  </div>
                  <Box   display='flex' flexDir="row"  my={3}>
                    <MyInput /> 
                  </Box>
                </Grid>
                <Grid my={4} templateColumns='1fr 1fr' gap={0} > 
                  <Box pb={5} display='flex'  mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < 4 ? 'yellow.400' : 'grey.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {324} reviews
                    </Box>
                  </Box>
                  <Button bg="green.500" color="white" w={20} ml={20}>Card</Button>      
              </Grid>
            </Box>
            )
          })}
      </Grid>
    </Box>
    )
} 


function App() {

  return (
    <div className="App">
      <Navigation /> 
      <HookUsage/>
      {/* <ItemList itemList={data} />  */}
    </div>
  );
}

export default App;
function getIncrementButtonProps() {
  throw new Error('Function not implemented.');
}

function getInputProps(arg0: { isReadOnly: boolean; }) {
  throw new Error('Function not implemented.');
}

