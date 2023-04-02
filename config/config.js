const config = {
  sanity: {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'lsciif36',
    dataset: process.env.SANITY_STUDIO_API_DATASET || 'test',
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2021-06-07',
    token: process.env.SANITY_STUDIO_API_READ_TOKEN || 'skLeItChoOctyWwqWOuFb3YGEzGeuKKBipXBycgQb8zN5XTjxJrSYrSp0D8E2xGJ36Z4oXpqwRuTHASzchMRnNiasgqp2EOqUQSxNnYtOwNKSV9tYQLEJqSx8I53i6APwqvbtUeqKpUbQcOjDMuQAAFhd99dQdcmZRav7K97RzGFfFza3mJx',
    accessControlToken: process.env.SANITY_STUDIO_ACCESS_CONTROL_TOKEN || '',
  },
  algoliaIndexName: process.env.SANITY_STUDIO_ALGOLIA_INDEX_NAME || 'saleor_test.default-channel.USD.products',
  algoliaProjectId: process.env.SANITY_STUDIO_ALGOLIA_PROJECT_ID || 'YXKWT0FKQM',
  algoliaReadKey: process.env.SANITY_STUDIO_ALGOLIA_READ_KEY || '11d7ffaf5f69d91c4b7945038aeaef79',
  sanityBaseURL: process.env.SANITY_STUDIO_SANITY_BASE_URL || 'https://lsciif36.api.sanity.io/',
};
export default config;
