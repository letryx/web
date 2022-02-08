import {useMemo} from 'react';
import {map, forEach} from 'lodash';
import {
  SecContractTypeFragment,
  useGetContractTypesQuery,
} from 'lib/generated/graphql/apollo-schema';

export type ContractTypeNames = {
  [key: number]: string;
};

export type ContractTypeHierarchy = {
  id: number;
  name: string;
  children?: ContractTypeHierarchy[];
};

function buildContractTypeHiearchy(ct: SecContractTypeFragment, fragmentsByParent: { [key: number]: SecContractTypeFragment[] | undefined }): ContractTypeHierarchy {
  const hierarchy: ContractTypeHierarchy = {
    id: ct.id,
    name: ct.name,
  };
  const children = fragmentsByParent[ct.id];
  if (children) {
    hierarchy.children = map(children, child => buildContractTypeHiearchy(child, fragmentsByParent));
  }
  return hierarchy;
}

export function useContractTypes(): [ContractTypeNames, ContractTypeHierarchy[]] {
  const { data } = useGetContractTypesQuery();
  return useMemo(() => {
    const fragments: {
      [key: number]: SecContractTypeFragment | undefined;
    } = {};
    const fragmentsByParent: {
      [key: number]: SecContractTypeFragment[] | undefined;
    } = {};
    forEach(data?.sec_contract_type, ct => {
      fragments[ct.id] = ct;
      if (ct.parent_id) {
        if (!fragmentsByParent[ct.parent_id]) {
          fragmentsByParent[ct.parent_id] = [ct];
        } else {
          fragmentsByParent[ct.parent_id]?.push(ct);
        }
      }
    });

    const contractNames: ContractTypeNames = {};

    const hierarchy: ContractTypeHierarchy[] = [];
    forEach(fragments, ct => {
      if (ct) {
        contractNames[ct.id] = ct.name;
        if (!ct.parent_id) {
          hierarchy.push(buildContractTypeHiearchy(ct, fragmentsByParent));
        }
      }
    });
    return [contractNames, hierarchy];
  }, [data]);
}
