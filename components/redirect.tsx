import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

interface RedirectProps {
  to: string;
  inPlace?: boolean;
}

const Redirect: FC<RedirectProps> = ({ to, inPlace = false }) => {
  const router = useRouter();
  useEffect(() => {
    inPlace ? router.replace(to) : router.push(to);
  });

  return <p>Redirecting to {to}...</p>;
};

export { Redirect };
