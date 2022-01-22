import {
  ButtonGroup,
  ButtonGroupProps,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { ElementType, FC } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

type Social = 'github' | 'linkedin' | 'email' | 'twitter';
const iconMap: Record<Social, ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  twitter: FaTwitter,
};

interface SocialLinkProps {
  social: Social;
  href: string;
}

export const SocialLinks: FC<
  ButtonGroupProps & { socialLinks: SocialLinkProps[] }
> = ({ socialLinks, ...props }) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    {socialLinks.map(({ href, social }) => (
      <IconButton
        as="a"
        key={`button-${social}-${href}`}
        href={href}
        target="_blank"
        aria-label={social}
        icon={<Icon as={iconMap[social]} fontSize="20px" />}
      />
    ))}
  </ButtonGroup>
);
