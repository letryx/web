import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { MdWork } from 'react-icons/md';
import { AtSignIcon, InfoIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';

// const mailchimpUrl =
//   '//letryx.us7.list-manage.com/subscribe/post-json?u=bd1800853f530244c7f62d1ab&id=201d6086a7&c=?';

interface TextInputProps {
  type: string;
  name: string;
  placeholder: string;
}
const TextInput: FunctionComponent<TextInputProps> = ({
  type,
  name,
  placeholder,
  children,
}) => (
  <FormControl isRequired>
    <InputGroup>
      <InputLeftElement>{children}</InputLeftElement>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        _placeholder={{ color: useColorModeValue('gray.600', 'gray.200') }}
      />
    </InputGroup>
  </FormControl>
);

const SubscribeForm: FunctionComponent = () => (
  <Container boxShadow="dark-lg" p={6} maxWidth="420px">
    <form action="submit">
      <Stack spacing={3}>
        <Box pb={6}>
          <Text fontSize="2em" fontWeight="bold" p={4}>
            Letryx
          </Text>
          <Text>Contract analytics reimagined</Text>
        </Box>
        <HStack>
          <TextInput type="name" name="fname" placeholder="First name">
            <InfoIcon />
          </TextInput>
          <TextInput type="name" name="lname" placeholder="Last name">
            <InfoIcon />
          </TextInput>
        </HStack>
        <TextInput type="company" name="company" placeholder="Company / Firm">
          <MdWork />
        </TextInput>
        <TextInput type="email" name="email" placeholder="Email">
          <AtSignIcon />
        </TextInput>
        <Button
          type="submit"
          boxShadow="sm"
          fontWeight={600}
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Sign up for product updates
        </Button>
        <FormControl>
          <FormHelperText mt={-1}>
            We will never share your email.
          </FormHelperText>
        </FormControl>
      </Stack>
    </form>
  </Container>
);

export { SubscribeForm };
