import { Heading, HeadingProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Logo: FC<HeadingProps> = (props) => (
  <Heading size="lg" {...props}>
    Letryx
  </Heading>
);
