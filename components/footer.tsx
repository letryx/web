import { FC, ElementType } from 'react';
import { Box, Text, Stack, Link, Icon, SimpleGrid } from '@chakra-ui/react';
// import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';

type FooterLinkProps = {
  icon: ElementType;
  href: string;
  label: string;
};

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/letryx-software',
  },
  // {
  //   icon: IoLogoTwitter,
  //   label: 'Twitter',
  //   href: 'https://twitter.com/cliftonk',
  // },
  // {
  //   icon: IoLogoLinkedin,
  //   label: 'LinkedIn',
  //   href: 'https://www.linkedin.com/in/cliftonking',
  // },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:lburns@letryx.com',
  },
];

const FooterLink: FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" /> {label}
  </Link>
);

const Footer: FC = () => (
  <Box as="footer" pt={20} pb={4} pl={0}>
    <SimpleGrid columns={3} spacingX={3}>
      <Text>© {new Date().getFullYear()} Letryx</Text>
      <Stack direction="column" spacing={2}>
        {/* <Text>Blog</Text>
        <Text>About</Text>
        <Text>Pricing</Text>
        <Text>Careers</Text>
        <Text>Status</Text> */}
      </Stack>
      <Stack spacing={2}>
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </SimpleGrid>
  </Box>
);

export { Footer };
