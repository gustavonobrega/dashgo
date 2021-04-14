import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Gustavo Nobrega</Text>
          <Text color="gray.300" fontSize="small" >gustavo.nobrega@gmail.com</Text>
        </Box>
      )}
      
      <Avatar size="md" name="Gustavo Nobrega" src="https://github.com/gustavonobrega.png" />
  </Flex>
  );
}