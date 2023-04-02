import { defineCliConfig } from 'sanity/cli'
import config from './config/config';

export default defineCliConfig({
  api: {
    projectId: config.sanity.projectId,
    dataset: config.sanity.dataset,
  },
})
