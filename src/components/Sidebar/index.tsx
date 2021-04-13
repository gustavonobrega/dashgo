import { Box, Stack} from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8" >
      <Stack spacing="12" mr="8" >
        <NavSection title="GERAL" >
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO" >
          <NavLink icon={RiInputMethodLine}>Formuláruios</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}