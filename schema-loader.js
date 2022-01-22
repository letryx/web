const { loadSchema } = require('@graphql-tools/load');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { gql } = require('graphql-tag');
/**
 * merges custom definitions into the schema defined by hasura
 */
module.exports = async (schemaString, config) => {
  const hasuraSchema = await loadSchema(schemaString, config);

  return mergeTypeDefs(
    [
      // overrides must come first!
      gql`
        # put your overrides here
        type sec_contract {
          accession_number: String!
          sequence: Int!
          company_name: String!
          company_cik: String!
          company_geo: String!
          company_sic: String!
          company_sic_name: String!
          filing_type: String!
          filing_header: String!
          filing_date: String!
          description: String!
          attachment_type: String!
          tsv_search_text: String!
          relevance: Float!
          contract_type: String!
          uid: String!
        }
      `,
      hasuraSchema,
    ],
    {
      ignoreFieldConflicts: true,
    }
  );
};
