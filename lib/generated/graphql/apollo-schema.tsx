import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: Date;
  timestamp: Date;
  timestamptz: Date;
  tsvector: String;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
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

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

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
  /** delete data from the table: "migrations" */
  delete_migrations?: Maybe<Migrations_Mutation_Response>;
  /** delete single row from the table: "migrations" */
  delete_migrations_by_pk?: Maybe<Migrations>;
  /** delete data from the table: "org" */
  delete_org?: Maybe<Org_Mutation_Response>;
  /** delete single row from the table: "org" */
  delete_org_by_pk?: Maybe<Org>;
  /** delete data from the table: "org_type" */
  delete_org_type?: Maybe<Org_Type_Mutation_Response>;
  /** delete single row from the table: "org_type" */
  delete_org_type_by_pk?: Maybe<Org_Type>;
  /** delete data from the table: "sec_company" */
  delete_sec_company?: Maybe<Sec_Company_Mutation_Response>;
  /** delete single row from the table: "sec_company" */
  delete_sec_company_by_pk?: Maybe<Sec_Company>;
  /** delete data from the table: "sec_filing" */
  delete_sec_filing?: Maybe<Sec_Filing_Mutation_Response>;
  /** delete data from the table: "sec_filing_attachment" */
  delete_sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Mutation_Response>;
  /** delete single row from the table: "sec_filing_attachment" */
  delete_sec_filing_attachment_by_pk?: Maybe<Sec_Filing_Attachment>;
  /** delete single row from the table: "sec_filing" */
  delete_sec_filing_by_pk?: Maybe<Sec_Filing>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "migrations" */
  insert_migrations?: Maybe<Migrations_Mutation_Response>;
  /** insert a single row into the table: "migrations" */
  insert_migrations_one?: Maybe<Migrations>;
  /** insert data into the table: "org" */
  insert_org?: Maybe<Org_Mutation_Response>;
  /** insert a single row into the table: "org" */
  insert_org_one?: Maybe<Org>;
  /** insert data into the table: "org_type" */
  insert_org_type?: Maybe<Org_Type_Mutation_Response>;
  /** insert a single row into the table: "org_type" */
  insert_org_type_one?: Maybe<Org_Type>;
  /** insert data into the table: "sec_company" */
  insert_sec_company?: Maybe<Sec_Company_Mutation_Response>;
  /** insert a single row into the table: "sec_company" */
  insert_sec_company_one?: Maybe<Sec_Company>;
  /** insert data into the table: "sec_filing" */
  insert_sec_filing?: Maybe<Sec_Filing_Mutation_Response>;
  /** insert data into the table: "sec_filing_attachment" */
  insert_sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Mutation_Response>;
  /** insert a single row into the table: "sec_filing_attachment" */
  insert_sec_filing_attachment_one?: Maybe<Sec_Filing_Attachment>;
  /** insert a single row into the table: "sec_filing" */
  insert_sec_filing_one?: Maybe<Sec_Filing>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "migrations" */
  update_migrations?: Maybe<Migrations_Mutation_Response>;
  /** update single row of the table: "migrations" */
  update_migrations_by_pk?: Maybe<Migrations>;
  /** update data of the table: "org" */
  update_org?: Maybe<Org_Mutation_Response>;
  /** update single row of the table: "org" */
  update_org_by_pk?: Maybe<Org>;
  /** update data of the table: "org_type" */
  update_org_type?: Maybe<Org_Type_Mutation_Response>;
  /** update single row of the table: "org_type" */
  update_org_type_by_pk?: Maybe<Org_Type>;
  /** update data of the table: "sec_company" */
  update_sec_company?: Maybe<Sec_Company_Mutation_Response>;
  /** update single row of the table: "sec_company" */
  update_sec_company_by_pk?: Maybe<Sec_Company>;
  /** update data of the table: "sec_filing" */
  update_sec_filing?: Maybe<Sec_Filing_Mutation_Response>;
  /** update data of the table: "sec_filing_attachment" */
  update_sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Mutation_Response>;
  /** update single row of the table: "sec_filing_attachment" */
  update_sec_filing_attachment_by_pk?: Maybe<Sec_Filing_Attachment>;
  /** update single row of the table: "sec_filing" */
  update_sec_filing_by_pk?: Maybe<Sec_Filing>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
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
export type Mutation_RootDelete_OrgArgs = {
  where: Org_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Org_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Org_TypeArgs = {
  where: Org_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Org_Type_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Sec_CompanyArgs = {
  where: Sec_Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sec_Company_By_PkArgs = {
  cik: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Sec_FilingArgs = {
  where: Sec_Filing_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sec_Filing_AttachmentArgs = {
  where: Sec_Filing_Attachment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sec_Filing_Attachment_By_PkArgs = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Sec_Filing_By_PkArgs = {
  accession_number: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_OrgArgs = {
  objects: Array<Org_Insert_Input>;
  on_conflict?: Maybe<Org_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_OneArgs = {
  object: Org_Insert_Input;
  on_conflict?: Maybe<Org_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_TypeArgs = {
  objects: Array<Org_Type_Insert_Input>;
  on_conflict?: Maybe<Org_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_Type_OneArgs = {
  object: Org_Type_Insert_Input;
  on_conflict?: Maybe<Org_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sec_CompanyArgs = {
  objects: Array<Sec_Company_Insert_Input>;
  on_conflict?: Maybe<Sec_Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sec_Company_OneArgs = {
  object: Sec_Company_Insert_Input;
  on_conflict?: Maybe<Sec_Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sec_FilingArgs = {
  objects: Array<Sec_Filing_Insert_Input>;
  on_conflict?: Maybe<Sec_Filing_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sec_Filing_AttachmentArgs = {
  objects: Array<Sec_Filing_Attachment_Insert_Input>;
  on_conflict?: Maybe<Sec_Filing_Attachment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sec_Filing_Attachment_OneArgs = {
  object: Sec_Filing_Attachment_Insert_Input;
  on_conflict?: Maybe<Sec_Filing_Attachment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sec_Filing_OneArgs = {
  object: Sec_Filing_Insert_Input;
  on_conflict?: Maybe<Sec_Filing_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
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
export type Mutation_RootUpdate_OrgArgs = {
  _inc?: Maybe<Org_Inc_Input>;
  _set?: Maybe<Org_Set_Input>;
  where: Org_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Org_By_PkArgs = {
  _inc?: Maybe<Org_Inc_Input>;
  _set?: Maybe<Org_Set_Input>;
  pk_columns: Org_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Org_TypeArgs = {
  _set?: Maybe<Org_Type_Set_Input>;
  where: Org_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Org_Type_By_PkArgs = {
  _set?: Maybe<Org_Type_Set_Input>;
  pk_columns: Org_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sec_CompanyArgs = {
  _set?: Maybe<Sec_Company_Set_Input>;
  where: Sec_Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sec_Company_By_PkArgs = {
  _set?: Maybe<Sec_Company_Set_Input>;
  pk_columns: Sec_Company_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sec_FilingArgs = {
  _set?: Maybe<Sec_Filing_Set_Input>;
  where: Sec_Filing_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sec_Filing_AttachmentArgs = {
  _inc?: Maybe<Sec_Filing_Attachment_Inc_Input>;
  _set?: Maybe<Sec_Filing_Attachment_Set_Input>;
  where: Sec_Filing_Attachment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sec_Filing_Attachment_By_PkArgs = {
  _inc?: Maybe<Sec_Filing_Attachment_Inc_Input>;
  _set?: Maybe<Sec_Filing_Attachment_Set_Input>;
  pk_columns: Sec_Filing_Attachment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sec_Filing_By_PkArgs = {
  _set?: Maybe<Sec_Filing_Set_Input>;
  pk_columns: Sec_Filing_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
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

/** columns and relationships of "org" */
export type Org = {
  __typename?: 'org';
  auth0_connection_id: Scalars['String'];
  auth0_connection_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  org_type: Org_Type;
  type: Org_Type_Enum;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};

/** columns and relationships of "org" */
export type OrgUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "org" */
export type OrgUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "org" */
export type Org_Aggregate = {
  __typename?: 'org_aggregate';
  aggregate?: Maybe<Org_Aggregate_Fields>;
  nodes: Array<Org>;
};

/** aggregate fields of "org" */
export type Org_Aggregate_Fields = {
  __typename?: 'org_aggregate_fields';
  avg?: Maybe<Org_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Org_Max_Fields>;
  min?: Maybe<Org_Min_Fields>;
  stddev?: Maybe<Org_Stddev_Fields>;
  stddev_pop?: Maybe<Org_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Org_Stddev_Samp_Fields>;
  sum?: Maybe<Org_Sum_Fields>;
  var_pop?: Maybe<Org_Var_Pop_Fields>;
  var_samp?: Maybe<Org_Var_Samp_Fields>;
  variance?: Maybe<Org_Variance_Fields>;
};

/** aggregate fields of "org" */
export type Org_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Org_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "org" */
export type Org_Aggregate_Order_By = {
  avg?: Maybe<Org_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Max_Order_By>;
  min?: Maybe<Org_Min_Order_By>;
  stddev?: Maybe<Org_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Sum_Order_By>;
  var_pop?: Maybe<Org_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Var_Samp_Order_By>;
  variance?: Maybe<Org_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "org" */
export type Org_Arr_Rel_Insert_Input = {
  data: Array<Org_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Org_On_Conflict>;
};

/** aggregate avg on columns */
export type Org_Avg_Fields = {
  __typename?: 'org_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "org" */
export type Org_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org". All fields are combined with a logical 'AND'. */
export type Org_Bool_Exp = {
  _and?: Maybe<Array<Org_Bool_Exp>>;
  _not?: Maybe<Org_Bool_Exp>;
  _or?: Maybe<Array<Org_Bool_Exp>>;
  auth0_connection_id?: Maybe<String_Comparison_Exp>;
  auth0_connection_name?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org_type?: Maybe<Org_Type_Bool_Exp>;
  type?: Maybe<Org_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "org" */
export enum Org_Constraint {
  /** unique or primary key constraint */
  OrgAuth0IdKey = 'org_auth0_id_key',
  /** unique or primary key constraint */
  OrgNameKey = 'org_name_key',
  /** unique or primary key constraint */
  OrgPkey = 'org_pkey',
}

/** input type for incrementing numeric columns in table "org" */
export type Org_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "org" */
export type Org_Insert_Input = {
  auth0_connection_id?: Maybe<Scalars['String']>;
  auth0_connection_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  org_type?: Maybe<Org_Type_Obj_Rel_Insert_Input>;
  type?: Maybe<Org_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Org_Max_Fields = {
  __typename?: 'org_max_fields';
  auth0_connection_id?: Maybe<Scalars['String']>;
  auth0_connection_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "org" */
export type Org_Max_Order_By = {
  auth0_connection_id?: Maybe<Order_By>;
  auth0_connection_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Min_Fields = {
  __typename?: 'org_min_fields';
  auth0_connection_id?: Maybe<Scalars['String']>;
  auth0_connection_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "org" */
export type Org_Min_Order_By = {
  auth0_connection_id?: Maybe<Order_By>;
  auth0_connection_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "org" */
export type Org_Mutation_Response = {
  __typename?: 'org_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Org>;
};

/** input type for inserting object relation for remote table "org" */
export type Org_Obj_Rel_Insert_Input = {
  data: Org_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Org_On_Conflict>;
};

/** on conflict condition type for table "org" */
export type Org_On_Conflict = {
  constraint: Org_Constraint;
  update_columns?: Array<Org_Update_Column>;
  where?: Maybe<Org_Bool_Exp>;
};

/** Ordering options when selecting data from "org". */
export type Org_Order_By = {
  auth0_connection_id?: Maybe<Order_By>;
  auth0_connection_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org_type?: Maybe<Org_Type_Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: org */
export type Org_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "org" */
export enum Org_Select_Column {
  /** column name */
  Auth0ConnectionId = 'auth0_connection_id',
  /** column name */
  Auth0ConnectionName = 'auth0_connection_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "org" */
export type Org_Set_Input = {
  auth0_connection_id?: Maybe<Scalars['String']>;
  auth0_connection_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Org_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Org_Stddev_Fields = {
  __typename?: 'org_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "org" */
export type Org_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Org_Stddev_Pop_Fields = {
  __typename?: 'org_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "org" */
export type Org_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Org_Stddev_Samp_Fields = {
  __typename?: 'org_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "org" */
export type Org_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Org_Sum_Fields = {
  __typename?: 'org_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "org" */
export type Org_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "org_type" */
export type Org_Type = {
  __typename?: 'org_type';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  orgs: Array<Org>;
  /** An aggregate relationship */
  orgs_aggregate: Org_Aggregate;
  value: Scalars['String'];
};

/** columns and relationships of "org_type" */
export type Org_TypeOrgsArgs = {
  distinct_on?: Maybe<Array<Org_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Order_By>>;
  where?: Maybe<Org_Bool_Exp>;
};

/** columns and relationships of "org_type" */
export type Org_TypeOrgs_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Order_By>>;
  where?: Maybe<Org_Bool_Exp>;
};

/** aggregated selection of "org_type" */
export type Org_Type_Aggregate = {
  __typename?: 'org_type_aggregate';
  aggregate?: Maybe<Org_Type_Aggregate_Fields>;
  nodes: Array<Org_Type>;
};

/** aggregate fields of "org_type" */
export type Org_Type_Aggregate_Fields = {
  __typename?: 'org_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Org_Type_Max_Fields>;
  min?: Maybe<Org_Type_Min_Fields>;
};

/** aggregate fields of "org_type" */
export type Org_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Org_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "org_type". All fields are combined with a logical 'AND'. */
export type Org_Type_Bool_Exp = {
  _and?: Maybe<Array<Org_Type_Bool_Exp>>;
  _not?: Maybe<Org_Type_Bool_Exp>;
  _or?: Maybe<Array<Org_Type_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  orgs?: Maybe<Org_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_type" */
export enum Org_Type_Constraint {
  /** unique or primary key constraint */
  OrgTypePkey = 'org_type_pkey',
}

export enum Org_Type_Enum {
  /** Company */
  Company = 'company',
  /** Law Firm */
  Firm = 'firm',
}

/** Boolean expression to compare columns of type "org_type_enum". All fields are combined with logical 'AND'. */
export type Org_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Org_Type_Enum>;
  _in?: Maybe<Array<Org_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Org_Type_Enum>;
  _nin?: Maybe<Array<Org_Type_Enum>>;
};

/** input type for inserting data into table "org_type" */
export type Org_Type_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  orgs?: Maybe<Org_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Org_Type_Max_Fields = {
  __typename?: 'org_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Org_Type_Min_Fields = {
  __typename?: 'org_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "org_type" */
export type Org_Type_Mutation_Response = {
  __typename?: 'org_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Org_Type>;
};

/** input type for inserting object relation for remote table "org_type" */
export type Org_Type_Obj_Rel_Insert_Input = {
  data: Org_Type_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Org_Type_On_Conflict>;
};

/** on conflict condition type for table "org_type" */
export type Org_Type_On_Conflict = {
  constraint: Org_Type_Constraint;
  update_columns?: Array<Org_Type_Update_Column>;
  where?: Maybe<Org_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "org_type". */
export type Org_Type_Order_By = {
  comment?: Maybe<Order_By>;
  orgs_aggregate?: Maybe<Org_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: org_type */
export type Org_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "org_type" */
export enum Org_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "org_type" */
export type Org_Type_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "org_type" */
export enum Org_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** update columns of table "org" */
export enum Org_Update_Column {
  /** column name */
  Auth0ConnectionId = 'auth0_connection_id',
  /** column name */
  Auth0ConnectionName = 'auth0_connection_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Org_Var_Pop_Fields = {
  __typename?: 'org_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "org" */
export type Org_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Org_Var_Samp_Fields = {
  __typename?: 'org_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "org" */
export type Org_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Org_Variance_Fields = {
  __typename?: 'org_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "org" */
export type Org_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "migrations" */
  migrations: Array<Migrations>;
  /** fetch aggregated fields from the table: "migrations" */
  migrations_aggregate: Migrations_Aggregate;
  /** fetch data from the table: "migrations" using primary key columns */
  migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "org" */
  org: Array<Org>;
  /** fetch aggregated fields from the table: "org" */
  org_aggregate: Org_Aggregate;
  /** fetch data from the table: "org" using primary key columns */
  org_by_pk?: Maybe<Org>;
  /** fetch data from the table: "org_type" */
  org_type: Array<Org_Type>;
  /** fetch aggregated fields from the table: "org_type" */
  org_type_aggregate: Org_Type_Aggregate;
  /** fetch data from the table: "org_type" using primary key columns */
  org_type_by_pk?: Maybe<Org_Type>;
  /** fetch data from the table: "sec_company" */
  sec_company: Array<Sec_Company>;
  /** fetch aggregated fields from the table: "sec_company" */
  sec_company_aggregate: Sec_Company_Aggregate;
  /** fetch data from the table: "sec_company" using primary key columns */
  sec_company_by_pk?: Maybe<Sec_Company>;
  /** fetch data from the table: "sec_contract" */
  sec_contract: Array<Sec_Contract>;
  /** fetch aggregated fields from the table: "sec_contract" */
  sec_contract_aggregate: Sec_Contract_Aggregate;
  /** fetch data from the table: "sec_filing" */
  sec_filing: Array<Sec_Filing>;
  /** fetch aggregated fields from the table: "sec_filing" */
  sec_filing_aggregate: Sec_Filing_Aggregate;
  /** An array relationship */
  sec_filing_attachment: Array<Sec_Filing_Attachment>;
  /** An aggregate relationship */
  sec_filing_attachment_aggregate: Sec_Filing_Attachment_Aggregate;
  /** fetch data from the table: "sec_filing_attachment" using primary key columns */
  sec_filing_attachment_by_pk?: Maybe<Sec_Filing_Attachment>;
  /** fetch data from the table: "sec_filing" using primary key columns */
  sec_filing_by_pk?: Maybe<Sec_Filing>;
  /** execute function "sec_search" which returns "sec_contract" */
  sec_search: Array<Sec_Contract>;
  /** execute function "sec_search" and query aggregates on result of table type "sec_contract" */
  sec_search_aggregate: Sec_Contract_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
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

export type Query_RootOrgArgs = {
  distinct_on?: Maybe<Array<Org_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Order_By>>;
  where?: Maybe<Org_Bool_Exp>;
};

export type Query_RootOrg_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Order_By>>;
  where?: Maybe<Org_Bool_Exp>;
};

export type Query_RootOrg_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootOrg_TypeArgs = {
  distinct_on?: Maybe<Array<Org_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Type_Order_By>>;
  where?: Maybe<Org_Type_Bool_Exp>;
};

export type Query_RootOrg_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Type_Order_By>>;
  where?: Maybe<Org_Type_Bool_Exp>;
};

export type Query_RootOrg_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootSec_CompanyArgs = {
  distinct_on?: Maybe<Array<Sec_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Company_Order_By>>;
  where?: Maybe<Sec_Company_Bool_Exp>;
};

export type Query_RootSec_Company_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Company_Order_By>>;
  where?: Maybe<Sec_Company_Bool_Exp>;
};

export type Query_RootSec_Company_By_PkArgs = {
  cik: Scalars['String'];
};

export type Query_RootSec_ContractArgs = {
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Query_RootSec_Contract_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Query_RootSec_FilingArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Order_By>>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

export type Query_RootSec_Filing_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Order_By>>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

export type Query_RootSec_Filing_AttachmentArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

export type Query_RootSec_Filing_Attachment_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

export type Query_RootSec_Filing_Attachment_By_PkArgs = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

export type Query_RootSec_Filing_By_PkArgs = {
  accession_number: Scalars['String'];
};

export type Query_RootSec_SearchArgs = {
  args: Sec_Search_Args;
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Query_RootSec_Search_AggregateArgs = {
  args: Sec_Search_Args;
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "sec_company" */
export type Sec_Company = {
  __typename?: 'sec_company';
  cik: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  geo: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  sec_filing_attachments: Array<Sec_Filing_Attachment>;
  /** An aggregate relationship */
  sec_filing_attachments_aggregate: Sec_Filing_Attachment_Aggregate;
  /** An array relationship */
  sec_filings: Array<Sec_Filing>;
  /** An aggregate relationship */
  sec_filings_aggregate: Sec_Filing_Aggregate;
  sic: Scalars['String'];
  sic_name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "sec_company" */
export type Sec_CompanySec_Filing_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

/** columns and relationships of "sec_company" */
export type Sec_CompanySec_Filing_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

/** columns and relationships of "sec_company" */
export type Sec_CompanySec_FilingsArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Order_By>>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

/** columns and relationships of "sec_company" */
export type Sec_CompanySec_Filings_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Order_By>>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

/** aggregated selection of "sec_company" */
export type Sec_Company_Aggregate = {
  __typename?: 'sec_company_aggregate';
  aggregate?: Maybe<Sec_Company_Aggregate_Fields>;
  nodes: Array<Sec_Company>;
};

/** aggregate fields of "sec_company" */
export type Sec_Company_Aggregate_Fields = {
  __typename?: 'sec_company_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sec_Company_Max_Fields>;
  min?: Maybe<Sec_Company_Min_Fields>;
};

/** aggregate fields of "sec_company" */
export type Sec_Company_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sec_Company_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "sec_company". All fields are combined with a logical 'AND'. */
export type Sec_Company_Bool_Exp = {
  _and?: Maybe<Array<Sec_Company_Bool_Exp>>;
  _not?: Maybe<Sec_Company_Bool_Exp>;
  _or?: Maybe<Array<Sec_Company_Bool_Exp>>;
  cik?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  geo?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sec_filing_attachments?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
  sec_filings?: Maybe<Sec_Filing_Bool_Exp>;
  sic?: Maybe<String_Comparison_Exp>;
  sic_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sec_company" */
export enum Sec_Company_Constraint {
  /** unique or primary key constraint */
  SecCompaniesPkey = 'sec_companies_pkey',
}

/** input type for inserting data into table "sec_company" */
export type Sec_Company_Insert_Input = {
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sec_filing_attachments?: Maybe<Sec_Filing_Attachment_Arr_Rel_Insert_Input>;
  sec_filings?: Maybe<Sec_Filing_Arr_Rel_Insert_Input>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sec_Company_Max_Fields = {
  __typename?: 'sec_company_max_fields';
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Sec_Company_Min_Fields = {
  __typename?: 'sec_company_min_fields';
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "sec_company" */
export type Sec_Company_Mutation_Response = {
  __typename?: 'sec_company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sec_Company>;
};

/** input type for inserting object relation for remote table "sec_company" */
export type Sec_Company_Obj_Rel_Insert_Input = {
  data: Sec_Company_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Sec_Company_On_Conflict>;
};

/** on conflict condition type for table "sec_company" */
export type Sec_Company_On_Conflict = {
  constraint: Sec_Company_Constraint;
  update_columns?: Array<Sec_Company_Update_Column>;
  where?: Maybe<Sec_Company_Bool_Exp>;
};

/** Ordering options when selecting data from "sec_company". */
export type Sec_Company_Order_By = {
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geo?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sec_filing_attachments_aggregate?: Maybe<Sec_Filing_Attachment_Aggregate_Order_By>;
  sec_filings_aggregate?: Maybe<Sec_Filing_Aggregate_Order_By>;
  sic?: Maybe<Order_By>;
  sic_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: sec_company */
export type Sec_Company_Pk_Columns_Input = {
  cik: Scalars['String'];
};

/** select columns of table "sec_company" */
export enum Sec_Company_Select_Column {
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

/** input type for updating data in table "sec_company" */
export type Sec_Company_Set_Input = {
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sic?: Maybe<Scalars['String']>;
  sic_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "sec_company" */
export enum Sec_Company_Update_Column {
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

/** columns and relationships of "sec_contract" */
export type Sec_Contract = {
  __typename?: 'sec_contract';
  accession_number: Scalars['String'];
  attachment_type: Scalars['String'];
  company_cik: Scalars['String'];
  company_geo: Scalars['String'];
  company_name: Scalars['String'];
  company_sic: Scalars['String'];
  company_sic_name: Scalars['String'];
  description: Scalars['String'];
  filing_date: Scalars['String'];
  filing_header: Scalars['String'];
  filing_type: Scalars['String'];
  relevance: Scalars['Float'];
  /** An object relationship */
  sec_company?: Maybe<Sec_Company>;
  /** An object relationship */
  sec_filing?: Maybe<Sec_Filing>;
  /** An object relationship */
  sec_filing_attachment?: Maybe<Sec_Filing_Attachment>;
  sequence: Scalars['Int'];
  tsv_search_text: Scalars['String'];
  /** A computed field, executes function "sec_contract_uid" */
  uid?: Maybe<Scalars['String']>;
};

/** aggregated selection of "sec_contract" */
export type Sec_Contract_Aggregate = {
  __typename?: 'sec_contract_aggregate';
  aggregate?: Maybe<Sec_Contract_Aggregate_Fields>;
  nodes: Array<Sec_Contract>;
};

/** aggregate fields of "sec_contract" */
export type Sec_Contract_Aggregate_Fields = {
  __typename?: 'sec_contract_aggregate_fields';
  avg?: Maybe<Sec_Contract_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sec_Contract_Max_Fields>;
  min?: Maybe<Sec_Contract_Min_Fields>;
  stddev?: Maybe<Sec_Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Sec_Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sec_Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Sec_Contract_Sum_Fields>;
  var_pop?: Maybe<Sec_Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Sec_Contract_Var_Samp_Fields>;
  variance?: Maybe<Sec_Contract_Variance_Fields>;
};

/** aggregate fields of "sec_contract" */
export type Sec_Contract_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sec_Contract_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sec_Contract_Avg_Fields = {
  __typename?: 'sec_contract_avg_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sec_contract". All fields are combined with a logical 'AND'. */
export type Sec_Contract_Bool_Exp = {
  _and?: Maybe<Array<Sec_Contract_Bool_Exp>>;
  _not?: Maybe<Sec_Contract_Bool_Exp>;
  _or?: Maybe<Array<Sec_Contract_Bool_Exp>>;
  accession_number?: Maybe<String_Comparison_Exp>;
  attachment_type?: Maybe<String_Comparison_Exp>;
  company_cik?: Maybe<String_Comparison_Exp>;
  company_geo?: Maybe<String_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  company_sic?: Maybe<String_Comparison_Exp>;
  company_sic_name?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  filing_date?: Maybe<Date_Comparison_Exp>;
  filing_header?: Maybe<String_Comparison_Exp>;
  filing_type?: Maybe<String_Comparison_Exp>;
  relevance?: Maybe<Float_Comparison_Exp>;
  sec_company?: Maybe<Sec_Company_Bool_Exp>;
  sec_filing?: Maybe<Sec_Filing_Bool_Exp>;
  sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
  sequence?: Maybe<Int_Comparison_Exp>;
  tsv_search_text?: Maybe<Tsvector_Comparison_Exp>;
  uid?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Sec_Contract_Max_Fields = {
  __typename?: 'sec_contract_max_fields';
  accession_number?: Maybe<Scalars['String']>;
  attachment_type?: Maybe<Scalars['String']>;
  company_cik?: Maybe<Scalars['String']>;
  company_geo?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  company_sic?: Maybe<Scalars['String']>;
  company_sic_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filing_date?: Maybe<Scalars['date']>;
  filing_header?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Sec_Contract_Min_Fields = {
  __typename?: 'sec_contract_min_fields';
  accession_number?: Maybe<Scalars['String']>;
  attachment_type?: Maybe<Scalars['String']>;
  company_cik?: Maybe<Scalars['String']>;
  company_geo?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  company_sic?: Maybe<Scalars['String']>;
  company_sic_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filing_date?: Maybe<Scalars['date']>;
  filing_header?: Maybe<Scalars['String']>;
  filing_type?: Maybe<Scalars['String']>;
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "sec_contract". */
export type Sec_Contract_Order_By = {
  accession_number?: Maybe<Order_By>;
  attachment_type?: Maybe<Order_By>;
  company_cik?: Maybe<Order_By>;
  company_geo?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  company_sic?: Maybe<Order_By>;
  company_sic_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filing_date?: Maybe<Order_By>;
  filing_header?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  relevance?: Maybe<Order_By>;
  sec_company?: Maybe<Sec_Company_Order_By>;
  sec_filing?: Maybe<Sec_Filing_Order_By>;
  sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Order_By>;
  sequence?: Maybe<Order_By>;
  tsv_search_text?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** select columns of table "sec_contract" */
export enum Sec_Contract_Select_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  AttachmentType = 'attachment_type',
  /** column name */
  CompanyCik = 'company_cik',
  /** column name */
  CompanyGeo = 'company_geo',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CompanySic = 'company_sic',
  /** column name */
  CompanySicName = 'company_sic_name',
  /** column name */
  Description = 'description',
  /** column name */
  FilingDate = 'filing_date',
  /** column name */
  FilingHeader = 'filing_header',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Relevance = 'relevance',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  TsvSearchText = 'tsv_search_text',
}

/** aggregate stddev on columns */
export type Sec_Contract_Stddev_Fields = {
  __typename?: 'sec_contract_stddev_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sec_Contract_Stddev_Pop_Fields = {
  __typename?: 'sec_contract_stddev_pop_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sec_Contract_Stddev_Samp_Fields = {
  __typename?: 'sec_contract_stddev_samp_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sec_Contract_Sum_Fields = {
  __typename?: 'sec_contract_sum_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Sec_Contract_Var_Pop_Fields = {
  __typename?: 'sec_contract_var_pop_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sec_Contract_Var_Samp_Fields = {
  __typename?: 'sec_contract_var_samp_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sec_Contract_Variance_Fields = {
  __typename?: 'sec_contract_variance_fields';
  relevance?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "sec_filing" */
export type Sec_Filing = {
  __typename?: 'sec_filing';
  accession_number: Scalars['String'];
  cik: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_date: Scalars['date'];
  filing_type: Scalars['String'];
  header?: Maybe<Scalars['String']>;
  /** An object relationship */
  sec_company: Sec_Company;
  /** An array relationship */
  sec_filing_attachment: Array<Sec_Filing_Attachment>;
  /** An aggregate relationship */
  sec_filing_attachment_aggregate: Sec_Filing_Attachment_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "sec_filing" */
export type Sec_FilingSec_Filing_AttachmentArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

/** columns and relationships of "sec_filing" */
export type Sec_FilingSec_Filing_Attachment_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

/** aggregated selection of "sec_filing" */
export type Sec_Filing_Aggregate = {
  __typename?: 'sec_filing_aggregate';
  aggregate?: Maybe<Sec_Filing_Aggregate_Fields>;
  nodes: Array<Sec_Filing>;
};

/** aggregate fields of "sec_filing" */
export type Sec_Filing_Aggregate_Fields = {
  __typename?: 'sec_filing_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sec_Filing_Max_Fields>;
  min?: Maybe<Sec_Filing_Min_Fields>;
};

/** aggregate fields of "sec_filing" */
export type Sec_Filing_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sec_Filing_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sec_filing" */
export type Sec_Filing_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Sec_Filing_Max_Order_By>;
  min?: Maybe<Sec_Filing_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sec_filing" */
export type Sec_Filing_Arr_Rel_Insert_Input = {
  data: Array<Sec_Filing_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Sec_Filing_On_Conflict>;
};

/** columns and relationships of "sec_filing_attachment" */
export type Sec_Filing_Attachment = {
  __typename?: 'sec_filing_attachment';
  accession_number: Scalars['String'];
  attachment_type: Scalars['String'];
  cik: Scalars['String'];
  contents: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  /** An object relationship */
  sec_company: Sec_Company;
  /** An object relationship */
  sec_filing: Sec_Filing;
  sequence: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  tsv_search_text?: Maybe<Scalars['tsvector']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "sec_filing_attachment" */
export type Sec_Filing_Attachment_Aggregate = {
  __typename?: 'sec_filing_attachment_aggregate';
  aggregate?: Maybe<Sec_Filing_Attachment_Aggregate_Fields>;
  nodes: Array<Sec_Filing_Attachment>;
};

/** aggregate fields of "sec_filing_attachment" */
export type Sec_Filing_Attachment_Aggregate_Fields = {
  __typename?: 'sec_filing_attachment_aggregate_fields';
  avg?: Maybe<Sec_Filing_Attachment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sec_Filing_Attachment_Max_Fields>;
  min?: Maybe<Sec_Filing_Attachment_Min_Fields>;
  stddev?: Maybe<Sec_Filing_Attachment_Stddev_Fields>;
  stddev_pop?: Maybe<Sec_Filing_Attachment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sec_Filing_Attachment_Stddev_Samp_Fields>;
  sum?: Maybe<Sec_Filing_Attachment_Sum_Fields>;
  var_pop?: Maybe<Sec_Filing_Attachment_Var_Pop_Fields>;
  var_samp?: Maybe<Sec_Filing_Attachment_Var_Samp_Fields>;
  variance?: Maybe<Sec_Filing_Attachment_Variance_Fields>;
};

/** aggregate fields of "sec_filing_attachment" */
export type Sec_Filing_Attachment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Aggregate_Order_By = {
  avg?: Maybe<Sec_Filing_Attachment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sec_Filing_Attachment_Max_Order_By>;
  min?: Maybe<Sec_Filing_Attachment_Min_Order_By>;
  stddev?: Maybe<Sec_Filing_Attachment_Stddev_Order_By>;
  stddev_pop?: Maybe<Sec_Filing_Attachment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sec_Filing_Attachment_Stddev_Samp_Order_By>;
  sum?: Maybe<Sec_Filing_Attachment_Sum_Order_By>;
  var_pop?: Maybe<Sec_Filing_Attachment_Var_Pop_Order_By>;
  var_samp?: Maybe<Sec_Filing_Attachment_Var_Samp_Order_By>;
  variance?: Maybe<Sec_Filing_Attachment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Arr_Rel_Insert_Input = {
  data: Array<Sec_Filing_Attachment_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Sec_Filing_Attachment_On_Conflict>;
};

/** aggregate avg on columns */
export type Sec_Filing_Attachment_Avg_Fields = {
  __typename?: 'sec_filing_attachment_avg_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Avg_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sec_filing_attachment". All fields are combined with a logical 'AND'. */
export type Sec_Filing_Attachment_Bool_Exp = {
  _and?: Maybe<Array<Sec_Filing_Attachment_Bool_Exp>>;
  _not?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
  _or?: Maybe<Array<Sec_Filing_Attachment_Bool_Exp>>;
  accession_number?: Maybe<String_Comparison_Exp>;
  attachment_type?: Maybe<String_Comparison_Exp>;
  cik?: Maybe<String_Comparison_Exp>;
  contents?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  sec_company?: Maybe<Sec_Company_Bool_Exp>;
  sec_filing?: Maybe<Sec_Filing_Bool_Exp>;
  sequence?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  tsv_search_text?: Maybe<Tsvector_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sec_filing_attachment" */
export enum Sec_Filing_Attachment_Constraint {
  /** unique or primary key constraint */
  SecFilingAttachmentAccessionNumberSequenceKey = 'sec_filing_attachment_accession_number_sequence_key',
  /** unique or primary key constraint */
  SecFilingAttachmentPkey = 'sec_filing_attachment_pkey',
}

/** input type for incrementing numeric columns in table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Inc_Input = {
  sequence?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Insert_Input = {
  accession_number?: Maybe<Scalars['String']>;
  attachment_type?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  sec_company?: Maybe<Sec_Company_Obj_Rel_Insert_Input>;
  sec_filing?: Maybe<Sec_Filing_Obj_Rel_Insert_Input>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  tsv_search_text?: Maybe<Scalars['tsvector']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sec_Filing_Attachment_Max_Fields = {
  __typename?: 'sec_filing_attachment_max_fields';
  accession_number?: Maybe<Scalars['String']>;
  attachment_type?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Max_Order_By = {
  accession_number?: Maybe<Order_By>;
  attachment_type?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sec_Filing_Attachment_Min_Fields = {
  __typename?: 'sec_filing_attachment_min_fields';
  accession_number?: Maybe<Scalars['String']>;
  attachment_type?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Min_Order_By = {
  accession_number?: Maybe<Order_By>;
  attachment_type?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Mutation_Response = {
  __typename?: 'sec_filing_attachment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sec_Filing_Attachment>;
};

/** on conflict condition type for table "sec_filing_attachment" */
export type Sec_Filing_Attachment_On_Conflict = {
  constraint: Sec_Filing_Attachment_Constraint;
  update_columns?: Array<Sec_Filing_Attachment_Update_Column>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

/** Ordering options when selecting data from "sec_filing_attachment". */
export type Sec_Filing_Attachment_Order_By = {
  accession_number?: Maybe<Order_By>;
  attachment_type?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  contents?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  sec_company?: Maybe<Sec_Company_Order_By>;
  sec_filing?: Maybe<Sec_Filing_Order_By>;
  sequence?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  tsv_search_text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: sec_filing_attachment */
export type Sec_Filing_Attachment_Pk_Columns_Input = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

/** select columns of table "sec_filing_attachment" */
export enum Sec_Filing_Attachment_Select_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  AttachmentType = 'attachment_type',
  /** column name */
  Cik = 'cik',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Filename = 'filename',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Text = 'text',
  /** column name */
  TsvSearchText = 'tsv_search_text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Set_Input = {
  accession_number?: Maybe<Scalars['String']>;
  attachment_type?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  tsv_search_text?: Maybe<Scalars['tsvector']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Sec_Filing_Attachment_Stddev_Fields = {
  __typename?: 'sec_filing_attachment_stddev_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Stddev_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sec_Filing_Attachment_Stddev_Pop_Fields = {
  __typename?: 'sec_filing_attachment_stddev_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Stddev_Pop_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sec_Filing_Attachment_Stddev_Samp_Fields = {
  __typename?: 'sec_filing_attachment_stddev_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Stddev_Samp_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sec_Filing_Attachment_Sum_Fields = {
  __typename?: 'sec_filing_attachment_sum_fields';
  sequence?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Sum_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** update columns of table "sec_filing_attachment" */
export enum Sec_Filing_Attachment_Update_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  AttachmentType = 'attachment_type',
  /** column name */
  Cik = 'cik',
  /** column name */
  Contents = 'contents',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Filename = 'filename',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Text = 'text',
  /** column name */
  TsvSearchText = 'tsv_search_text',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Sec_Filing_Attachment_Var_Pop_Fields = {
  __typename?: 'sec_filing_attachment_var_pop_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Var_Pop_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sec_Filing_Attachment_Var_Samp_Fields = {
  __typename?: 'sec_filing_attachment_var_samp_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Var_Samp_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sec_Filing_Attachment_Variance_Fields = {
  __typename?: 'sec_filing_attachment_variance_fields';
  sequence?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sec_filing_attachment" */
export type Sec_Filing_Attachment_Variance_Order_By = {
  sequence?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sec_filing". All fields are combined with a logical 'AND'. */
export type Sec_Filing_Bool_Exp = {
  _and?: Maybe<Array<Sec_Filing_Bool_Exp>>;
  _not?: Maybe<Sec_Filing_Bool_Exp>;
  _or?: Maybe<Array<Sec_Filing_Bool_Exp>>;
  accession_number?: Maybe<String_Comparison_Exp>;
  cik?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  filing_date?: Maybe<Date_Comparison_Exp>;
  filing_type?: Maybe<String_Comparison_Exp>;
  header?: Maybe<String_Comparison_Exp>;
  sec_company?: Maybe<Sec_Company_Bool_Exp>;
  sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sec_filing" */
export enum Sec_Filing_Constraint {
  /** unique or primary key constraint */
  SecFilingPkey = 'sec_filing_pkey',
}

/** input type for inserting data into table "sec_filing" */
export type Sec_Filing_Insert_Input = {
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_date?: Maybe<Scalars['date']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  sec_company?: Maybe<Sec_Company_Obj_Rel_Insert_Input>;
  sec_filing_attachment?: Maybe<Sec_Filing_Attachment_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sec_Filing_Max_Fields = {
  __typename?: 'sec_filing_max_fields';
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_date?: Maybe<Scalars['date']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "sec_filing" */
export type Sec_Filing_Max_Order_By = {
  accession_number?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  filing_date?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sec_Filing_Min_Fields = {
  __typename?: 'sec_filing_min_fields';
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_date?: Maybe<Scalars['date']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "sec_filing" */
export type Sec_Filing_Min_Order_By = {
  accession_number?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  filing_date?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "sec_filing" */
export type Sec_Filing_Mutation_Response = {
  __typename?: 'sec_filing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sec_Filing>;
};

/** input type for inserting object relation for remote table "sec_filing" */
export type Sec_Filing_Obj_Rel_Insert_Input = {
  data: Sec_Filing_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Sec_Filing_On_Conflict>;
};

/** on conflict condition type for table "sec_filing" */
export type Sec_Filing_On_Conflict = {
  constraint: Sec_Filing_Constraint;
  update_columns?: Array<Sec_Filing_Update_Column>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

/** Ordering options when selecting data from "sec_filing". */
export type Sec_Filing_Order_By = {
  accession_number?: Maybe<Order_By>;
  cik?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  filing_date?: Maybe<Order_By>;
  filing_type?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  sec_company?: Maybe<Sec_Company_Order_By>;
  sec_filing_attachment_aggregate?: Maybe<Sec_Filing_Attachment_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: sec_filing */
export type Sec_Filing_Pk_Columns_Input = {
  accession_number: Scalars['String'];
};

/** select columns of table "sec_filing" */
export enum Sec_Filing_Select_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  Cik = 'cik',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FilingDate = 'filing_date',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Header = 'header',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "sec_filing" */
export type Sec_Filing_Set_Input = {
  accession_number?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  filing_date?: Maybe<Scalars['date']>;
  filing_type?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "sec_filing" */
export enum Sec_Filing_Update_Column {
  /** column name */
  AccessionNumber = 'accession_number',
  /** column name */
  Cik = 'cik',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FilingDate = 'filing_date',
  /** column name */
  FilingType = 'filing_type',
  /** column name */
  Header = 'header',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Sec_Search_Args = {
  company_name_excludes?: Maybe<Scalars['String']>;
  company_name_includes?: Maybe<Scalars['String']>;
  description_excludes?: Maybe<Scalars['String']>;
  description_includes?: Maybe<Scalars['String']>;
  filing_date_gt?: Maybe<Scalars['date']>;
  filing_date_lt?: Maybe<Scalars['date']>;
  search?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "migrations" */
  migrations: Array<Migrations>;
  /** fetch aggregated fields from the table: "migrations" */
  migrations_aggregate: Migrations_Aggregate;
  /** fetch data from the table: "migrations" using primary key columns */
  migrations_by_pk?: Maybe<Migrations>;
  /** fetch data from the table: "org" */
  org: Array<Org>;
  /** fetch aggregated fields from the table: "org" */
  org_aggregate: Org_Aggregate;
  /** fetch data from the table: "org" using primary key columns */
  org_by_pk?: Maybe<Org>;
  /** fetch data from the table: "org_type" */
  org_type: Array<Org_Type>;
  /** fetch aggregated fields from the table: "org_type" */
  org_type_aggregate: Org_Type_Aggregate;
  /** fetch data from the table: "org_type" using primary key columns */
  org_type_by_pk?: Maybe<Org_Type>;
  /** fetch data from the table: "sec_company" */
  sec_company: Array<Sec_Company>;
  /** fetch aggregated fields from the table: "sec_company" */
  sec_company_aggregate: Sec_Company_Aggregate;
  /** fetch data from the table: "sec_company" using primary key columns */
  sec_company_by_pk?: Maybe<Sec_Company>;
  /** fetch data from the table: "sec_contract" */
  sec_contract: Array<Sec_Contract>;
  /** fetch aggregated fields from the table: "sec_contract" */
  sec_contract_aggregate: Sec_Contract_Aggregate;
  /** fetch data from the table: "sec_filing" */
  sec_filing: Array<Sec_Filing>;
  /** fetch aggregated fields from the table: "sec_filing" */
  sec_filing_aggregate: Sec_Filing_Aggregate;
  /** An array relationship */
  sec_filing_attachment: Array<Sec_Filing_Attachment>;
  /** An aggregate relationship */
  sec_filing_attachment_aggregate: Sec_Filing_Attachment_Aggregate;
  /** fetch data from the table: "sec_filing_attachment" using primary key columns */
  sec_filing_attachment_by_pk?: Maybe<Sec_Filing_Attachment>;
  /** fetch data from the table: "sec_filing" using primary key columns */
  sec_filing_by_pk?: Maybe<Sec_Filing>;
  /** execute function "sec_search" which returns "sec_contract" */
  sec_search: Array<Sec_Contract>;
  /** execute function "sec_search" and query aggregates on result of table type "sec_contract" */
  sec_search_aggregate: Sec_Contract_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
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

export type Subscription_RootOrgArgs = {
  distinct_on?: Maybe<Array<Org_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Order_By>>;
  where?: Maybe<Org_Bool_Exp>;
};

export type Subscription_RootOrg_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Order_By>>;
  where?: Maybe<Org_Bool_Exp>;
};

export type Subscription_RootOrg_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootOrg_TypeArgs = {
  distinct_on?: Maybe<Array<Org_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Type_Order_By>>;
  where?: Maybe<Org_Type_Bool_Exp>;
};

export type Subscription_RootOrg_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Org_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Type_Order_By>>;
  where?: Maybe<Org_Type_Bool_Exp>;
};

export type Subscription_RootOrg_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootSec_CompanyArgs = {
  distinct_on?: Maybe<Array<Sec_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Company_Order_By>>;
  where?: Maybe<Sec_Company_Bool_Exp>;
};

export type Subscription_RootSec_Company_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Company_Order_By>>;
  where?: Maybe<Sec_Company_Bool_Exp>;
};

export type Subscription_RootSec_Company_By_PkArgs = {
  cik: Scalars['String'];
};

export type Subscription_RootSec_ContractArgs = {
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Subscription_RootSec_Contract_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Subscription_RootSec_FilingArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Order_By>>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

export type Subscription_RootSec_Filing_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Order_By>>;
  where?: Maybe<Sec_Filing_Bool_Exp>;
};

export type Subscription_RootSec_Filing_AttachmentArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

export type Subscription_RootSec_Filing_Attachment_AggregateArgs = {
  distinct_on?: Maybe<Array<Sec_Filing_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Filing_Attachment_Order_By>>;
  where?: Maybe<Sec_Filing_Attachment_Bool_Exp>;
};

export type Subscription_RootSec_Filing_Attachment_By_PkArgs = {
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
};

export type Subscription_RootSec_Filing_By_PkArgs = {
  accession_number: Scalars['String'];
};

export type Subscription_RootSec_SearchArgs = {
  args: Sec_Search_Args;
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Subscription_RootSec_Search_AggregateArgs = {
  args: Sec_Search_Args;
  distinct_on?: Maybe<Array<Sec_Contract_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sec_Contract_Order_By>>;
  where?: Maybe<Sec_Contract_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
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

/** Boolean expression to compare columns of type "tsvector". All fields are combined with logical 'AND'. */
export type Tsvector_Comparison_Exp = {
  _eq?: Maybe<Scalars['tsvector']>;
  _gt?: Maybe<Scalars['tsvector']>;
  _gte?: Maybe<Scalars['tsvector']>;
  _in?: Maybe<Array<Scalars['tsvector']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['tsvector']>;
  _lte?: Maybe<Scalars['tsvector']>;
  _neq?: Maybe<Scalars['tsvector']>;
  _nin?: Maybe<Array<Scalars['tsvector']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  auth0_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  default_org: Org;
  default_org_id: Scalars['Int'];
  email: Scalars['String'];
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  auth0_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_org?: Maybe<Org_Bool_Exp>;
  default_org_id?: Maybe<Int_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  family_name?: Maybe<String_Comparison_Exp>;
  given_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  nickname?: Maybe<String_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserAuth0IdKey = 'user_auth0_id_key',
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  default_org_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_org?: Maybe<Org_Obj_Rel_Insert_Input>;
  default_org_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_org_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_org_id?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_org_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_org_id?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_org?: Maybe<Org_Order_By>;
  default_org_id?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  family_name?: Maybe<Order_By>;
  given_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultOrgId = 'default_org_id',
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

/** input type for updating data in table "user" */
export type User_Set_Input = {
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_org_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  default_org_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultOrgId = 'default_org_id',
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

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  default_org_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  default_org_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type SearchResultFragment = {
  __typename?: 'sec_contract';
  uid?: Maybe<string>;
  accession_number: string;
  sequence: number;
  company_name: string;
  company_cik: string;
  company_sic_name: string;
  filing_type: string;
  filing_date: string;
  description: string;
  attachment_type: string;
};

export type SearchSecContractsQueryVariables = Exact<{
  search: Scalars['String'];
  minDate?: Maybe<Scalars['date']>;
  maxDate?: Maybe<Scalars['date']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  uidsOnly?: Maybe<Scalars['Boolean']>;
}>;

export type SearchSecContractsQuery = {
  __typename?: 'query_root';
  sec_search_aggregate: {
    __typename?: 'sec_contract_aggregate';
    nodes?: Maybe<Array<{ __typename?: 'sec_contract'; uid?: Maybe<string> }>>;
    aggregate?: Maybe<{
      __typename?: 'sec_contract_aggregate_fields';
      count: number;
      filing_count: number;
      company_count: number;
    }>;
  };
  sec_search?: Maybe<
    Array<{
      __typename?: 'sec_contract';
      uid?: Maybe<string>;
      accession_number: string;
      sequence: number;
      company_name: string;
      company_cik: string;
      company_sic_name: string;
      filing_type: string;
      filing_date: string;
      description: string;
      attachment_type: string;
    }>
  >;
};

export type SecContractFragment = {
  __typename?: 'sec_filing_attachment';
  sequence: number;
  attachment_type: string;
  description?: Maybe<string>;
  contents: string;
  sec_filing: {
    __typename?: 'sec_filing';
    accession_number: string;
    filing_date: Date;
    filing_type: string;
    sec_company: {
      __typename?: 'sec_company';
      name: string;
      sic: string;
      sic_name: string;
    };
  };
};

export type GetSecContractQueryVariables = Exact<{
  accession_number: Scalars['String'];
  sequence: Scalars['Int'];
}>;

export type GetSecContractQuery = {
  __typename?: 'query_root';
  sec_filing_attachment_by_pk?: Maybe<{
    __typename?: 'sec_filing_attachment';
    sequence: number;
    attachment_type: string;
    description?: Maybe<string>;
    contents: string;
    sec_filing: {
      __typename?: 'sec_filing';
      accession_number: string;
      filing_date: Date;
      filing_type: string;
      sec_company: {
        __typename?: 'sec_company';
        name: string;
        sic: string;
        sic_name: string;
      };
    };
  }>;
};

export type CurrentUserFragment = {
  __typename?: 'user';
  id: number;
  email: string;
  name: string;
  photo_url?: Maybe<string>;
  default_org: { __typename?: 'org'; id: number; name: string };
};

export type GetCurrentUserQueryVariables = Exact<{
  auth0_id: Scalars['String'];
}>;

export type GetCurrentUserQuery = {
  __typename?: 'query_root';
  user: Array<{
    __typename?: 'user';
    id: number;
    email: string;
    name: string;
    photo_url?: Maybe<string>;
    default_org: { __typename?: 'org'; id: number; name: string };
  }>;
};

export type SyncUserMutationVariables = Exact<{
  auth0_id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  org: Org_Insert_Input;
}>;

export type SyncUserMutation = {
  __typename?: 'mutation_root';
  insert_user_one?: Maybe<{
    __typename?: 'user';
    id: number;
    auth0_id: string;
    email: string;
    name: string;
    default_org: { __typename?: 'org'; id: number; name: string };
  }>;
};

export const SearchResultFragmentDoc = gql`
  fragment SearchResult on sec_contract {
    uid
    accession_number
    sequence
    company_name
    company_cik
    company_sic_name
    filing_type
    filing_date
    description
    attachment_type
  }
`;
export const SecContractFragmentDoc = gql`
  fragment SECContract on sec_filing_attachment {
    sequence
    sec_filing {
      accession_number
      filing_date
      filing_type
      sec_company {
        name
        sic
        sic_name
      }
    }
    attachment_type
    description
    contents
  }
`;
export const CurrentUserFragmentDoc = gql`
  fragment CurrentUser on user {
    id
    email
    name
    photo_url
    default_org {
      id
      name
    }
  }
`;
export const SearchSecContractsDocument = gql`
  query SearchSECContracts(
    $search: String!
    $minDate: date
    $maxDate: date
    $limit: Int = 20
    $offset: Int = 0
    $uidsOnly: Boolean = false
  ) {
    sec_search_aggregate(
      args: {
        search: $search
        filing_date_gt: $minDate
        filing_date_lt: $maxDate
      }
    ) {
      nodes @include(if: $uidsOnly) {
        uid
      }
      aggregate {
        filing_count: count(columns: accession_number, distinct: true)
        company_count: count(columns: company_cik, distinct: true)
        count
      }
    }
    sec_search(
      args: {
        search: $search
        filing_date_gt: $minDate
        filing_date_lt: $maxDate
      }
      order_by: { relevance: desc }
      limit: $limit
      offset: $offset
    ) @skip(if: $uidsOnly) {
      ...SearchResult
    }
  }
  ${SearchResultFragmentDoc}
`;

/**
 * __useSearchSecContractsQuery__
 *
 * To run a query within a React component, call `useSearchSecContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSecContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSecContractsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      minDate: // value for 'minDate'
 *      maxDate: // value for 'maxDate'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      uidsOnly: // value for 'uidsOnly'
 *   },
 * });
 */
export function useSearchSecContractsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchSecContractsQuery,
    SearchSecContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SearchSecContractsQuery,
    SearchSecContractsQueryVariables
  >(SearchSecContractsDocument, options);
}
export function useSearchSecContractsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchSecContractsQuery,
    SearchSecContractsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SearchSecContractsQuery,
    SearchSecContractsQueryVariables
  >(SearchSecContractsDocument, options);
}
export type SearchSecContractsQueryHookResult = ReturnType<
  typeof useSearchSecContractsQuery
>;
export type SearchSecContractsLazyQueryHookResult = ReturnType<
  typeof useSearchSecContractsLazyQuery
>;
export type SearchSecContractsQueryResult = Apollo.QueryResult<
  SearchSecContractsQuery,
  SearchSecContractsQueryVariables
>;
export const GetSecContractDocument = gql`
  query GetSECContract($accession_number: String!, $sequence: Int!) {
    sec_filing_attachment_by_pk(
      accession_number: $accession_number
      sequence: $sequence
    ) {
      ...SECContract
    }
  }
  ${SecContractFragmentDoc}
`;

/**
 * __useGetSecContractQuery__
 *
 * To run a query within a React component, call `useGetSecContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSecContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecContractQuery({
 *   variables: {
 *      accession_number: // value for 'accession_number'
 *      sequence: // value for 'sequence'
 *   },
 * });
 */
export function useGetSecContractQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSecContractQuery,
    GetSecContractQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSecContractQuery, GetSecContractQueryVariables>(
    GetSecContractDocument,
    options
  );
}
export function useGetSecContractLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSecContractQuery,
    GetSecContractQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSecContractQuery, GetSecContractQueryVariables>(
    GetSecContractDocument,
    options
  );
}
export type GetSecContractQueryHookResult = ReturnType<
  typeof useGetSecContractQuery
>;
export type GetSecContractLazyQueryHookResult = ReturnType<
  typeof useGetSecContractLazyQuery
>;
export type GetSecContractQueryResult = Apollo.QueryResult<
  GetSecContractQuery,
  GetSecContractQueryVariables
>;
export const GetCurrentUserDocument = gql`
  query GetCurrentUser($auth0_id: String!) {
    user(where: { auth0_id: { _eq: $auth0_id } }, limit: 1) {
      ...CurrentUser
    }
  }
  ${CurrentUserFragmentDoc}
`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *      auth0_id: // value for 'auth0_id'
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const SyncUserDocument = gql`
  mutation SyncUser(
    $auth0_id: String!
    $email: String!
    $name: String!
    $nickname: String
    $given_name: String
    $family_name: String
    $photo_url: String
    $org: org_insert_input!
  ) {
    insert_user_one(
      object: {
        auth0_id: $auth0_id
        name: $name
        nickname: $nickname
        given_name: $given_name
        family_name: $family_name
        email: $email
        photo_url: $photo_url
        default_org: {
          data: $org
          on_conflict: {
            constraint: org_auth0_id_key
            update_columns: [auth0_connection_name]
          }
        }
      }
      on_conflict: {
        constraint: user_auth0_id_key
        update_columns: [
          email
          name
          nickname
          given_name
          family_name
          photo_url
          default_org_id
        ]
      }
    ) {
      id
      auth0_id
      email
      name
      default_org {
        id
        name
      }
    }
  }
`;
export type SyncUserMutationFn = Apollo.MutationFunction<
  SyncUserMutation,
  SyncUserMutationVariables
>;

/**
 * __useSyncUserMutation__
 *
 * To run a mutation, you first call `useSyncUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncUserMutation, { data, loading, error }] = useSyncUserMutation({
 *   variables: {
 *      auth0_id: // value for 'auth0_id'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      nickname: // value for 'nickname'
 *      given_name: // value for 'given_name'
 *      family_name: // value for 'family_name'
 *      photo_url: // value for 'photo_url'
 *      org: // value for 'org'
 *   },
 * });
 */
export function useSyncUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SyncUserMutation,
    SyncUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SyncUserMutation, SyncUserMutationVariables>(
    SyncUserDocument,
    options
  );
}
export type SyncUserMutationHookResult = ReturnType<typeof useSyncUserMutation>;
export type SyncUserMutationResult = Apollo.MutationResult<SyncUserMutation>;
export type SyncUserMutationOptions = Apollo.BaseMutationOptions<
  SyncUserMutation,
  SyncUserMutationVariables
>;

export type PossibleTypesResultData = {
  possibleTypes: {};
};
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
