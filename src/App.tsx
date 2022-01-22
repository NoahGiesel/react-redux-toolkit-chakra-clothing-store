import './App.css';
import Navigation from "./components/Navigation"
import ItemList from "./components/ItemList"
import { Box, Button, HStack, Input, useNumberInput ,Image, Flex, Grid, Badge, Circle, Spacer, Tooltip} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { useState } from 'react';
import { decrementQuantity, incrementQuantity } from './redux/items';

 interface inputProps {
   title: string,
   getTitle: Function
 }

function MyInput (props:inputProps) {
  const [inputVal , setInputVal ] = useState<number>(1);
  // const count = useSelector((state : RootState) => state.itemList.itemList.items);
  const dispatch = useDispatch();

  function getItem(){
    let title = props.getTitle();
    console.log("i got the title and it is " + title)
  }
  return ( 
    <>  
      <Button w={25} onClick={() => dispatch(incrementQuantity(props.title)) } >+</Button>
        <Input readOnly w={55} value={ inputVal} mx={2}/>
      <Button  w={25} isDisabled={(inputVal===1)? true: false} onClick={() => dispatch(decrementQuantity(props.title))}>-</Button>
    </>
  )
}





function HookUsage() { 
  const item = useSelector((state: RootState) => state.itemList.itemList.items )
  // console.log(item)
  return (
    <Box  mx={300} py={50} >
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
          {item.map((x :any, index:number) => {
            return (
              <Box borderRadius={15} w={350} bg="white" p={3}  my={50}  key={index}    >
                <Image  borderRadius={10} w={350}  src={x.img} alt={x.title} />
                <Box my={4} display='flex' >
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    Clothing
                  </Badge>
                  <Spacer />
                  <Box
                    color='black.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    <Tooltip hasArrow label={x.color} color="white" bg="grey">
                      <Circle size='20px' mr={5} borderWidth={2} borderColor="#888" bg={x.color}/>
                    </Tooltip>
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
                    <MyInput title={x.title} getTitle={() => {return x.title}} /> 
                  </Box>
                </Grid>
                <Grid my={4} templateColumns='1fr 1fr' gap={0} > 
                  <Box pb={5} display='flex'  mt='2' alignItems='center'>
                  {console.log(x.stars)}
                    {Array(5)
                      .fill('')
                      .map((star , i) => (
                        
                        <StarIcon
                          key={i}
                          color={ i  < x.stars? 'yellow.400' : 'grey.300'}
                        />
                           
                      ))
                      }
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {x.reviews} reviews
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

