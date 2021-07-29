import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "data.sec_companies" */
export type Data_Sec_Companies = {
  __typename?: 'data_sec_companies';
  cik: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  sec_filings: Array<Data_Sec_Filings>;
  /** An aggregate relationship */
  sec_filings_aggregate: Data_Sec_Filings_Aggregate;
  sic: Scalars['String'];
  sic_name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "data.sec_companies" */
export type Data_Sec_CompaniesSec_FilingsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filings_Order_By>>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

/** columns and relationships of "data.sec_companies" */
export type Data_Sec_CompaniesSec_Filings_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filings_Order_By>>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

/** aggregated selection of "data.sec_companies" */
export type Data_Sec_Companies_Aggregate = {
  __typename?: 'data_sec_companies_aggregate';
  aggregate?: Maybe<Data_Sec_Companies_Aggregate_Fields>;
  nodes: Array<Data_Sec_Companies>;
};

/** aggregate fields of "data.sec_companies" */
export type Data_Sec_Companies_Aggregate_Fields = {
  __typename?: 'data_sec_companies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Data_Sec_Companies_Max_Fields>;
  min?: Maybe<Data_Sec_Companies_Min_Fields>;
};

/** aggregate fields of "data.sec_companies" */
export type Data_Sec_Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Data_Sec_Companies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "data.sec_companies". All fields are combined with a logical 'AND'. */
export type Data_Sec_Companies_Bool_Exp = {
  _and?: Maybe<Array<Data_Sec_Companies_Bool_Exp>>;
  _not?: Maybe<Data_Sec_Companies_Bool_Exp>;
  _or?: Maybe<Array<Data_Sec_Companies_Bool_Exp>>;
  cik?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  geo?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sec_filings?: Maybe<Data_Sec_Filings_Bool_Exp>;
  sic?: Maybe<String_Comparison_Exp>;
  sic_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "data.sec_companies" */
export enum Data_Sec_Companies_Constraint {
  /** unique or primary key constraint */
  SecCompaniesPkey = 'sec_companies_pkey',
}

/** input type for inserting data into table "data.sec_companies" */
export type Data_Sec_Companies_Insert_Input = {
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sec_filings?: Maybe<Data_Sec_Filings_Arr_Rel_Insert_Input>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Data_Sec_Companies_Max_Fields = {
  __typename?: 'data_sec_companies_max_fields';
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Data_Sec_Companies_Min_Fields = {
  __typename?: 'data_sec_companies_min_fields';
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "data.sec_companies" */
export type Data_Sec_Companies_Mutation_Response = {
  __typename?: 'data_sec_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Sec_Companies>;
};

/** input type for inserting object relation for remote table "data.sec_companies" */
export type Data_Sec_Companies_Obj_Rel_Insert_Input = {
  data: Data_Sec_Companies_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Data_Sec_Companies_On_Conflict>;
};

/** on conflict condition type for table "data.sec_companies" */
export type Data_Sec_Companies_On_Conflict = {
  constraint: Data_Sec_Companies_Constraint;
  update_columns?: Array<Data_Sec_Companies_Update_Column>;
  where?: Maybe<Data_Sec_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "data.sec_companies". */
export type Data_Sec_Companies_Order_By = {
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geo?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sec_filings_aggregate?: Maybe<Data_Sec_Filings_Aggregate_Order_By>;
  sic?: Maybe<Order_By>;
  sic_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: data_sec_companies */
export type Data_Sec_Companies_Pk_Columns_Input = {
  cik: Scalars['String'];
};

/** select columns of table "data.sec_companies" */
export enum Data_Sec_Companies_Select_Column {
  /** column name */
  Cik = 'cik',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geo = 'geo',
  /** column name */
  Name = 'name',
  /** column name */
  Sic = 'sic',
  /** column name */
  SicName = 'sic_name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "data.sec_companies" */
export type Data_Sec_Companies_Set_Input = {
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "data.sec_companies" */
export enum Data_Sec_Companies_Update_Column {
  /** column name */
  Cik = 'cik',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geo = 'geo',
  /** column name */
  Name = 'name',
  /** column name */
  Sic = 'sic',
  /** column name */
  SicName = 'sic_name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "data.sec_contracts" */
export type Data_Sec_Contracts = {
  __typename?: 'data_sec_contracts';
  accession_number?: Maybe<Scalars['String']>;
  company_cik?: Maybe<Scalars['String']>;
  company_geo?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filing_metadata?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregated selection of "data.sec_contracts" */
export type Data_Sec_Contracts_Aggregate = {
  __typename?: 'data_sec_contracts_aggregate';
  aggregate?: Maybe<Data_Sec_Contracts_Aggregate_Fields>;
  nodes: Array<Data_Sec_Contracts>;
};

/** aggregate fields of "data.sec_contracts" */
export type Data_Sec_Contracts_Aggregate_Fields = {
  __typename?: 'data_sec_contracts_aggregate_fields';
  avg?: Maybe<Data_Sec_Contracts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Data_Sec_Contracts_Max_Fields>;
  min?: Maybe<Data_Sec_Contracts_Min_Fields>;
  stddev?: Maybe<Data_Sec_Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Data_Sec_Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Data_Sec_Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Data_Sec_Contracts_Sum_Fields>;
  var_pop?: Maybe<Data_Sec_Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Data_Sec_Contracts_Var_Samp_Fields>;
  variance?: Maybe<Data_Sec_Contracts_Variance_Fields>;
};

/** aggregate fields of "data.sec_contracts" */
export type Data_Sec_Contracts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Data_Sec_Contracts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Data_Sec_Contracts_Avg_Fields = {
  __typename?: 'data_sec_contracts_avg_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "data.sec_contracts". All fields are combined with a logical 'AND'. */
export type Data_Sec_Contracts_Bool_Exp = {
  _and?: Maybe<Array<Data_Sec_Contracts_Bool_Exp>>;
  _not?: Maybe<Data_Sec_Contracts_Bool_Exp>;
  _or?: Maybe<Array<Data_Sec_Contracts_Bool_Exp>>;
  accession_number?: Maybe<String_Comparison_Exp>;
  company_cik?: Maybe<String_Comparison_Exp>;
  company_geo?: Maybe<String_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  contents?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  filing_metadata?: Maybe<String_Comparison_Exp>;
  filing_type?: Maybe<String_Comparison_Exp>;
  sequence?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Data_Sec_Contracts_Max_Fields = {
  __typename?: 'data_sec_contracts_max_fields';
  accession_number?: Maybe<Scalars['String']>;
  company_cik?: Maybe<Scalars['String']>;
  company_geo?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filing_metadata?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Data_Sec_Contracts_Min_Fields = {
  __typename?: 'data_sec_contracts_min_fields';
  accession_number?: Maybe<Scalars['String']>;
  company_cik?: Maybe<Scalars['String']>;
  company_geo?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filing_metadata?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "data.sec_contracts". */
export type Data_Sec_Contracts_Order_By = {
  accession_number?: Maybe<Order_By>;
  company_cik?: Maybe<Order_By>;
  company_geo?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filing_metadata?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** select columns of table "data.sec_contracts" */
export enum Data_Sec_Contracts_Select_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  CompanyCik = 'company_cik',
  /** column name */
  CompanyGeo = 'company_geo',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  Contents = 'contents',
  /** column name */
  Description = 'description',
  /** column name */
  FilingMetadata = 'filing_metadata',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Text = 'text',
}

/** aggregate stddev on columns */
export type Data_Sec_Contracts_Stddev_Fields = {
  __typename?: 'data_sec_contracts_stddev_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Data_Sec_Contracts_Stddev_Pop_Fields = {
  __typename?: 'data_sec_contracts_stddev_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Data_Sec_Contracts_Stddev_Samp_Fields = {
  __typename?: 'data_sec_contracts_stddev_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Data_Sec_Contracts_Sum_Fields = {
  __typename?: 'data_sec_contracts_sum_fields';
  sequence?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Data_Sec_Contracts_Var_Pop_Fields = {
  __typename?: 'data_sec_contracts_var_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Data_Sec_Contracts_Var_Samp_Fields = {
  __typename?: 'data_sec_contracts_var_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Data_Sec_Contracts_Variance_Fields = {
  __typename?: 'data_sec_contracts_variance_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments = {
  __typename?: 'data_sec_filing_attachments';
  accession_number: Scalars['String'];
  contents: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  filing_type: Scalars['String'];
  /** An object relationship */
  sec_filing: Data_Sec_Filings;
  sequence: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Aggregate = {
  __typename?: 'data_sec_filing_attachments_aggregate';
  aggregate?: Maybe<Data_Sec_Filing_Attachments_Aggregate_Fields>;
  nodes: Array<Data_Sec_Filing_Attachments>;
};

/** aggregate fields of "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Aggregate_Fields = {
  __typename?: 'data_sec_filing_attachments_aggregate_fields';
  avg?: Maybe<Data_Sec_Filing_Attachments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Data_Sec_Filing_Attachments_Max_Fields>;
  min?: Maybe<Data_Sec_Filing_Attachments_Min_Fields>;
  stddev?: Maybe<Data_Sec_Filing_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Data_Sec_Filing_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Data_Sec_Filing_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Data_Sec_Filing_Attachments_Sum_Fields>;
  var_pop?: Maybe<Data_Sec_Filing_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Data_Sec_Filing_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Data_Sec_Filing_Attachments_Variance_Fields>;
};

/** aggregate fields of "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Aggregate_Order_By = {
  avg?: Maybe<Data_Sec_Filing_Attachments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Data_Sec_Filing_Attachments_Max_Order_By>;
  min?: Maybe<Data_Sec_Filing_Attachments_Min_Order_By>;
  stddev?: Maybe<Data_Sec_Filing_Attachments_Stddev_Order_By>;
  stddev_pop?: Maybe<Data_Sec_Filing_Attachments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Data_Sec_Filing_Attachments_Stddev_Samp_Order_By>;
  sum?: Maybe<Data_Sec_Filing_Attachments_Sum_Order_By>;
  var_pop?: Maybe<Data_Sec_Filing_Attachments_Var_Pop_Order_By>;
  var_samp?: Maybe<Data_Sec_Filing_Attachments_Var_Samp_Order_By>;
  variance?: Maybe<Data_Sec_Filing_Attachments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Data_Sec_Filing_Attachments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Data_Sec_Filing_Attachments_On_Conflict>;
};

/** aggregate avg on columns */
export type Data_Sec_Filing_Attachments_Avg_Fields = {
  __typename?: 'data_sec_filing_attachments_avg_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Avg_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "data.sec_filing_attachments". All fields are combined with a logical 'AND'. */
export type Data_Sec_Filing_Attachments_Bool_Exp = {
  _and?: Maybe<Array<Data_Sec_Filing_Attachments_Bool_Exp>>;
  _not?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
  _or?: Maybe<Array<Data_Sec_Filing_Attachments_Bool_Exp>>;
  accession_number?: Maybe<String_Comparison_Exp>;
  contents?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  filing_type?: Maybe<String_Comparison_Exp>;
  sec_filing?: Maybe<Data_Sec_Filings_Bool_Exp>;
  sequence?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "data.sec_filing_attachments" */
export enum Data_Sec_Filing_Attachments_Constraint {
  /** unique or primary key constraint */
  SecFilingAttachmentAccessionNumberSequenceKey = 'sec_filing_attachment_accession_number_sequence_key',
  /** unique or primary key constraint */
  SecFilingAttachmentPkey = 'sec_filing_attachment_pkey',
}

/** input type for incrementing numeric columns in table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Inc_Input = {
  sequence?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Insert_Input = {
  accession_number?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sec_filing?: Maybe<Data_Sec_Filings_Obj_Rel_Insert_Input>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Data_Sec_Filing_Attachments_Max_Fields = {
  __typename?: 'data_sec_filing_attachments_max_fields';
  accession_number?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Max_Order_By = {
  accession_number?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Data_Sec_Filing_Attachments_Min_Fields = {
  __typename?: 'data_sec_filing_attachments_min_fields';
  accession_number?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Min_Order_By = {
  accession_number?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Mutation_Response = {
  __typename?: 'data_sec_filing_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Sec_Filing_Attachments>;
};

/** on conflict condition type for table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_On_Conflict = {
  constraint: Data_Sec_Filing_Attachments_Constraint;
  update_columns?: Array<Data_Sec_Filing_Attachments_Update_Column>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "data.sec_filing_attachments". */
export type Data_Sec_Filing_Attachments_Order_By = {
  accession_number?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  sec_filing?: Maybe<Data_Sec_Filings_Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: data_sec_filing_attachments */
export type Data_Sec_Filing_Attachments_Pk_Columns_Input = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

/** select columns of table "data.sec_filing_attachments" */
export enum Data_Sec_Filing_Attachments_Select_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Filename = 'filename',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Set_Input = {
  accession_number?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Data_Sec_Filing_Attachments_Stddev_Fields = {
  __typename?: 'data_sec_filing_attachments_stddev_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Stddev_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Data_Sec_Filing_Attachments_Stddev_Pop_Fields = {
  __typename?: 'data_sec_filing_attachments_stddev_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Stddev_Pop_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Data_Sec_Filing_Attachments_Stddev_Samp_Fields = {
  __typename?: 'data_sec_filing_attachments_stddev_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Stddev_Samp_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Data_Sec_Filing_Attachments_Sum_Fields = {
  __typename?: 'data_sec_filing_attachments_sum_fields';
  sequence?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Sum_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** update columns of table "data.sec_filing_attachments" */
export enum Data_Sec_Filing_Attachments_Update_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Filename = 'filename',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Data_Sec_Filing_Attachments_Var_Pop_Fields = {
  __typename?: 'data_sec_filing_attachments_var_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Var_Pop_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Data_Sec_Filing_Attachments_Var_Samp_Fields = {
  __typename?: 'data_sec_filing_attachments_var_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Var_Samp_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Data_Sec_Filing_Attachments_Variance_Fields = {
  __typename?: 'data_sec_filing_attachments_variance_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "data.sec_filing_attachments" */
export type Data_Sec_Filing_Attachments_Variance_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** columns and relationships of "data.sec_filings" */
export type Data_Sec_Filings = {
  __typename?: 'data_sec_filings';
  accession_number: Scalars['String'];
  cik: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_type: Scalars['String'];
  header?: Maybe<Scalars['String']>;
  /** An object relationship */
  sec_company: Data_Sec_Companies;
  /** An array relationship */
  sec_filing_attachments: Array<Data_Sec_Filing_Attachments>;
  /** An aggregate relationship */
  sec_filing_attachments_aggregate: Data_Sec_Filing_Attachments_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "data.sec_filings" */
export type Data_Sec_FilingsSec_Filing_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filing_Attachments_Order_By>>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

/** columns and relationships of "data.sec_filings" */
export type Data_Sec_FilingsSec_Filing_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filing_Attachments_Order_By>>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

/** aggregated selection of "data.sec_filings" */
export type Data_Sec_Filings_Aggregate = {
  __typename?: 'data_sec_filings_aggregate';
  aggregate?: Maybe<Data_Sec_Filings_Aggregate_Fields>;
  nodes: Array<Data_Sec_Filings>;
};

/** aggregate fields of "data.sec_filings" */
export type Data_Sec_Filings_Aggregate_Fields = {
  __typename?: 'data_sec_filings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Data_Sec_Filings_Max_Fields>;
  min?: Maybe<Data_Sec_Filings_Min_Fields>;
};

/** aggregate fields of "data.sec_filings" */
export type Data_Sec_Filings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "data.sec_filings" */
export type Data_Sec_Filings_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Data_Sec_Filings_Max_Order_By>;
  min?: Maybe<Data_Sec_Filings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "data.sec_filings" */
export type Data_Sec_Filings_Arr_Rel_Insert_Input = {
  data: Array<Data_Sec_Filings_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Data_Sec_Filings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "data.sec_filings". All fields are combined with a logical 'AND'. */
export type Data_Sec_Filings_Bool_Exp = {
  _and?: Maybe<Array<Data_Sec_Filings_Bool_Exp>>;
  _not?: Maybe<Data_Sec_Filings_Bool_Exp>;
  _or?: Maybe<Array<Data_Sec_Filings_Bool_Exp>>;
  accession_number?: Maybe<String_Comparison_Exp>;
  cik?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  filing_type?: Maybe<String_Comparison_Exp>;
  header?: Maybe<String_Comparison_Exp>;
  sec_company?: Maybe<Data_Sec_Companies_Bool_Exp>;
  sec_filing_attachments?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "data.sec_filings" */
export enum Data_Sec_Filings_Constraint {
  /** unique or primary key constraint */
  SecFilingPkey = 'sec_filing_pkey',
}

/** input type for inserting data into table "data.sec_filings" */
export type Data_Sec_Filings_Insert_Input = {
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  sec_company?: Maybe<Data_Sec_Companies_Obj_Rel_Insert_Input>;
  sec_filing_attachments?: Maybe<Data_Sec_Filing_Attachments_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Data_Sec_Filings_Max_Fields = {
  __typename?: 'data_sec_filings_max_fields';
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "data.sec_filings" */
export type Data_Sec_Filings_Max_Order_By = {
  accession_number?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Data_Sec_Filings_Min_Fields = {
  __typename?: 'data_sec_filings_min_fields';
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "data.sec_filings" */
export type Data_Sec_Filings_Min_Order_By = {
  accession_number?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "data.sec_filings" */
export type Data_Sec_Filings_Mutation_Response = {
  __typename?: 'data_sec_filings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Data_Sec_Filings>;
};

/** input type for inserting object relation for remote table "data.sec_filings" */
export type Data_Sec_Filings_Obj_Rel_Insert_Input = {
  data: Data_Sec_Filings_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Data_Sec_Filings_On_Conflict>;
};

/** on conflict condition type for table "data.sec_filings" */
export type Data_Sec_Filings_On_Conflict = {
  constraint: Data_Sec_Filings_Constraint;
  update_columns?: Array<Data_Sec_Filings_Update_Column>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

/** Ordering options when selecting data from "data.sec_filings". */
export type Data_Sec_Filings_Order_By = {
  accession_number?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  sec_company?: Maybe<Data_Sec_Companies_Order_By>;
  sec_filing_attachments_aggregate?: Maybe<Data_Sec_Filing_Attachments_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: data_sec_filings */
export type Data_Sec_Filings_Pk_Columns_Input = {
  accession_number: Scalars['String'];
};

/** select columns of table "data.sec_filings" */
export enum Data_Sec_Filings_Select_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  Cik = 'cik',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Header = 'header',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "data.sec_filings" */
export type Data_Sec_Filings_Set_Input = {
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "data.sec_filings" */
export enum Data_Sec_Filings_Update_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  Cik = 'cik',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Header = 'header',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "migrations" */
export type Migrations = {
  __typename?: 'migrations';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "migrations" */
export type Migrations_Aggregate = {
  __typename?: 'migrations_aggregate';
  aggregate?: Maybe<Migrations_Aggregate_Fields>;
  nodes: Array<Migrations>;
};

/** aggregate fields of "migrations" */
export type Migrations_Aggregate_Fields = {
  __typename?: 'migrations_aggregate_fields';
  avg?: Maybe<Migrations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Migrations_Max_Fields>;
  min?: Maybe<Migrations_Min_Fields>;
  stddev?: Maybe<Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Migrations_Sum_Fields>;
  var_pop?: Maybe<Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Migrations_Var_Samp_Fields>;
  variance?: Maybe<Migrations_Variance_Fields>;
};

/** aggregate fields of "migrations" */
export type Migrations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Migrations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Migrations_Avg_Fields = {
  __typename?: 'migrations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "migrations". All fields are combined with a logical 'AND'. */
export type Migrations_Bool_Exp = {
  _and?: Maybe<Array<Migrations_Bool_Exp>>;
  _not?: Maybe<Migrations_Bool_Exp>;
  _or?: Maybe<Array<Migrations_Bool_Exp>>;
  executed_at?: Maybe<Timestamp_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "migrations" */
export enum Migrations_Constraint {
  /** unique or primary key constraint */
  MigrationsNameKey = 'migrations_name_key',
  /** unique or primary key constraint */
  MigrationsPkey = 'migrations_pkey',
}

/** input type for incrementing numeric columns in table "migrations" */
export type Migrations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "migrations" */
export type Migrations_Insert_Input = {
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Migrations_Max_Fields = {
  __typename?: 'migrations_max_fields';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Migrations_Min_Fields = {
  __typename?: 'migrations_min_fields';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "migrations" */
export type Migrations_Mutation_Response = {
  __typename?: 'migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Migrations>;
};

/** on conflict condition type for table "migrations" */
export type Migrations_On_Conflict = {
  constraint: Migrations_Constraint;
  update_columns?: Array<Migrations_Update_Column>;
  where?: Maybe<Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "migrations". */
export type Migrations_Order_By = {
  executed_at?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: migrations */
export type Migrations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "migrations" */
export enum Migrations_Select_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "migrations" */
export type Migrations_Set_Input = {
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Migrations_Stddev_Fields = {
  __typename?: 'migrations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Migrations_Stddev_Pop_Fields = {
  __typename?: 'migrations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Migrations_Stddev_Samp_Fields = {
  __typename?: 'migrations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Migrations_Sum_Fields = {
  __typename?: 'migrations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "migrations" */
export enum Migrations_Update_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Migrations_Var_Pop_Fields = {
  __typename?: 'migrations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Migrations_Var_Samp_Fields = {
  __typename?: 'migrations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Migrations_Variance_Fields = {
  __typename?: 'migrations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "data.sec_companies" */
  delete_data_sec_companies?: Maybe<Data_Sec_Companies_Mutation_Response>;
  /** delete single row from the table: "data.sec_companies" */
  delete_data_sec_companies_by_pk?: Maybe<Data_Sec_Companies>;
  /** delete data from the table: "data.sec_filing_attachments" */
  delete_data_sec_filing_attachments?: Maybe<Data_Sec_Filing_Attachments_Mutation_Response>;
  /** delete single row from the table: "data.sec_filing_attachments" */
  delete_data_sec_filing_attachments_by_pk?: Maybe<Data_Sec_Filing_Attachments>;
  /** delete data from the table: "data.sec_filings" */
  delete_data_sec_filings?: Maybe<Data_Sec_Filings_Mutation_Response>;
  /** delete single row from the table: "data.sec_filings" */
  delete_data_sec_filings_by_pk?: Maybe<Data_Sec_Filings>;
  /** delete data from the table: "migrations" */
  delete_migrations?: Maybe<Migrations_Mutation_Response>;
  /** delete single row from the table: "migrations" */
  delete_migrations_by_pk?: Maybe<Migrations>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "data.sec_companies" */
  insert_data_sec_companies?: Maybe<Data_Sec_Companies_Mutation_Response>;
  /** insert a single row into the table: "data.sec_companies" */
  insert_data_sec_companies_one?: Maybe<Data_Sec_Companies>;
  /** insert data into the table: "data.sec_filing_attachments" */
  insert_data_sec_filing_attachments?: Maybe<Data_Sec_Filing_Attachments_Mutation_Response>;
  /** insert a single row into the table: "data.sec_filing_attachments" */
  insert_data_sec_filing_attachments_one?: Maybe<Data_Sec_Filing_Attachments>;
  /** insert data into the table: "data.sec_filings" */
  insert_data_sec_filings?: Maybe<Data_Sec_Filings_Mutation_Response>;
  /** insert a single row into the table: "data.sec_filings" */
  insert_data_sec_filings_one?: Maybe<Data_Sec_Filings>;
  /** insert data into the table: "migrations" */
  insert_migrations?: Maybe<Migrations_Mutation_Response>;
  /** insert a single row into the table: "migrations" */
  insert_migrations_one?: Maybe<Migrations>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "data.sec_companies" */
  update_data_sec_companies?: Maybe<Data_Sec_Companies_Mutation_Response>;
  /** update single row of the table: "data.sec_companies" */
  update_data_sec_companies_by_pk?: Maybe<Data_Sec_Companies>;
  /** update data of the table: "data.sec_filing_attachments" */
  update_data_sec_filing_attachments?: Maybe<Data_Sec_Filing_Attachments_Mutation_Response>;
  /** update single row of the table: "data.sec_filing_attachments" */
  update_data_sec_filing_attachments_by_pk?: Maybe<Data_Sec_Filing_Attachments>;
  /** update data of the table: "data.sec_filings" */
  update_data_sec_filings?: Maybe<Data_Sec_Filings_Mutation_Response>;
  /** update single row of the table: "data.sec_filings" */
  update_data_sec_filings_by_pk?: Maybe<Data_Sec_Filings>;
  /** update data of the table: "migrations" */
  update_migrations?: Maybe<Migrations_Mutation_Response>;
  /** update single row of the table: "migrations" */
  update_migrations_by_pk?: Maybe<Migrations>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_Data_Sec_CompaniesArgs = {
  where: Data_Sec_Companies_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Data_Sec_Companies_By_PkArgs = {
  cik: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Data_Sec_Filing_AttachmentsArgs = {
  where: Data_Sec_Filing_Attachments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Data_Sec_Filing_Attachments_By_PkArgs = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Data_Sec_FilingsArgs = {
  where: Data_Sec_Filings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Data_Sec_Filings_By_PkArgs = {
  accession_number: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_MigrationsArgs = {
  where: Migrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootInsert_Data_Sec_CompaniesArgs = {
  objects: Array<Data_Sec_Companies_Insert_Input>;
  on_conflict?: Maybe<Data_Sec_Companies_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Data_Sec_Companies_OneArgs = {
  object: Data_Sec_Companies_Insert_Input;
  on_conflict?: Maybe<Data_Sec_Companies_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Data_Sec_Filing_AttachmentsArgs = {
  objects: Array<Data_Sec_Filing_Attachments_Insert_Input>;
  on_conflict?: Maybe<Data_Sec_Filing_Attachments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Data_Sec_Filing_Attachments_OneArgs = {
  object: Data_Sec_Filing_Attachments_Insert_Input;
  on_conflict?: Maybe<Data_Sec_Filing_Attachments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Data_Sec_FilingsArgs = {
  objects: Array<Data_Sec_Filings_Insert_Input>;
  on_conflict?: Maybe<Data_Sec_Filings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Data_Sec_Filings_OneArgs = {
  object: Data_Sec_Filings_Insert_Input;
  on_conflict?: Maybe<Data_Sec_Filings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MigrationsArgs = {
  objects: Array<Migrations_Insert_Input>;
  on_conflict?: Maybe<Migrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Migrations_OneArgs = {
  object: Migrations_Insert_Input;
  on_conflict?: Maybe<Migrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Data_Sec_CompaniesArgs = {
  _set?: Maybe<Data_Sec_Companies_Set_Input>;
  where: Data_Sec_Companies_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Data_Sec_Companies_By_PkArgs = {
  _set?: Maybe<Data_Sec_Companies_Set_Input>;
  pk_columns: Data_Sec_Companies_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Data_Sec_Filing_AttachmentsArgs = {
  _inc?: Maybe<Data_Sec_Filing_Attachments_Inc_Input>;
  _set?: Maybe<Data_Sec_Filing_Attachments_Set_Input>;
  where: Data_Sec_Filing_Attachments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Data_Sec_Filing_Attachments_By_PkArgs = {
  _inc?: Maybe<Data_Sec_Filing_Attachments_Inc_Input>;
  _set?: Maybe<Data_Sec_Filing_Attachments_Set_Input>;
  pk_columns: Data_Sec_Filing_Attachments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Data_Sec_FilingsArgs = {
  _set?: Maybe<Data_Sec_Filings_Set_Input>;
  where: Data_Sec_Filings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Data_Sec_Filings_By_PkArgs = {
  _set?: Maybe<Data_Sec_Filings_Set_Input>;
  pk_columns: Data_Sec_Filings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MigrationsArgs = {
  _inc?: Maybe<Migrations_Inc_Input>;
  _set?: Maybe<Migrations_Set_Input>;
  where: Migrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Migrations_By_PkArgs = {
  _inc?: Maybe<Migrations_Inc_Input>;
  _set?: Maybe<Migrations_Set_Input>;
  pk_columns: Migrations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "data.sec_companies" */
  data_sec_companies: Array<Data_Sec_Companies>;
  /** fetch aggregated fields from the table: "data.sec_companies" */
  data_sec_companies_aggregate: Data_Sec_Companies_Aggregate;
  /** fetch data from the table: "data.sec_companies" using primary key columns */
  data_sec_companies_by_pk?: Maybe<Data_Sec_Companies>;
  /** fetch data from the table: "data.sec_contracts" */
  data_sec_contracts: Array<Data_Sec_Contracts>;
  /** fetch aggregated fields from the table: "data.sec_contracts" */
  data_sec_contracts_aggregate: Data_Sec_Contracts_Aggregate;
  /** fetch data from the table: "data.sec_filing_attachments" */
  data_sec_filing_attachments: Array<Data_Sec_Filing_Attachments>;
  /** fetch aggregated fields from the table: "data.sec_filing_attachments" */
  data_sec_filing_attachments_aggregate: Data_Sec_Filing_Attachments_Aggregate;
  /** fetch data from the table: "data.sec_filing_attachments" using primary key columns */
  data_sec_filing_attachments_by_pk?: Maybe<Data_Sec_Filing_Attachments>;
  /** fetch data from the table: "data.sec_filings" */
  data_sec_filings: Array<Data_Sec_Filings>;
  /** fetch aggregated fields from the table: "data.sec_filings" */
  data_sec_filings_aggregate: Data_Sec_Filings_Aggregate;
  /** fetch data from the table: "data.sec_filings" using primary key columns */
  data_sec_filings_by_pk?: Maybe<Data_Sec_Filings>;
  /** fetch data from the table: "migrations" */
  migrations: Array<Migrations>;
  /** fetch aggregated fields from the table: "migrations" */
  migrations_aggregate: Migrations_Aggregate;
  /** fetch data from the table: "migrations" using primary key columns */
  migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootData_Sec_CompaniesArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Companies_Order_By>>;
  where?: Maybe<Data_Sec_Companies_Bool_Exp>;
};

export type Query_RootData_Sec_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Companies_Order_By>>;
  where?: Maybe<Data_Sec_Companies_Bool_Exp>;
};

export type Query_RootData_Sec_Companies_By_PkArgs = {
  cik: Scalars['String'];
};

export type Query_RootData_Sec_ContractsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Contracts_Order_By>>;
  where?: Maybe<Data_Sec_Contracts_Bool_Exp>;
};

export type Query_RootData_Sec_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Contracts_Order_By>>;
  where?: Maybe<Data_Sec_Contracts_Bool_Exp>;
};

export type Query_RootData_Sec_Filing_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filing_Attachments_Order_By>>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

export type Query_RootData_Sec_Filing_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filing_Attachments_Order_By>>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

export type Query_RootData_Sec_Filing_Attachments_By_PkArgs = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

export type Query_RootData_Sec_FilingsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filings_Order_By>>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

export type Query_RootData_Sec_Filings_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filings_Order_By>>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

export type Query_RootData_Sec_Filings_By_PkArgs = {
  accession_number: Scalars['String'];
};

export type Query_RootMigrationsArgs = {
  distinct_on?: Maybe<Array<Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migrations_Order_By>>;
  where?: Maybe<Migrations_Bool_Exp>;
};

export type Query_RootMigrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migrations_Order_By>>;
  where?: Maybe<Migrations_Bool_Exp>;
};

export type Query_RootMigrations_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "data.sec_companies" */
  data_sec_companies: Array<Data_Sec_Companies>;
  /** fetch aggregated fields from the table: "data.sec_companies" */
  data_sec_companies_aggregate: Data_Sec_Companies_Aggregate;
  /** fetch data from the table: "data.sec_companies" using primary key columns */
  data_sec_companies_by_pk?: Maybe<Data_Sec_Companies>;
  /** fetch data from the table: "data.sec_contracts" */
  data_sec_contracts: Array<Data_Sec_Contracts>;
  /** fetch aggregated fields from the table: "data.sec_contracts" */
  data_sec_contracts_aggregate: Data_Sec_Contracts_Aggregate;
  /** fetch data from the table: "data.sec_filing_attachments" */
  data_sec_filing_attachments: Array<Data_Sec_Filing_Attachments>;
  /** fetch aggregated fields from the table: "data.sec_filing_attachments" */
  data_sec_filing_attachments_aggregate: Data_Sec_Filing_Attachments_Aggregate;
  /** fetch data from the table: "data.sec_filing_attachments" using primary key columns */
  data_sec_filing_attachments_by_pk?: Maybe<Data_Sec_Filing_Attachments>;
  /** fetch data from the table: "data.sec_filings" */
  data_sec_filings: Array<Data_Sec_Filings>;
  /** fetch aggregated fields from the table: "data.sec_filings" */
  data_sec_filings_aggregate: Data_Sec_Filings_Aggregate;
  /** fetch data from the table: "data.sec_filings" using primary key columns */
  data_sec_filings_by_pk?: Maybe<Data_Sec_Filings>;
  /** fetch data from the table: "migrations" */
  migrations: Array<Migrations>;
  /** fetch aggregated fields from the table: "migrations" */
  migrations_aggregate: Migrations_Aggregate;
  /** fetch data from the table: "migrations" using primary key columns */
  migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Subscription_RootData_Sec_CompaniesArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Companies_Order_By>>;
  where?: Maybe<Data_Sec_Companies_Bool_Exp>;
};

export type Subscription_RootData_Sec_Companies_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Companies_Order_By>>;
  where?: Maybe<Data_Sec_Companies_Bool_Exp>;
};

export type Subscription_RootData_Sec_Companies_By_PkArgs = {
  cik: Scalars['String'];
};

export type Subscription_RootData_Sec_ContractsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Contracts_Order_By>>;
  where?: Maybe<Data_Sec_Contracts_Bool_Exp>;
};

export type Subscription_RootData_Sec_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Contracts_Order_By>>;
  where?: Maybe<Data_Sec_Contracts_Bool_Exp>;
};

export type Subscription_RootData_Sec_Filing_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filing_Attachments_Order_By>>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

export type Subscription_RootData_Sec_Filing_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filing_Attachments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filing_Attachments_Order_By>>;
  where?: Maybe<Data_Sec_Filing_Attachments_Bool_Exp>;
};

export type Subscription_RootData_Sec_Filing_Attachments_By_PkArgs = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

export type Subscription_RootData_Sec_FilingsArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filings_Order_By>>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

export type Subscription_RootData_Sec_Filings_AggregateArgs = {
  distinct_on?: Maybe<Array<Data_Sec_Filings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Data_Sec_Filings_Order_By>>;
  where?: Maybe<Data_Sec_Filings_Bool_Exp>;
};

export type Subscription_RootData_Sec_Filings_By_PkArgs = {
  accession_number: Scalars['String'];
};

export type Subscription_RootMigrationsArgs = {
  distinct_on?: Maybe<Array<Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migrations_Order_By>>;
  where?: Maybe<Migrations_Bool_Exp>;
};

export type Subscription_RootMigrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Migrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migrations_Order_By>>;
  where?: Maybe<Migrations_Bool_Exp>;
};

export type Subscription_RootMigrations_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  family_name?: Maybe<String_Comparison_Exp>;
  given_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  nickname?: Maybe<String_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type GetSecContractsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type GetSecContractsQuery = { __typename?: 'query_root' } & {
  data_sec_contracts: Array<
    { __typename?: 'data_sec_contracts' } & Pick<
      Data_Sec_Contracts,
      | 'accession_number'
      | 'sequence'
      | 'company_cik'
      | 'company_name'
      | 'company_geo'
      | 'description'
      | 'filing_metadata'
      | 'filing_type'
      | 'text'
      | 'contents'
    >
  >;
};

export type GetContractsQueryVariables = Exact<{ [key: string]: never }>;

export type GetContractsQuery = { __typename?: 'query_root' } & {
  data_sec_contracts: Array<
    { __typename?: 'data_sec_contracts' } & Pick<
      Data_Sec_Contracts,
      | 'company_name'
      | 'accession_number'
      | 'sequence'
      | 'description'
      | 'filing_type'
    >
  >;
};

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

/**
 * __useGetSecContractsQuery__
 *
 * To run a query within a React component, call `useGetSecContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSecContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecContractsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetSecContractsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSecContractsQuery,
    GetSecContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSecContractsQuery, GetSecContractsQueryVariables>(
    GetSecContractsDocument,
    options
  );
}
export function useGetSecContractsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSecContractsQuery,
    GetSecContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSecContractsQuery,
    GetSecContractsQueryVariables
  >(GetSecContractsDocument, options);
}
export type GetSecContractsQueryHookResult = ReturnType<
  typeof useGetSecContractsQuery
>;
export type GetSecContractsLazyQueryHookResult = ReturnType<
  typeof useGetSecContractsLazyQuery
>;
export type GetSecContractsQueryResult = Apollo.QueryResult<
  GetSecContractsQuery,
  GetSecContractsQueryVariables
>;
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

/**
 * __useGetContractsQuery__
 *
 * To run a query within a React component, call `useGetContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContractsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetContractsQuery,
    GetContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContractsQuery, GetContractsQueryVariables>(
    GetContractsDocument,
    options
  );
}
export function useGetContractsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContractsQuery,
    GetContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetContractsQuery, GetContractsQueryVariables>(
    GetContractsDocument,
    options
  );
}
export type GetContractsQueryHookResult = ReturnType<
  typeof useGetContractsQuery
>;
export type GetContractsLazyQueryHookResult = ReturnType<
  typeof useGetContractsLazyQuery
>;
export type GetContractsQueryResult = Apollo.QueryResult<
  GetContractsQuery,
  GetContractsQueryVariables
>;

export type PossibleTypesResultData = {
  possibleTypes: {};
};
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
