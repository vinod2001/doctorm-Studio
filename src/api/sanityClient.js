import { useMemo } from 'react'
import { useClient } from 'sanity';
import config from '../../config/config';

const { sanity } = config;

export function useSanityClient() {
  const client = useClient()
  return useMemo(() => client.withConfig({
    ...sanity,
    useCdn: false
  }), [client])
}
