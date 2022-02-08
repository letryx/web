import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
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
export type mutation_rootKeySpecifier = ('delete_migrations' | 'delete_migrations_by_pk' | 'delete_org' | 'delete_org_by_pk' | 'delete_org_type' | 'delete_org_type_by_pk' | 'delete_sec_company' | 'delete_sec_company_by_pk' | 'delete_sec_contract_type' | 'delete_sec_contract_type_by_pk' | 'delete_sec_filing' | 'delete_sec_filing_attachment' | 'delete_sec_filing_attachment_by_pk' | 'delete_sec_filing_by_pk' | 'delete_user' | 'delete_user_by_pk' | 'insert_migrations' | 'insert_migrations_one' | 'insert_org' | 'insert_org_one' | 'insert_org_type' | 'insert_org_type_one' | 'insert_sec_company' | 'insert_sec_company_one' | 'insert_sec_contract_type' | 'insert_sec_contract_type_one' | 'insert_sec_filing' | 'insert_sec_filing_attachment' | 'insert_sec_filing_attachment_one' | 'insert_sec_filing_one' | 'insert_user' | 'insert_user_one' | 'update_migrations' | 'update_migrations_by_pk' | 'update_org' | 'update_org_by_pk' | 'update_org_type' | 'update_org_type_by_pk' | 'update_sec_company' | 'update_sec_company_by_pk' | 'update_sec_contract_type' | 'update_sec_contract_type_by_pk' | 'update_sec_filing' | 'update_sec_filing_attachment' | 'update_sec_filing_attachment_by_pk' | 'update_sec_filing_by_pk' | 'update_user' | 'update_user_by_pk' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_org?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_org_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_org_type?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_org_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_company_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_contract_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_filing_attachment?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_filing_attachment_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_sec_filing_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_migrations_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_org?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_org_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_org_type?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_org_type_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_company_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_contract_type_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_filing_attachment?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_filing_attachment_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_sec_filing_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	update_migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_org?: FieldPolicy<any> | FieldReadFunction<any>,
	update_org_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_org_type?: FieldPolicy<any> | FieldReadFunction<any>,
	update_org_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_company_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_contract_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_filing_attachment?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_filing_attachment_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_sec_filing_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type orgKeySpecifier = ('auth0_connection_id' | 'auth0_connection_name' | 'created_at' | 'id' | 'name' | 'org_type' | 'type' | 'updated_at' | 'users' | 'users_aggregate' | orgKeySpecifier)[];
export type orgFieldPolicy = {
	auth0_connection_id?: FieldPolicy<any> | FieldReadFunction<any>,
	auth0_connection_name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_aggregateKeySpecifier = ('aggregate' | 'nodes' | org_aggregateKeySpecifier)[];
export type org_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | org_aggregate_fieldsKeySpecifier)[];
export type org_aggregate_fieldsFieldPolicy = {
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
export type org_avg_fieldsKeySpecifier = ('id' | org_avg_fieldsKeySpecifier)[];
export type org_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_max_fieldsKeySpecifier = ('auth0_connection_id' | 'auth0_connection_name' | 'created_at' | 'id' | 'name' | 'updated_at' | org_max_fieldsKeySpecifier)[];
export type org_max_fieldsFieldPolicy = {
	auth0_connection_id?: FieldPolicy<any> | FieldReadFunction<any>,
	auth0_connection_name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_min_fieldsKeySpecifier = ('auth0_connection_id' | 'auth0_connection_name' | 'created_at' | 'id' | 'name' | 'updated_at' | org_min_fieldsKeySpecifier)[];
export type org_min_fieldsFieldPolicy = {
	auth0_connection_id?: FieldPolicy<any> | FieldReadFunction<any>,
	auth0_connection_name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | org_mutation_responseKeySpecifier)[];
export type org_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_stddev_fieldsKeySpecifier = ('id' | org_stddev_fieldsKeySpecifier)[];
export type org_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_stddev_pop_fieldsKeySpecifier = ('id' | org_stddev_pop_fieldsKeySpecifier)[];
export type org_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_stddev_samp_fieldsKeySpecifier = ('id' | org_stddev_samp_fieldsKeySpecifier)[];
export type org_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_sum_fieldsKeySpecifier = ('id' | org_sum_fieldsKeySpecifier)[];
export type org_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_typeKeySpecifier = ('comment' | 'orgs' | 'orgs_aggregate' | 'value' | org_typeKeySpecifier)[];
export type org_typeFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_type_aggregateKeySpecifier = ('aggregate' | 'nodes' | org_type_aggregateKeySpecifier)[];
export type org_type_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_type_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | org_type_aggregate_fieldsKeySpecifier)[];
export type org_type_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_type_max_fieldsKeySpecifier = ('comment' | 'value' | org_type_max_fieldsKeySpecifier)[];
export type org_type_max_fieldsFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_type_min_fieldsKeySpecifier = ('comment' | 'value' | org_type_min_fieldsKeySpecifier)[];
export type org_type_min_fieldsFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_type_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | org_type_mutation_responseKeySpecifier)[];
export type org_type_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_var_pop_fieldsKeySpecifier = ('id' | org_var_pop_fieldsKeySpecifier)[];
export type org_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_var_samp_fieldsKeySpecifier = ('id' | org_var_samp_fieldsKeySpecifier)[];
export type org_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_variance_fieldsKeySpecifier = ('id' | org_variance_fieldsKeySpecifier)[];
export type org_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('migrations' | 'migrations_aggregate' | 'migrations_by_pk' | 'org' | 'org_aggregate' | 'org_by_pk' | 'org_type' | 'org_type_aggregate' | 'org_type_by_pk' | 'sec_company' | 'sec_company_aggregate' | 'sec_company_by_pk' | 'sec_contract' | 'sec_contract_aggregate' | 'sec_contract_type' | 'sec_contract_type_aggregate' | 'sec_contract_type_by_pk' | 'sec_filing' | 'sec_filing_aggregate' | 'sec_filing_attachment' | 'sec_filing_attachment_aggregate' | 'sec_filing_attachment_by_pk' | 'sec_filing_by_pk' | 'sec_search' | 'sec_search_aggregate' | 'user' | 'user_aggregate' | 'user_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_search?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_search_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_companyKeySpecifier = ('cik' | 'created_at' | 'geo' | 'name' | 'sec_filing_attachments' | 'sec_filing_attachments_aggregate' | 'sec_filings' | 'sec_filings_aggregate' | 'sic' | 'sic_name' | 'updated_at' | sec_companyKeySpecifier)[];
export type sec_companyFieldPolicy = {
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filings?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filings_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sic?: FieldPolicy<any> | FieldReadFunction<any>,
	sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_company_aggregateKeySpecifier = ('aggregate' | 'nodes' | sec_company_aggregateKeySpecifier)[];
export type sec_company_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_company_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | sec_company_aggregate_fieldsKeySpecifier)[];
export type sec_company_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_company_max_fieldsKeySpecifier = ('cik' | 'created_at' | 'geo' | 'name' | 'sic' | 'sic_name' | 'updated_at' | sec_company_max_fieldsKeySpecifier)[];
export type sec_company_max_fieldsFieldPolicy = {
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sic?: FieldPolicy<any> | FieldReadFunction<any>,
	sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_company_min_fieldsKeySpecifier = ('cik' | 'created_at' | 'geo' | 'name' | 'sic' | 'sic_name' | 'updated_at' | sec_company_min_fieldsKeySpecifier)[];
export type sec_company_min_fieldsFieldPolicy = {
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sic?: FieldPolicy<any> | FieldReadFunction<any>,
	sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_company_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | sec_company_mutation_responseKeySpecifier)[];
export type sec_company_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contractKeySpecifier = ('accession_number' | 'attachment_type' | 'company_cik' | 'company_geo' | 'company_name' | 'company_sic' | 'company_sic_name' | 'contract_type' | 'contract_type_id' | 'description' | 'filing_date' | 'filing_header' | 'filing_type' | 'relevance' | 'sequence' | 'tsv_search_text' | 'uid' | sec_contractKeySpecifier)[];
export type sec_contractFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	attachment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	company_cik?: FieldPolicy<any> | FieldReadFunction<any>,
	company_geo?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	company_sic?: FieldPolicy<any> | FieldReadFunction<any>,
	company_sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_date?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_header?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	tsv_search_text?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_aggregateKeySpecifier = ('aggregate' | 'nodes' | sec_contract_aggregateKeySpecifier)[];
export type sec_contract_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | sec_contract_aggregate_fieldsKeySpecifier)[];
export type sec_contract_aggregate_fieldsFieldPolicy = {
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
export type sec_contract_avg_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_avg_fieldsKeySpecifier)[];
export type sec_contract_avg_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_max_fieldsKeySpecifier = ('accession_number' | 'attachment_type' | 'company_cik' | 'company_geo' | 'company_name' | 'company_sic' | 'company_sic_name' | 'contract_type_id' | 'description' | 'filing_date' | 'filing_header' | 'filing_type' | 'relevance' | 'sequence' | 'uid' | sec_contract_max_fieldsKeySpecifier)[];
export type sec_contract_max_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	attachment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	company_cik?: FieldPolicy<any> | FieldReadFunction<any>,
	company_geo?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	company_sic?: FieldPolicy<any> | FieldReadFunction<any>,
	company_sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_date?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_header?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_min_fieldsKeySpecifier = ('accession_number' | 'attachment_type' | 'company_cik' | 'company_geo' | 'company_name' | 'company_sic' | 'company_sic_name' | 'contract_type_id' | 'description' | 'filing_date' | 'filing_header' | 'filing_type' | 'relevance' | 'sequence' | 'uid' | sec_contract_min_fieldsKeySpecifier)[];
export type sec_contract_min_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	attachment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	company_cik?: FieldPolicy<any> | FieldReadFunction<any>,
	company_geo?: FieldPolicy<any> | FieldReadFunction<any>,
	company_name?: FieldPolicy<any> | FieldReadFunction<any>,
	company_sic?: FieldPolicy<any> | FieldReadFunction<any>,
	company_sic_name?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_date?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_header?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_stddev_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_stddev_fieldsKeySpecifier)[];
export type sec_contract_stddev_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_stddev_pop_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_stddev_pop_fieldsKeySpecifier)[];
export type sec_contract_stddev_pop_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_stddev_samp_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_stddev_samp_fieldsKeySpecifier)[];
export type sec_contract_stddev_samp_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_sum_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_sum_fieldsKeySpecifier)[];
export type sec_contract_sum_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_typeKeySpecifier = ('id' | 'name' | 'parent_id' | 'parent_type' | 'sub_types' | 'sub_types_aggregate' | sec_contract_typeKeySpecifier)[];
export type sec_contract_typeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_types?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_types_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_aggregateKeySpecifier = ('aggregate' | 'nodes' | sec_contract_type_aggregateKeySpecifier)[];
export type sec_contract_type_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | sec_contract_type_aggregate_fieldsKeySpecifier)[];
export type sec_contract_type_aggregate_fieldsFieldPolicy = {
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
export type sec_contract_type_avg_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_avg_fieldsKeySpecifier)[];
export type sec_contract_type_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_max_fieldsKeySpecifier = ('id' | 'name' | 'parent_id' | sec_contract_type_max_fieldsKeySpecifier)[];
export type sec_contract_type_max_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_min_fieldsKeySpecifier = ('id' | 'name' | 'parent_id' | sec_contract_type_min_fieldsKeySpecifier)[];
export type sec_contract_type_min_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | sec_contract_type_mutation_responseKeySpecifier)[];
export type sec_contract_type_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_stddev_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_stddev_fieldsKeySpecifier)[];
export type sec_contract_type_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_stddev_pop_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_stddev_pop_fieldsKeySpecifier)[];
export type sec_contract_type_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_stddev_samp_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_stddev_samp_fieldsKeySpecifier)[];
export type sec_contract_type_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_sum_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_sum_fieldsKeySpecifier)[];
export type sec_contract_type_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_var_pop_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_var_pop_fieldsKeySpecifier)[];
export type sec_contract_type_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_var_samp_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_var_samp_fieldsKeySpecifier)[];
export type sec_contract_type_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_type_variance_fieldsKeySpecifier = ('id' | 'parent_id' | sec_contract_type_variance_fieldsKeySpecifier)[];
export type sec_contract_type_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_var_pop_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_var_pop_fieldsKeySpecifier)[];
export type sec_contract_var_pop_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_var_samp_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_var_samp_fieldsKeySpecifier)[];
export type sec_contract_var_samp_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_contract_variance_fieldsKeySpecifier = ('contract_type_id' | 'relevance' | 'sequence' | sec_contract_variance_fieldsKeySpecifier)[];
export type sec_contract_variance_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	relevance?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filingKeySpecifier = ('accession_number' | 'cik' | 'created_at' | 'filing_date' | 'filing_type' | 'header' | 'sec_company' | 'sec_filing_attachment' | 'sec_filing_attachment_aggregate' | 'updated_at' | sec_filingKeySpecifier)[];
export type sec_filingFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_date?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_aggregateKeySpecifier = ('aggregate' | 'nodes' | sec_filing_aggregateKeySpecifier)[];
export type sec_filing_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | sec_filing_aggregate_fieldsKeySpecifier)[];
export type sec_filing_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachmentKeySpecifier = ('accession_number' | 'attachment_type' | 'cik' | 'contents' | 'contract_type_id' | 'created_at' | 'description' | 'filename' | 'sec_company' | 'sec_contract_type' | 'sec_filing' | 'sequence' | 'text' | 'tsv_search_text' | 'uid' | 'updated_at' | sec_filing_attachmentKeySpecifier)[];
export type sec_filing_attachmentFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	attachment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	tsv_search_text?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_aggregateKeySpecifier = ('aggregate' | 'nodes' | sec_filing_attachment_aggregateKeySpecifier)[];
export type sec_filing_attachment_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | sec_filing_attachment_aggregate_fieldsKeySpecifier)[];
export type sec_filing_attachment_aggregate_fieldsFieldPolicy = {
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
export type sec_filing_attachment_avg_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_avg_fieldsKeySpecifier)[];
export type sec_filing_attachment_avg_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_max_fieldsKeySpecifier = ('accession_number' | 'attachment_type' | 'cik' | 'contents' | 'contract_type_id' | 'created_at' | 'description' | 'filename' | 'sequence' | 'text' | 'uid' | 'updated_at' | sec_filing_attachment_max_fieldsKeySpecifier)[];
export type sec_filing_attachment_max_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	attachment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_min_fieldsKeySpecifier = ('accession_number' | 'attachment_type' | 'cik' | 'contents' | 'contract_type_id' | 'created_at' | 'description' | 'filename' | 'sequence' | 'text' | 'uid' | 'updated_at' | sec_filing_attachment_min_fieldsKeySpecifier)[];
export type sec_filing_attachment_min_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	attachment_type?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	contents?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | sec_filing_attachment_mutation_responseKeySpecifier)[];
export type sec_filing_attachment_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_stddev_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_stddev_fieldsKeySpecifier)[];
export type sec_filing_attachment_stddev_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_stddev_pop_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_stddev_pop_fieldsKeySpecifier)[];
export type sec_filing_attachment_stddev_pop_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_stddev_samp_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_stddev_samp_fieldsKeySpecifier)[];
export type sec_filing_attachment_stddev_samp_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_sum_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_sum_fieldsKeySpecifier)[];
export type sec_filing_attachment_sum_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_var_pop_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_var_pop_fieldsKeySpecifier)[];
export type sec_filing_attachment_var_pop_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_var_samp_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_var_samp_fieldsKeySpecifier)[];
export type sec_filing_attachment_var_samp_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_attachment_variance_fieldsKeySpecifier = ('contract_type_id' | 'sequence' | sec_filing_attachment_variance_fieldsKeySpecifier)[];
export type sec_filing_attachment_variance_fieldsFieldPolicy = {
	contract_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_max_fieldsKeySpecifier = ('accession_number' | 'cik' | 'created_at' | 'filing_date' | 'filing_type' | 'header' | 'updated_at' | sec_filing_max_fieldsKeySpecifier)[];
export type sec_filing_max_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_date?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_min_fieldsKeySpecifier = ('accession_number' | 'cik' | 'created_at' | 'filing_date' | 'filing_type' | 'header' | 'updated_at' | sec_filing_min_fieldsKeySpecifier)[];
export type sec_filing_min_fieldsFieldPolicy = {
	accession_number?: FieldPolicy<any> | FieldReadFunction<any>,
	cik?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_date?: FieldPolicy<any> | FieldReadFunction<any>,
	filing_type?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type sec_filing_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | sec_filing_mutation_responseKeySpecifier)[];
export type sec_filing_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('migrations' | 'migrations_aggregate' | 'migrations_by_pk' | 'org' | 'org_aggregate' | 'org_by_pk' | 'org_type' | 'org_type_aggregate' | 'org_type_by_pk' | 'sec_company' | 'sec_company_aggregate' | 'sec_company_by_pk' | 'sec_contract' | 'sec_contract_aggregate' | 'sec_contract_type' | 'sec_contract_type_aggregate' | 'sec_contract_type_by_pk' | 'sec_filing' | 'sec_filing_aggregate' | 'sec_filing_attachment' | 'sec_filing_attachment_aggregate' | 'sec_filing_attachment_by_pk' | 'sec_filing_by_pk' | 'sec_search' | 'sec_search_aggregate' | 'user' | 'user_aggregate' | 'user_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_company_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_contract_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_attachment_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_filing_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_search?: FieldPolicy<any> | FieldReadFunction<any>,
	sec_search_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type userKeySpecifier = ('auth0_id' | 'created_at' | 'default_org' | 'default_org_id' | 'email' | 'family_name' | 'given_name' | 'id' | 'name' | 'nickname' | 'photo_url' | 'updated_at' | userKeySpecifier)[];
export type userFieldPolicy = {
	auth0_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	default_org?: FieldPolicy<any> | FieldReadFunction<any>,
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	family_name?: FieldPolicy<any> | FieldReadFunction<any>,
	given_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	photo_url?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_aggregateKeySpecifier)[];
export type user_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | user_aggregate_fieldsKeySpecifier)[];
export type user_aggregate_fieldsFieldPolicy = {
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
export type user_avg_fieldsKeySpecifier = ('default_org_id' | 'id' | user_avg_fieldsKeySpecifier)[];
export type user_avg_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_max_fieldsKeySpecifier = ('auth0_id' | 'created_at' | 'default_org_id' | 'email' | 'family_name' | 'given_name' | 'id' | 'name' | 'nickname' | 'photo_url' | 'updated_at' | user_max_fieldsKeySpecifier)[];
export type user_max_fieldsFieldPolicy = {
	auth0_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	family_name?: FieldPolicy<any> | FieldReadFunction<any>,
	given_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	photo_url?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_min_fieldsKeySpecifier = ('auth0_id' | 'created_at' | 'default_org_id' | 'email' | 'family_name' | 'given_name' | 'id' | 'name' | 'nickname' | 'photo_url' | 'updated_at' | user_min_fieldsKeySpecifier)[];
export type user_min_fieldsFieldPolicy = {
	auth0_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	family_name?: FieldPolicy<any> | FieldReadFunction<any>,
	given_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	photo_url?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_mutation_responseKeySpecifier)[];
export type user_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_stddev_fieldsKeySpecifier = ('default_org_id' | 'id' | user_stddev_fieldsKeySpecifier)[];
export type user_stddev_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_stddev_pop_fieldsKeySpecifier = ('default_org_id' | 'id' | user_stddev_pop_fieldsKeySpecifier)[];
export type user_stddev_pop_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_stddev_samp_fieldsKeySpecifier = ('default_org_id' | 'id' | user_stddev_samp_fieldsKeySpecifier)[];
export type user_stddev_samp_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_sum_fieldsKeySpecifier = ('default_org_id' | 'id' | user_sum_fieldsKeySpecifier)[];
export type user_sum_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_var_pop_fieldsKeySpecifier = ('default_org_id' | 'id' | user_var_pop_fieldsKeySpecifier)[];
export type user_var_pop_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_var_samp_fieldsKeySpecifier = ('default_org_id' | 'id' | user_var_samp_fieldsKeySpecifier)[];
export type user_var_samp_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_variance_fieldsKeySpecifier = ('default_org_id' | 'id' | user_variance_fieldsKeySpecifier)[];
export type user_variance_fieldsFieldPolicy = {
	default_org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
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
	org?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | orgKeySpecifier | (() => undefined | orgKeySpecifier),
		fields?: orgFieldPolicy,
	},
	org_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_aggregateKeySpecifier | (() => undefined | org_aggregateKeySpecifier),
		fields?: org_aggregateFieldPolicy,
	},
	org_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_aggregate_fieldsKeySpecifier | (() => undefined | org_aggregate_fieldsKeySpecifier),
		fields?: org_aggregate_fieldsFieldPolicy,
	},
	org_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_avg_fieldsKeySpecifier | (() => undefined | org_avg_fieldsKeySpecifier),
		fields?: org_avg_fieldsFieldPolicy,
	},
	org_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_max_fieldsKeySpecifier | (() => undefined | org_max_fieldsKeySpecifier),
		fields?: org_max_fieldsFieldPolicy,
	},
	org_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_min_fieldsKeySpecifier | (() => undefined | org_min_fieldsKeySpecifier),
		fields?: org_min_fieldsFieldPolicy,
	},
	org_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_mutation_responseKeySpecifier | (() => undefined | org_mutation_responseKeySpecifier),
		fields?: org_mutation_responseFieldPolicy,
	},
	org_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_stddev_fieldsKeySpecifier | (() => undefined | org_stddev_fieldsKeySpecifier),
		fields?: org_stddev_fieldsFieldPolicy,
	},
	org_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_stddev_pop_fieldsKeySpecifier | (() => undefined | org_stddev_pop_fieldsKeySpecifier),
		fields?: org_stddev_pop_fieldsFieldPolicy,
	},
	org_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_stddev_samp_fieldsKeySpecifier | (() => undefined | org_stddev_samp_fieldsKeySpecifier),
		fields?: org_stddev_samp_fieldsFieldPolicy,
	},
	org_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_sum_fieldsKeySpecifier | (() => undefined | org_sum_fieldsKeySpecifier),
		fields?: org_sum_fieldsFieldPolicy,
	},
	org_type?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_typeKeySpecifier | (() => undefined | org_typeKeySpecifier),
		fields?: org_typeFieldPolicy,
	},
	org_type_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_type_aggregateKeySpecifier | (() => undefined | org_type_aggregateKeySpecifier),
		fields?: org_type_aggregateFieldPolicy,
	},
	org_type_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_type_aggregate_fieldsKeySpecifier | (() => undefined | org_type_aggregate_fieldsKeySpecifier),
		fields?: org_type_aggregate_fieldsFieldPolicy,
	},
	org_type_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_type_max_fieldsKeySpecifier | (() => undefined | org_type_max_fieldsKeySpecifier),
		fields?: org_type_max_fieldsFieldPolicy,
	},
	org_type_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_type_min_fieldsKeySpecifier | (() => undefined | org_type_min_fieldsKeySpecifier),
		fields?: org_type_min_fieldsFieldPolicy,
	},
	org_type_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_type_mutation_responseKeySpecifier | (() => undefined | org_type_mutation_responseKeySpecifier),
		fields?: org_type_mutation_responseFieldPolicy,
	},
	org_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_var_pop_fieldsKeySpecifier | (() => undefined | org_var_pop_fieldsKeySpecifier),
		fields?: org_var_pop_fieldsFieldPolicy,
	},
	org_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_var_samp_fieldsKeySpecifier | (() => undefined | org_var_samp_fieldsKeySpecifier),
		fields?: org_var_samp_fieldsFieldPolicy,
	},
	org_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_variance_fieldsKeySpecifier | (() => undefined | org_variance_fieldsKeySpecifier),
		fields?: org_variance_fieldsFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	sec_company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_companyKeySpecifier | (() => undefined | sec_companyKeySpecifier),
		fields?: sec_companyFieldPolicy,
	},
	sec_company_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_company_aggregateKeySpecifier | (() => undefined | sec_company_aggregateKeySpecifier),
		fields?: sec_company_aggregateFieldPolicy,
	},
	sec_company_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_company_aggregate_fieldsKeySpecifier | (() => undefined | sec_company_aggregate_fieldsKeySpecifier),
		fields?: sec_company_aggregate_fieldsFieldPolicy,
	},
	sec_company_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_company_max_fieldsKeySpecifier | (() => undefined | sec_company_max_fieldsKeySpecifier),
		fields?: sec_company_max_fieldsFieldPolicy,
	},
	sec_company_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_company_min_fieldsKeySpecifier | (() => undefined | sec_company_min_fieldsKeySpecifier),
		fields?: sec_company_min_fieldsFieldPolicy,
	},
	sec_company_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_company_mutation_responseKeySpecifier | (() => undefined | sec_company_mutation_responseKeySpecifier),
		fields?: sec_company_mutation_responseFieldPolicy,
	},
	sec_contract?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contractKeySpecifier | (() => undefined | sec_contractKeySpecifier),
		fields?: sec_contractFieldPolicy,
	},
	sec_contract_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_aggregateKeySpecifier | (() => undefined | sec_contract_aggregateKeySpecifier),
		fields?: sec_contract_aggregateFieldPolicy,
	},
	sec_contract_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_aggregate_fieldsKeySpecifier | (() => undefined | sec_contract_aggregate_fieldsKeySpecifier),
		fields?: sec_contract_aggregate_fieldsFieldPolicy,
	},
	sec_contract_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_avg_fieldsKeySpecifier | (() => undefined | sec_contract_avg_fieldsKeySpecifier),
		fields?: sec_contract_avg_fieldsFieldPolicy,
	},
	sec_contract_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_max_fieldsKeySpecifier | (() => undefined | sec_contract_max_fieldsKeySpecifier),
		fields?: sec_contract_max_fieldsFieldPolicy,
	},
	sec_contract_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_min_fieldsKeySpecifier | (() => undefined | sec_contract_min_fieldsKeySpecifier),
		fields?: sec_contract_min_fieldsFieldPolicy,
	},
	sec_contract_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_stddev_fieldsKeySpecifier | (() => undefined | sec_contract_stddev_fieldsKeySpecifier),
		fields?: sec_contract_stddev_fieldsFieldPolicy,
	},
	sec_contract_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_stddev_pop_fieldsKeySpecifier | (() => undefined | sec_contract_stddev_pop_fieldsKeySpecifier),
		fields?: sec_contract_stddev_pop_fieldsFieldPolicy,
	},
	sec_contract_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_stddev_samp_fieldsKeySpecifier | (() => undefined | sec_contract_stddev_samp_fieldsKeySpecifier),
		fields?: sec_contract_stddev_samp_fieldsFieldPolicy,
	},
	sec_contract_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_sum_fieldsKeySpecifier | (() => undefined | sec_contract_sum_fieldsKeySpecifier),
		fields?: sec_contract_sum_fieldsFieldPolicy,
	},
	sec_contract_type?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_typeKeySpecifier | (() => undefined | sec_contract_typeKeySpecifier),
		fields?: sec_contract_typeFieldPolicy,
	},
	sec_contract_type_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_aggregateKeySpecifier | (() => undefined | sec_contract_type_aggregateKeySpecifier),
		fields?: sec_contract_type_aggregateFieldPolicy,
	},
	sec_contract_type_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_aggregate_fieldsKeySpecifier | (() => undefined | sec_contract_type_aggregate_fieldsKeySpecifier),
		fields?: sec_contract_type_aggregate_fieldsFieldPolicy,
	},
	sec_contract_type_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_avg_fieldsKeySpecifier | (() => undefined | sec_contract_type_avg_fieldsKeySpecifier),
		fields?: sec_contract_type_avg_fieldsFieldPolicy,
	},
	sec_contract_type_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_max_fieldsKeySpecifier | (() => undefined | sec_contract_type_max_fieldsKeySpecifier),
		fields?: sec_contract_type_max_fieldsFieldPolicy,
	},
	sec_contract_type_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_min_fieldsKeySpecifier | (() => undefined | sec_contract_type_min_fieldsKeySpecifier),
		fields?: sec_contract_type_min_fieldsFieldPolicy,
	},
	sec_contract_type_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_mutation_responseKeySpecifier | (() => undefined | sec_contract_type_mutation_responseKeySpecifier),
		fields?: sec_contract_type_mutation_responseFieldPolicy,
	},
	sec_contract_type_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_stddev_fieldsKeySpecifier | (() => undefined | sec_contract_type_stddev_fieldsKeySpecifier),
		fields?: sec_contract_type_stddev_fieldsFieldPolicy,
	},
	sec_contract_type_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_stddev_pop_fieldsKeySpecifier | (() => undefined | sec_contract_type_stddev_pop_fieldsKeySpecifier),
		fields?: sec_contract_type_stddev_pop_fieldsFieldPolicy,
	},
	sec_contract_type_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_stddev_samp_fieldsKeySpecifier | (() => undefined | sec_contract_type_stddev_samp_fieldsKeySpecifier),
		fields?: sec_contract_type_stddev_samp_fieldsFieldPolicy,
	},
	sec_contract_type_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_sum_fieldsKeySpecifier | (() => undefined | sec_contract_type_sum_fieldsKeySpecifier),
		fields?: sec_contract_type_sum_fieldsFieldPolicy,
	},
	sec_contract_type_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_var_pop_fieldsKeySpecifier | (() => undefined | sec_contract_type_var_pop_fieldsKeySpecifier),
		fields?: sec_contract_type_var_pop_fieldsFieldPolicy,
	},
	sec_contract_type_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_var_samp_fieldsKeySpecifier | (() => undefined | sec_contract_type_var_samp_fieldsKeySpecifier),
		fields?: sec_contract_type_var_samp_fieldsFieldPolicy,
	},
	sec_contract_type_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_type_variance_fieldsKeySpecifier | (() => undefined | sec_contract_type_variance_fieldsKeySpecifier),
		fields?: sec_contract_type_variance_fieldsFieldPolicy,
	},
	sec_contract_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_var_pop_fieldsKeySpecifier | (() => undefined | sec_contract_var_pop_fieldsKeySpecifier),
		fields?: sec_contract_var_pop_fieldsFieldPolicy,
	},
	sec_contract_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_var_samp_fieldsKeySpecifier | (() => undefined | sec_contract_var_samp_fieldsKeySpecifier),
		fields?: sec_contract_var_samp_fieldsFieldPolicy,
	},
	sec_contract_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_contract_variance_fieldsKeySpecifier | (() => undefined | sec_contract_variance_fieldsKeySpecifier),
		fields?: sec_contract_variance_fieldsFieldPolicy,
	},
	sec_filing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filingKeySpecifier | (() => undefined | sec_filingKeySpecifier),
		fields?: sec_filingFieldPolicy,
	},
	sec_filing_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_aggregateKeySpecifier | (() => undefined | sec_filing_aggregateKeySpecifier),
		fields?: sec_filing_aggregateFieldPolicy,
	},
	sec_filing_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_aggregate_fieldsKeySpecifier | (() => undefined | sec_filing_aggregate_fieldsKeySpecifier),
		fields?: sec_filing_aggregate_fieldsFieldPolicy,
	},
	sec_filing_attachment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachmentKeySpecifier | (() => undefined | sec_filing_attachmentKeySpecifier),
		fields?: sec_filing_attachmentFieldPolicy,
	},
	sec_filing_attachment_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_aggregateKeySpecifier | (() => undefined | sec_filing_attachment_aggregateKeySpecifier),
		fields?: sec_filing_attachment_aggregateFieldPolicy,
	},
	sec_filing_attachment_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_aggregate_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_aggregate_fieldsKeySpecifier),
		fields?: sec_filing_attachment_aggregate_fieldsFieldPolicy,
	},
	sec_filing_attachment_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_avg_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_avg_fieldsKeySpecifier),
		fields?: sec_filing_attachment_avg_fieldsFieldPolicy,
	},
	sec_filing_attachment_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_max_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_max_fieldsKeySpecifier),
		fields?: sec_filing_attachment_max_fieldsFieldPolicy,
	},
	sec_filing_attachment_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_min_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_min_fieldsKeySpecifier),
		fields?: sec_filing_attachment_min_fieldsFieldPolicy,
	},
	sec_filing_attachment_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_mutation_responseKeySpecifier | (() => undefined | sec_filing_attachment_mutation_responseKeySpecifier),
		fields?: sec_filing_attachment_mutation_responseFieldPolicy,
	},
	sec_filing_attachment_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_stddev_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_stddev_fieldsKeySpecifier),
		fields?: sec_filing_attachment_stddev_fieldsFieldPolicy,
	},
	sec_filing_attachment_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_stddev_pop_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_stddev_pop_fieldsKeySpecifier),
		fields?: sec_filing_attachment_stddev_pop_fieldsFieldPolicy,
	},
	sec_filing_attachment_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_stddev_samp_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_stddev_samp_fieldsKeySpecifier),
		fields?: sec_filing_attachment_stddev_samp_fieldsFieldPolicy,
	},
	sec_filing_attachment_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_sum_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_sum_fieldsKeySpecifier),
		fields?: sec_filing_attachment_sum_fieldsFieldPolicy,
	},
	sec_filing_attachment_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_var_pop_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_var_pop_fieldsKeySpecifier),
		fields?: sec_filing_attachment_var_pop_fieldsFieldPolicy,
	},
	sec_filing_attachment_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_var_samp_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_var_samp_fieldsKeySpecifier),
		fields?: sec_filing_attachment_var_samp_fieldsFieldPolicy,
	},
	sec_filing_attachment_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_attachment_variance_fieldsKeySpecifier | (() => undefined | sec_filing_attachment_variance_fieldsKeySpecifier),
		fields?: sec_filing_attachment_variance_fieldsFieldPolicy,
	},
	sec_filing_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_max_fieldsKeySpecifier | (() => undefined | sec_filing_max_fieldsKeySpecifier),
		fields?: sec_filing_max_fieldsFieldPolicy,
	},
	sec_filing_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_min_fieldsKeySpecifier | (() => undefined | sec_filing_min_fieldsKeySpecifier),
		fields?: sec_filing_min_fieldsFieldPolicy,
	},
	sec_filing_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | sec_filing_mutation_responseKeySpecifier | (() => undefined | sec_filing_mutation_responseKeySpecifier),
		fields?: sec_filing_mutation_responseFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	user?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | userKeySpecifier | (() => undefined | userKeySpecifier),
		fields?: userFieldPolicy,
	},
	user_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_aggregateKeySpecifier | (() => undefined | user_aggregateKeySpecifier),
		fields?: user_aggregateFieldPolicy,
	},
	user_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_aggregate_fieldsKeySpecifier | (() => undefined | user_aggregate_fieldsKeySpecifier),
		fields?: user_aggregate_fieldsFieldPolicy,
	},
	user_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_avg_fieldsKeySpecifier | (() => undefined | user_avg_fieldsKeySpecifier),
		fields?: user_avg_fieldsFieldPolicy,
	},
	user_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_max_fieldsKeySpecifier | (() => undefined | user_max_fieldsKeySpecifier),
		fields?: user_max_fieldsFieldPolicy,
	},
	user_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_min_fieldsKeySpecifier | (() => undefined | user_min_fieldsKeySpecifier),
		fields?: user_min_fieldsFieldPolicy,
	},
	user_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_mutation_responseKeySpecifier | (() => undefined | user_mutation_responseKeySpecifier),
		fields?: user_mutation_responseFieldPolicy,
	},
	user_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_stddev_fieldsKeySpecifier | (() => undefined | user_stddev_fieldsKeySpecifier),
		fields?: user_stddev_fieldsFieldPolicy,
	},
	user_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_stddev_pop_fieldsKeySpecifier | (() => undefined | user_stddev_pop_fieldsKeySpecifier),
		fields?: user_stddev_pop_fieldsFieldPolicy,
	},
	user_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_stddev_samp_fieldsKeySpecifier | (() => undefined | user_stddev_samp_fieldsKeySpecifier),
		fields?: user_stddev_samp_fieldsFieldPolicy,
	},
	user_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_sum_fieldsKeySpecifier | (() => undefined | user_sum_fieldsKeySpecifier),
		fields?: user_sum_fieldsFieldPolicy,
	},
	user_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_var_pop_fieldsKeySpecifier | (() => undefined | user_var_pop_fieldsKeySpecifier),
		fields?: user_var_pop_fieldsFieldPolicy,
	},
	user_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_var_samp_fieldsKeySpecifier | (() => undefined | user_var_samp_fieldsKeySpecifier),
		fields?: user_var_samp_fieldsFieldPolicy,
	},
	user_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_variance_fieldsKeySpecifier | (() => undefined | user_variance_fieldsKeySpecifier),
		fields?: user_variance_fieldsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;