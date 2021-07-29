import { Icon, Link } from '@chakra-ui/react';
import { ElementType, FC } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

type Social = 'github' | 'linkedin' | 'email';
const iconMap: Record<Social, ElementType> = {
  github: DiGithubBadge,
  linkedin: IoLogoLinkedin,
  email: MdEmail,
};

interface SocialLinkProps {
  social: Social;
  label: string;
  href: string;
}

export const SocialLink: FC<SocialLinkProps> = ({ social, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={iconMap[social]} fontSize="xl" mr={1} />
    {label}
  </Link>
);
