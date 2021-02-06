import { AtSignIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import jsonp from 'jsonp';
import { stringify } from 'query-string';
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { MdPerson, MdWork } from 'react-icons/md';

const mailchimpUrl =
  '//letryx.us7.list-manage.com/subscribe/post-json?u=bd1800853f530244c7f62d1ab&id=201d6086a7&';

const TextInput: FC<
  InputProps & { setValue: Dispatch<SetStateAction<string>> }
> = ({ placeholder, children, setValue, ...props }) => (
  <FormControl isRequired>
    <InputGroup>
      <InputLeftElement>{children}</InputLeftElement>
      <Input
        placeholder={placeholder}
        aria-label={placeholder}
        _placeholder={{ color: useColorModeValue('gray.600', 'gray.200') }}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </InputGroup>
  </FormControl>
);

const SubscribeForm: FC = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [status, setStatus] = useState<'unsubmitted' | 'error' | 'success'>(
    'unsubmitted'
  );
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    const qs = stringify({
      FNAME: fname,
      LNAME: lname,
      COMPANY: company,
      EMAIL: email,
    });
    setIsPosting(true);
    jsonp(
      [mailchimpUrl, qs].join('&'),
      { param: 'c' },
      (err, data: { result: string; msg: string }) => {
        if (err) {
          setStatus('error');
          setStatusMessage(`Failed to add to list: ${err.toString()}`);
        } else if (
          data.result === 'success' ||
          data.msg.includes('already subscribed')
        ) {
          setStatus('success');
          setStatusMessage('Thanks for subscribing!');
        } else {
          setStatus('error');
          setStatusMessage(data.msg);
        }
        setIsPosting(false);
      }
    );
  };

  return (
    <Container boxShadow="dark-lg" p={6} maxWidth="420px">
      <form onSubmit={onSubmit}>
        <Stack spacing={3}>
          <Box pb={6}>
            <Text fontSize="2em" fontWeight="bold" p={4}>
              Letryx
            </Text>
            <Text>Contract analytics reimagined</Text>
          </Box>
          <HStack>
            <TextInput
              type="name"
              name="fname"
              value={fname}
              setValue={setFname}
              placeholder="First name"
            >
              <MdPerson size={20} />
            </TextInput>
            <TextInput
              type="name"
              name="lname"
              value={lname}
              setValue={setLname}
              placeholder="Last name"
            >
              <MdPerson size={20} />
            </TextInput>
          </HStack>
          <TextInput
            type="company"
            name="company"
            value={company}
            setValue={setCompany}
            placeholder="Company / Firm"
          >
            <MdWork />
          </TextInput>
          <TextInput
            type="email"
            name="email"
            value={email}
            setValue={setEmail}
            placeholder="Email"
          >
            <AtSignIcon />
          </TextInput>
          <Button
            type="submit"
            boxShadow={isPosting ? 'lg' : 'sm'}
            fontWeight="600"
            disabled={isPosting}
            _hover={{ boxShadow: 'md' }}
            _active={{ boxShadow: 'lg' }}
          >
            Sign up for product updates
          </Button>
          <FormControl hidden={status !== 'unsubmitted'}>
            <FormHelperText>We will never share your email.</FormHelperText>
          </FormControl>
          <Alert
            status={status === 'success' ? 'success' : 'error'}
            fontSize="md"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            hidden={status === 'unsubmitted'}
          >
            <AlertIcon />
            <AlertDescription mt={-1}>{statusMessage}</AlertDescription>
          </Alert>
        </Stack>
      </form>
    </Container>
  );
};

export { SubscribeForm };
