import { FunctionComponent } from 'react';
import { Box, Text, Stack, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';

type FooterLinkProps = {
  icon: React.ElementType;
  href: string;
  label: string;
};

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/letryx-software',
  },
  {
    icon: IoLogoTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/cliftonk',
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cliftonking',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:cliftonk@gmail.com',
  },
];

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" /> {label}
  </Link>
);

const Footer: FunctionComponent = () => (
  <Box as="footer" py={20}>
    <SimpleGrid columns={3} spacingX={3}>
      <Text>© {new Date().getFullYear()} Letryx</Text>
      <Stack direction="column" spacing={2}>
        <Text>Blog</Text>
        <Text>About</Text>
        <Text>Pricing</Text>
        <Text>Careers</Text>
        <Text>Status</Text>
      </Stack>
      <Stack direction="column" spacing={2}>
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </SimpleGrid>
  </Box>
);

export { Footer };
