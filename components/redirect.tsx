import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

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
