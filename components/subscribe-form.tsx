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
  InputProps,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
import { MdWork } from 'react-icons/md';
import jsonp from 'jsonp';
import { stringify } from 'query-string';
import { AtSignIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Dispatch,
  FormEventHandler,
  FunctionComponent,
  SetStateAction,
  useState,
} from 'react';

const mailchimpUrl =
  '//letryx.us7.list-manage.com/subscribe/post-json?u=bd1800853f530244c7f62d1ab&id=201d6086a7&';

const TextInput: FunctionComponent<
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

const SubscribeForm: FunctionComponent = () => {
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [status, setStatus] = useState<'unsubmitted' | 'error' | 'success'>(
    'unsubmitted'
  );
  const [statusMessage, setStatusMessage] = useState<string>('');

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
              <InfoIcon />
            </TextInput>
            <TextInput
              type="name"
              name="lname"
              value={lname}
              setValue={setLname}
              placeholder="Last name"
            >
              <InfoIcon />
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
            fontWeight={600}
            disabled={isPosting}
            _hover={{ boxShadow: 'md' }}
            _active={{ boxShadow: 'lg' }}
          >
            Sign up for product updates
          </Button>
          <FormControl hidden={status !== 'unsubmitted'}>
            <FormHelperText mt={-1}>
              We will never share your email.
            </FormHelperText>
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
