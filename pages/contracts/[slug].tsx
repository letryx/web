import { base58 } from '@scure/base';
import { ContractContent } from 'components/contract/content';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export default function Contract() {
  const router = useRouter();
  const { slug } = router.query;
  const parsed = useMemo(() => {
    if (!slug || typeof slug !== 'string') {
      return undefined;
    }
    const encoding = Buffer.from(base58.decode(slug)).toString('utf8');
    if (encoding.indexOf('*') === -1) {
      return undefined;
    }
    const [accession_number, sequence, company_cik] = encoding.split('*');
    return {
      accession_number,
      sequence: parseInt(sequence, 10),
      company_cik,
    };
  }, [slug]);

  const onClose = useCallback(async () => {
    await router.replace('/contracts');
  }, [router]);

  return <ContractContent contract={parsed} isOpen onClose={onClose} />;
}
