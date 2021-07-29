import type { NormalizedCacheObject } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import type React from 'react';
import * as Types from './apollo-schema';

export const GetSecContractsDocument = gql`
  query getSECContracts($limit: Int = 100, $offset: Int = 0) {
    data_sec_contracts(limit: $limit, offset: $offset) {
      accession_number
      sequence
      company_cik
      company_name
      company_geo
      description
      filing_metadata
      filing_type
      text
      contents
    }
  }
`;
export async function getServerPageGetSecContracts(
  options: Omit<
    Apollo.QueryOptions<Types.GetSecContractsQueryVariables>,
    'query'
  >,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.GetSecContractsQuery>({
    ...options,
    query: GetSecContractsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetSecContractsComp = React.FC<{
  data?: Types.GetSecContractsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetSecContracts =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetSecContractsQuery,
      Types.GetSecContractsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetSecContractsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(GetSecContractsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetSecContracts = {
  getServerPage: getServerPageGetSecContracts,
  withPage: withPageGetSecContracts,
};
export const GetContractsDocument = gql`
  query GetContracts {
    data_sec_contracts(
      order_by: { accession_number: asc, sequence: asc }
      limit: 3
    ) {
      company_name
      accession_number
      sequence
      description
      filing_type
    }
  }
`;
export async function getServerPageGetContracts(
  options: Omit<Apollo.QueryOptions<Types.GetContractsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.GetContractsQuery>({
    ...options,
    query: GetContractsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetContractsComp = React.FC<{
  data?: Types.GetContractsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetContracts =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetContractsQuery,
      Types.GetContractsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetContractsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(GetContractsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetContracts = {
  getServerPage: getServerPageGetContracts,
  withPage: withPageGetContracts,
};
