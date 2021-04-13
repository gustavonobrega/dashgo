import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right" >
        <Text>Gustavo Nobrega</Text>
        <Text color="gray.300" fontSize="small" >gustavo.nobrega@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Gustavo Nobrega" src="https://github.com/gustavonobrega.png" />
  </Flex>
  );
}