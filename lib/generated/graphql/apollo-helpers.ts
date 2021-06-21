import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type data_sec_companiesKeySpecifier = ('cik' | 'created_at' | 'geo' | 'name' | 'sec_filings' | 'sec_filings_aggregate' | 'sic' | 'sic_name' | 'updated_at' | data_sec_companiesKeySpecifier)[];
export type data_sec_companiesFieldPolicy = {
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filings_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sic?: FieldPolicy<any> | FieldReadFunction<any>,
	sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_companies_aggregateKeySpecifier = ('aggregate' | 'nodes' | data_sec_companies_aggregateKeySpecifier)[];
export type data_sec_companies_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_companies_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | data_sec_companies_aggregate_fieldsKeySpecifier)[];
export type data_sec_companies_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_companies_max_fieldsKeySpecifier = ('cik' | 'created_at' | 'geo' | 'name' | 'sic' | 'sic_name' | 'updated_at' | data_sec_companies_max_fieldsKeySpecifier)[];
export type data_sec_companies_max_fieldsFieldPolicy = {
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sic?: FieldPolicy<any> | FieldReadFunction<any>,
	sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_companies_min_fieldsKeySpecifier = ('cik' | 'created_at' | 'geo' | 'name' | 'sic' | 'sic_name' | 'updated_at' | data_sec_companies_min_fieldsKeySpecifier)[];
export type data_sec_companies_min_fieldsFieldPolicy = {
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sic?: FieldPolicy<any> | FieldReadFunction<any>,
	sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_companies_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | data_sec_companies_mutation_responseKeySpecifier)[];
export type data_sec_companies_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contractsKeySpecifier = ('accession_number' | 'company_cik' | 'company_geo' | 'company_name' | 'contents' | 'description' | 'filing_metadata' | 'filing_type' | 'sequence' | 'text' | data_sec_contractsKeySpecifier)[];
export type data_sec_contractsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	company_cik?: FieldPolicy<any> | FieldReadFunction<any>,
	company_geo?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_aggregateKeySpecifier = ('aggregate' | 'nodes' | data_sec_contracts_aggregateKeySpecifier)[];
export type data_sec_contracts_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | data_sec_contracts_aggregate_fieldsKeySpecifier)[];
export type data_sec_contracts_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_avg_fieldsKeySpecifier = ('sequence' | data_sec_contracts_avg_fieldsKeySpecifier)[];
export type data_sec_contracts_avg_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_max_fieldsKeySpecifier = ('accession_number' | 'company_cik' | 'company_geo' | 'company_name' | 'contents' | 'description' | 'filing_metadata' | 'filing_type' | 'sequence' | 'text' | data_sec_contracts_max_fieldsKeySpecifier)[];
export type data_sec_contracts_max_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	company_cik?: FieldPolicy<any> | FieldReadFunction<any>,
	company_geo?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_min_fieldsKeySpecifier = ('accession_number' | 'company_cik' | 'company_geo' | 'company_name' | 'contents' | 'description' | 'filing_metadata' | 'filing_type' | 'sequence' | 'text' | data_sec_contracts_min_fieldsKeySpecifier)[];
export type data_sec_contracts_min_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	company_cik?: FieldPolicy<any> | FieldReadFunction<any>,
	company_geo?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_stddev_fieldsKeySpecifier = ('sequence' | data_sec_contracts_stddev_fieldsKeySpecifier)[];
export type data_sec_contracts_stddev_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_stddev_pop_fieldsKeySpecifier = ('sequence' | data_sec_contracts_stddev_pop_fieldsKeySpecifier)[];
export type data_sec_contracts_stddev_pop_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_stddev_samp_fieldsKeySpecifier = ('sequence' | data_sec_contracts_stddev_samp_fieldsKeySpecifier)[];
export type data_sec_contracts_stddev_samp_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_sum_fieldsKeySpecifier = ('sequence' | data_sec_contracts_sum_fieldsKeySpecifier)[];
export type data_sec_contracts_sum_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_var_pop_fieldsKeySpecifier = ('sequence' | data_sec_contracts_var_pop_fieldsKeySpecifier)[];
export type data_sec_contracts_var_pop_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_var_samp_fieldsKeySpecifier = ('sequence' | data_sec_contracts_var_samp_fieldsKeySpecifier)[];
export type data_sec_contracts_var_samp_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_contracts_variance_fieldsKeySpecifier = ('sequence' | data_sec_contracts_variance_fieldsKeySpecifier)[];
export type data_sec_contracts_variance_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachmentsKeySpecifier = ('accession_number' | 'contents' | 'created_at' | 'description' | 'filename' | 'filing_type' | 'sec_filing' | 'sequence' | 'text' | 'updated_at' | data_sec_filing_attachmentsKeySpecifier)[];
export type data_sec_filing_attachmentsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_aggregateKeySpecifier = ('aggregate' | 'nodes' | data_sec_filing_attachments_aggregateKeySpecifier)[];
export type data_sec_filing_attachments_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | data_sec_filing_attachments_aggregate_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_avg_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_avg_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_avg_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_max_fieldsKeySpecifier = ('accession_number' | 'contents' | 'created_at' | 'description' | 'filename' | 'filing_type' | 'sequence' | 'text' | 'updated_at' | data_sec_filing_attachments_max_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_max_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_min_fieldsKeySpecifier = ('accession_number' | 'contents' | 'created_at' | 'description' | 'filename' | 'filing_type' | 'sequence' | 'text' | 'updated_at' | data_sec_filing_attachments_min_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_min_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | data_sec_filing_attachments_mutation_responseKeySpecifier)[];
export type data_sec_filing_attachments_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_stddev_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_stddev_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_stddev_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_stddev_pop_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_stddev_pop_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_stddev_pop_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_stddev_samp_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_stddev_samp_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_stddev_samp_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_sum_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_sum_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_sum_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_var_pop_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_var_pop_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_var_pop_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_var_samp_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_var_samp_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_var_samp_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filing_attachments_variance_fieldsKeySpecifier = ('sequence' | data_sec_filing_attachments_variance_fieldsKeySpecifier)[];
export type data_sec_filing_attachments_variance_fieldsFieldPolicy = {
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filingsKeySpecifier = ('accession_number' | 'cik' | 'created_at' | 'header' | 'sec_company' | 'sec_filing_attachments' | 'sec_filing_attachments_aggregate' | 'updated_at' | data_sec_filingsKeySpecifier)[];
export type data_sec_filingsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filings_aggregateKeySpecifier = ('aggregate' | 'nodes' | data_sec_filings_aggregateKeySpecifier)[];
export type data_sec_filings_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filings_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | data_sec_filings_aggregate_fieldsKeySpecifier)[];
export type data_sec_filings_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filings_max_fieldsKeySpecifier = ('accession_number' | 'cik' | 'created_at' | 'header' | 'updated_at' | data_sec_filings_max_fieldsKeySpecifier)[];
export type data_sec_filings_max_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filings_min_fieldsKeySpecifier = ('accession_number' | 'cik' | 'created_at' | 'header' | 'updated_at' | data_sec_filings_min_fieldsKeySpecifier)[];
export type data_sec_filings_min_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type data_sec_filings_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | data_sec_filings_mutation_responseKeySpecifier)[];
export type data_sec_filings_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrationsKeySpecifier = ('executed_at' | 'hash' | 'id' | 'name' | migrationsKeySpecifier)[];
export type migrationsFieldPolicy = {
	executed_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_aggregateKeySpecifier = ('aggregate' | 'nodes' | migrations_aggregateKeySpecifier)[];
export type migrations_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | migrations_aggregate_fieldsKeySpecifier)[];
export type migrations_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_avg_fieldsKeySpecifier = ('id' | migrations_avg_fieldsKeySpecifier)[];
export type migrations_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_max_fieldsKeySpecifier = ('executed_at' | 'hash' | 'id' | 'name' | migrations_max_fieldsKeySpecifier)[];
export type migrations_max_fieldsFieldPolicy = {
	executed_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_min_fieldsKeySpecifier = ('executed_at' | 'hash' | 'id' | 'name' | migrations_min_fieldsKeySpecifier)[];
export type migrations_min_fieldsFieldPolicy = {
	executed_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | migrations_mutation_responseKeySpecifier)[];
export type migrations_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_stddev_fieldsKeySpecifier = ('id' | migrations_stddev_fieldsKeySpecifier)[];
export type migrations_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_stddev_pop_fieldsKeySpecifier = ('id' | migrations_stddev_pop_fieldsKeySpecifier)[];
export type migrations_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_stddev_samp_fieldsKeySpecifier = ('id' | migrations_stddev_samp_fieldsKeySpecifier)[];
export type migrations_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_sum_fieldsKeySpecifier = ('id' | migrations_sum_fieldsKeySpecifier)[];
export type migrations_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_var_pop_fieldsKeySpecifier = ('id' | migrations_var_pop_fieldsKeySpecifier)[];
export type migrations_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_var_samp_fieldsKeySpecifier = ('id' | migrations_var_samp_fieldsKeySpecifier)[];
export type migrations_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type migrations_variance_fieldsKeySpecifier = ('id' | migrations_variance_fieldsKeySpecifier)[];
export type migrations_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_data_sec_companies' | 'delete_data_sec_companies_by_pk' | 'delete_data_sec_filing_attachments' | 'delete_data_sec_filing_attachments_by_pk' | 'delete_data_sec_filings' | 'delete_data_sec_filings_by_pk' | 'delete_migrations' | 'delete_migrations_by_pk' | 'insert_data_sec_companies' | 'insert_data_sec_companies_one' | 'insert_data_sec_filing_attachments' | 'insert_data_sec_filing_attachments_one' | 'insert_data_sec_filings' | 'insert_data_sec_filings_one' | 'insert_migrations' | 'insert_migrations_one' | 'update_data_sec_companies' | 'update_data_sec_companies_by_pk' | 'update_data_sec_filing_attachments' | 'update_data_sec_filing_attachments_by_pk' | 'update_data_sec_filings' | 'update_data_sec_filings_by_pk' | 'update_migrations' | 'update_migrations_by_pk' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_data_sec_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_data_sec_companies_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_data_sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_data_sec_filing_attachments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_data_sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_data_sec_filings_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_data_sec_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_data_sec_companies_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_data_sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_data_sec_filing_attachments_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_data_sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_data_sec_filings_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_migrations_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_data_sec_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	update_data_sec_companies_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_data_sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	update_data_sec_filing_attachments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_data_sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	update_data_sec_filings_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	update_migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('data_sec_companies' | 'data_sec_companies_aggregate' | 'data_sec_companies_by_pk' | 'data_sec_contracts' | 'data_sec_contracts_aggregate' | 'data_sec_filing_attachments' | 'data_sec_filing_attachments_aggregate' | 'data_sec_filing_attachments_by_pk' | 'data_sec_filings' | 'data_sec_filings_aggregate' | 'data_sec_filings_by_pk' | 'migrations' | 'migrations_aggregate' | 'migrations_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	data_sec_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_companies_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_companies_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_contracts?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_contracts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filing_attachments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filing_attachments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filings_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filings_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('data_sec_companies' | 'data_sec_companies_aggregate' | 'data_sec_companies_by_pk' | 'data_sec_contracts' | 'data_sec_contracts_aggregate' | 'data_sec_filing_attachments' | 'data_sec_filing_attachments_aggregate' | 'data_sec_filing_attachments_by_pk' | 'data_sec_filings' | 'data_sec_filings_aggregate' | 'data_sec_filings_by_pk' | 'migrations' | 'migrations_aggregate' | 'migrations_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	data_sec_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_companies_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_companies_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_contracts?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_contracts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filing_attachments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filing_attachments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filings_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	data_sec_filings_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	data_sec_companies?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_companiesKeySpecifier | (() => undefined | data_sec_companiesKeySpecifier),
		fields?: data_sec_companiesFieldPolicy,
	},
	data_sec_companies_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_companies_aggregateKeySpecifier | (() => undefined | data_sec_companies_aggregateKeySpecifier),
		fields?: data_sec_companies_aggregateFieldPolicy,
	},
	data_sec_companies_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_companies_aggregate_fieldsKeySpecifier | (() => undefined | data_sec_companies_aggregate_fieldsKeySpecifier),
		fields?: data_sec_companies_aggregate_fieldsFieldPolicy,
	},
	data_sec_companies_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_companies_max_fieldsKeySpecifier | (() => undefined | data_sec_companies_max_fieldsKeySpecifier),
		fields?: data_sec_companies_max_fieldsFieldPolicy,
	},
	data_sec_companies_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_companies_min_fieldsKeySpecifier | (() => undefined | data_sec_companies_min_fieldsKeySpecifier),
		fields?: data_sec_companies_min_fieldsFieldPolicy,
	},
	data_sec_companies_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_companies_mutation_responseKeySpecifier | (() => undefined | data_sec_companies_mutation_responseKeySpecifier),
		fields?: data_sec_companies_mutation_responseFieldPolicy,
	},
	data_sec_contracts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contractsKeySpecifier | (() => undefined | data_sec_contractsKeySpecifier),
		fields?: data_sec_contractsFieldPolicy,
	},
	data_sec_contracts_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_aggregateKeySpecifier | (() => undefined | data_sec_contracts_aggregateKeySpecifier),
		fields?: data_sec_contracts_aggregateFieldPolicy,
	},
	data_sec_contracts_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_aggregate_fieldsKeySpecifier | (() => undefined | data_sec_contracts_aggregate_fieldsKeySpecifier),
		fields?: data_sec_contracts_aggregate_fieldsFieldPolicy,
	},
	data_sec_contracts_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_avg_fieldsKeySpecifier | (() => undefined | data_sec_contracts_avg_fieldsKeySpecifier),
		fields?: data_sec_contracts_avg_fieldsFieldPolicy,
	},
	data_sec_contracts_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_max_fieldsKeySpecifier | (() => undefined | data_sec_contracts_max_fieldsKeySpecifier),
		fields?: data_sec_contracts_max_fieldsFieldPolicy,
	},
	data_sec_contracts_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_min_fieldsKeySpecifier | (() => undefined | data_sec_contracts_min_fieldsKeySpecifier),
		fields?: data_sec_contracts_min_fieldsFieldPolicy,
	},
	data_sec_contracts_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_stddev_fieldsKeySpecifier | (() => undefined | data_sec_contracts_stddev_fieldsKeySpecifier),
		fields?: data_sec_contracts_stddev_fieldsFieldPolicy,
	},
	data_sec_contracts_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_stddev_pop_fieldsKeySpecifier | (() => undefined | data_sec_contracts_stddev_pop_fieldsKeySpecifier),
		fields?: data_sec_contracts_stddev_pop_fieldsFieldPolicy,
	},
	data_sec_contracts_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_stddev_samp_fieldsKeySpecifier | (() => undefined | data_sec_contracts_stddev_samp_fieldsKeySpecifier),
		fields?: data_sec_contracts_stddev_samp_fieldsFieldPolicy,
	},
	data_sec_contracts_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_sum_fieldsKeySpecifier | (() => undefined | data_sec_contracts_sum_fieldsKeySpecifier),
		fields?: data_sec_contracts_sum_fieldsFieldPolicy,
	},
	data_sec_contracts_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_var_pop_fieldsKeySpecifier | (() => undefined | data_sec_contracts_var_pop_fieldsKeySpecifier),
		fields?: data_sec_contracts_var_pop_fieldsFieldPolicy,
	},
	data_sec_contracts_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_var_samp_fieldsKeySpecifier | (() => undefined | data_sec_contracts_var_samp_fieldsKeySpecifier),
		fields?: data_sec_contracts_var_samp_fieldsFieldPolicy,
	},
	data_sec_contracts_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_contracts_variance_fieldsKeySpecifier | (() => undefined | data_sec_contracts_variance_fieldsKeySpecifier),
		fields?: data_sec_contracts_variance_fieldsFieldPolicy,
	},
	data_sec_filing_attachments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachmentsKeySpecifier | (() => undefined | data_sec_filing_attachmentsKeySpecifier),
		fields?: data_sec_filing_attachmentsFieldPolicy,
	},
	data_sec_filing_attachments_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_aggregateKeySpecifier | (() => undefined | data_sec_filing_attachments_aggregateKeySpecifier),
		fields?: data_sec_filing_attachments_aggregateFieldPolicy,
	},
	data_sec_filing_attachments_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_aggregate_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_aggregate_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_aggregate_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_avg_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_avg_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_avg_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_max_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_max_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_max_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_min_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_min_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_min_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_mutation_responseKeySpecifier | (() => undefined | data_sec_filing_attachments_mutation_responseKeySpecifier),
		fields?: data_sec_filing_attachments_mutation_responseFieldPolicy,
	},
	data_sec_filing_attachments_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_stddev_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_stddev_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_stddev_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_stddev_pop_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_stddev_pop_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_stddev_pop_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_stddev_samp_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_stddev_samp_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_stddev_samp_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_sum_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_sum_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_sum_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_var_pop_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_var_pop_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_var_pop_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_var_samp_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_var_samp_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_var_samp_fieldsFieldPolicy,
	},
	data_sec_filing_attachments_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filing_attachments_variance_fieldsKeySpecifier | (() => undefined | data_sec_filing_attachments_variance_fieldsKeySpecifier),
		fields?: data_sec_filing_attachments_variance_fieldsFieldPolicy,
	},
	data_sec_filings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filingsKeySpecifier | (() => undefined | data_sec_filingsKeySpecifier),
		fields?: data_sec_filingsFieldPolicy,
	},
	data_sec_filings_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filings_aggregateKeySpecifier | (() => undefined | data_sec_filings_aggregateKeySpecifier),
		fields?: data_sec_filings_aggregateFieldPolicy,
	},
	data_sec_filings_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filings_aggregate_fieldsKeySpecifier | (() => undefined | data_sec_filings_aggregate_fieldsKeySpecifier),
		fields?: data_sec_filings_aggregate_fieldsFieldPolicy,
	},
	data_sec_filings_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filings_max_fieldsKeySpecifier | (() => undefined | data_sec_filings_max_fieldsKeySpecifier),
		fields?: data_sec_filings_max_fieldsFieldPolicy,
	},
	data_sec_filings_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filings_min_fieldsKeySpecifier | (() => undefined | data_sec_filings_min_fieldsKeySpecifier),
		fields?: data_sec_filings_min_fieldsFieldPolicy,
	},
	data_sec_filings_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | data_sec_filings_mutation_responseKeySpecifier | (() => undefined | data_sec_filings_mutation_responseKeySpecifier),
		fields?: data_sec_filings_mutation_responseFieldPolicy,
	},
	migrations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrationsKeySpecifier | (() => undefined | migrationsKeySpecifier),
		fields?: migrationsFieldPolicy,
	},
	migrations_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_aggregateKeySpecifier | (() => undefined | migrations_aggregateKeySpecifier),
		fields?: migrations_aggregateFieldPolicy,
	},
	migrations_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_aggregate_fieldsKeySpecifier | (() => undefined | migrations_aggregate_fieldsKeySpecifier),
		fields?: migrations_aggregate_fieldsFieldPolicy,
	},
	migrations_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_avg_fieldsKeySpecifier | (() => undefined | migrations_avg_fieldsKeySpecifier),
		fields?: migrations_avg_fieldsFieldPolicy,
	},
	migrations_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_max_fieldsKeySpecifier | (() => undefined | migrations_max_fieldsKeySpecifier),
		fields?: migrations_max_fieldsFieldPolicy,
	},
	migrations_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_min_fieldsKeySpecifier | (() => undefined | migrations_min_fieldsKeySpecifier),
		fields?: migrations_min_fieldsFieldPolicy,
	},
	migrations_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_mutation_responseKeySpecifier | (() => undefined | migrations_mutation_responseKeySpecifier),
		fields?: migrations_mutation_responseFieldPolicy,
	},
	migrations_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_stddev_fieldsKeySpecifier | (() => undefined | migrations_stddev_fieldsKeySpecifier),
		fields?: migrations_stddev_fieldsFieldPolicy,
	},
	migrations_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_stddev_pop_fieldsKeySpecifier | (() => undefined | migrations_stddev_pop_fieldsKeySpecifier),
		fields?: migrations_stddev_pop_fieldsFieldPolicy,
	},
	migrations_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_stddev_samp_fieldsKeySpecifier | (() => undefined | migrations_stddev_samp_fieldsKeySpecifier),
		fields?: migrations_stddev_samp_fieldsFieldPolicy,
	},
	migrations_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_sum_fieldsKeySpecifier | (() => undefined | migrations_sum_fieldsKeySpecifier),
		fields?: migrations_sum_fieldsFieldPolicy,
	},
	migrations_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_var_pop_fieldsKeySpecifier | (() => undefined | migrations_var_pop_fieldsKeySpecifier),
		fields?: migrations_var_pop_fieldsFieldPolicy,
	},
	migrations_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_var_samp_fieldsKeySpecifier | (() => undefined | migrations_var_samp_fieldsKeySpecifier),
		fields?: migrations_var_samp_fieldsFieldPolicy,
	},
	migrations_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | migrations_variance_fieldsKeySpecifier | (() => undefined | migrations_variance_fieldsKeySpecifier),
		fields?: migrations_variance_fieldsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	}
};