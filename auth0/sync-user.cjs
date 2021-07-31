/**
 * Handler that will be called during the execution of a PostLogin flow.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  const fetch = require('node-fetch');

  const {
    user_id: auth0_id,
    email,
    name,
    nickname,
    given_name,
    family_name,
    picture: photo_url,
  } = event.user;

  // if (!event.organization) {
  //   throw new Error(`Login requires organization affiliation!`);
  // }

  const { id: auth0_connection_id, name: auth0_connection_name } =
    event.connection;

  const url = 'https://api.letryx.com/v1/graphql';
  const query = `
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
          name
        }
      }
    }
  `;

  const variables = {
    auth0_id,
    email,
    name,
    nickname,
    given_name,
    family_name,
    photo_url,
    org: {
      auth0_connection_id,
      auth0_connection_name,
      name: auth0_connection_name,
      type: 'company',
    },
  };

  const body = { query: query, variables: variables };
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': event.secrets.HASURA_ADMIN_SECRET,
    },
  });
  if (res.status !== 200) {
    api.access.deny(
      'Connection to Letryx failed. If this persists, contact support@letryx.com'
    );
    throw new Error(res.status);
  }

  api.user.setAppMetadata('letryx', await res.json());
};

/**
 * Handler that will be invoked when this action is resuming after an external redirect. If your
 * onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
// exports.onContinuePostLogin = async (event, api) => {
// };
