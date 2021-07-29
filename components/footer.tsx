import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { SocialLink } from 'components/social-link';
import { FC } from 'react';

const Footer: FC = () => (
  <Box as="footer" pt={20} pb={4} pl={0}>
    <SimpleGrid columns={3} spacingX={3}>
      <Text>&copy;{new Date().getFullYear()} Letryx LLC</Text>
      <Stack direction="column" spacing={2}>
        {/* <Text>Blog</Text>
        <Text>About</Text>
        <Text>Pricing</Text>
        <Text>Careers</Text>
        <Text>Status</Text> */}
      </Stack>
      <Stack spacing={2}>
        <SocialLink
          social="linkedin"
          label="LinkedIn"
          href="https://www.linkedin.com/company/letryx"
        />
        <SocialLink
          social="github"
          label="Github"
          href="https://github.com/letryx-software"
        />
        <SocialLink
          social="email"
          label="Email"
          href="mailto:support@letryx.com"
        />
      </Stack>
    </SimpleGrid>
  </Box>
);

export { Footer };
