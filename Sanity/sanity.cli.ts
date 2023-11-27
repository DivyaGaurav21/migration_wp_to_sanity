import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'aqd5dq1h',
    dataset: 'production'
  },
  graphql: [
    {
      tag: "default",
      playground: true,
      generation: "gen3",
      nonNullDocumentFields: false,
    }
  ]
})
