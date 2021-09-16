import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Layout } from 'components/layout';
import { SocialLinks } from 'components/social-links';
import { FC, ReactElement } from 'react';

interface ProfileProps {
  name: string;
  title: string;
  photo_url: string;
  socialLinks: ReactElement;
}

const Profile: FC<ProfileProps> = ({
  name,
  title,
  photo_url,
  children,
  socialLinks,
}) => (
  <Center>
    <Box
      w="300px"
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow="2xl"
      rounded="lg"
      py={6}
      px={4}
      textAlign="center"
    >
      <Avatar
        w={48}
        h={48}
        src={photo_url}
        alt={`photo of ${name}`}
        boxShadow="md"
        mb={4}
        pos="relative"
      />
      <Heading fontSize="2xl" fontFamily="body">
        {name}
      </Heading>
      <Text
        letterSpacing="wide"
        fontSize="lg"
        fontWeight={600}
        color={useColorModeValue('gray.700', 'gray.500')}
        mb={2}
        mt={1}
      >
        {title}
      </Text>
      <Box
        textAlign="center"
        color={useColorModeValue('gray.700', 'gray.300')}
        px={3}
        fontSize="16px"
      >
        {children}
      </Box>
      <Center>
        <Stack mt={4} direction="row" spacing={4}>
          {socialLinks}
        </Stack>
      </Center>
    </Box>
  </Center>
);

const AboutPage: FC = () => {
  return (
    <Layout title="Letryx">
      <Stack py={20} spacing={24} as={Container} maxW="3xl" textAlign="center">
        <Box>
          <Heading fontSize="4xl" pb={8}>
            About Letryx
          </Heading>
          <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize="xl">
            Letryx is a web-based tool for M&amp;A attorneys and investment
            analysts that accelerates deal execution by identifying trends in
            precedent contracts and disclosures, and provides predictive
            analytics based on these trends.
          </Text>
        </Box>
        <Box>
          <Heading fontSize="4xl" pb={8}>
            Meet the Team
          </Heading>
          <Center>
            <Stack
              py="6"
              spacing={4}
              direction={['column', 'column', 'column', 'row']}
            >
              <Profile
                name="Vlad Kobzar"
                title="CEO &amp; Chief Scientist"
                photo_url="/img/marketing/vlad.jpeg"
                socialLinks={
                  <SocialLinks
                    socialLinks={[
                      {
                        social: 'linkedin',
                        href: 'https://www.linkedin.com/in/vlad-kobzar-a4191338/',
                      },
                    ]}
                  />
                }
              >
                <List spacing={1}>
                  <ListItem>NSF postdoc, Columbia University</ListItem>
                  <ListItem>JD/PhD in Data Science, NYU</ListItem>
                  <ListItem>Attorney, Goldman Sachs </ListItem>
                </List>
              </Profile>
              <Profile
                name="Clifton King"
                title="CTO"
                photo_url="/img/marketing/clifton.jpeg"
                socialLinks={
                  <SocialLinks
                    socialLinks={[
                      {
                        social: 'linkedin',
                        href: 'https://www.linkedin.com/in/cliftonking',
                      },
                      {
                        social: 'github',
                        href: 'https://github.com/clifton',
                      },
                    ]}
                  />
                }
              >
                <List spacing={1}>
                  <ListItem>Investor, Sixty Capital</ListItem>
                  <ListItem>Tech Lead, Bridgewater Associates</ListItem>
                  <ListItem>Co-founder, OrgSync (acq)</ListItem>
                </List>
              </Profile>
              <Profile
                name="Luke Burns"
                title="Co-founder"
                photo_url="/img/marketing/luke.png"
                socialLinks={
                  <SocialLinks
                    socialLinks={[
                      {
                        social: 'linkedin',
                        href: 'https://www.linkedin.com/in/llburns',
                      },
                    ]}
                  />
                }
              >
                <List spacing={1}>
                  <ListItem>Special Counsel, Leading Law Firm</ListItem>
                  <ListItem>JD, magna cum laude, UPenn Law</ListItem>
                  <ListItem>&nbsp;</ListItem>
                </List>
              </Profile>
            </Stack>
          </Center>
        </Box>
      </Stack>
    </Layout>
  );
};

export default AboutPage;
