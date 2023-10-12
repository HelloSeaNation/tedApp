import { Box, Center, Text } from '@chakra-ui/react';
import  Map  from '../components/Map'

export const ThankYou = () =>{

    const textStyles = {
        fontFamily: "Coiny",
        color: "#654534",
        fontSize: "25px",
        
        paddingTop: "30px",
        
      };

      const textStyles2 = {
        fontFamily: "Coiny",
        color: "#654534",
        fontSize: "18px",
        paddingBottom: "30px",
        
      };

      const containerStyles = {
        marginTop: "130px",
      };

    return(
        <>
        <Center>
            <Box style={containerStyles}>
                <Box style={textStyles}>
                    <Text>Thank you for your order!</Text>
                </Box>
            </Box>
        </Center>

        <Center>
            <Box style={textStyles2}>
                <Text>Your order will be ready to collect in 20 minutes!</Text>
            </Box>
        </Center>

            <Box>
                <Center>
                    <Map width="60%" height="450" />
                </Center>
            </Box>
        </>
    )
}

export default ThankYou;