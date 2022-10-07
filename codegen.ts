import { CodegenConfig } from "@graphql-codegen/cli"
import { API_ENDPOINT } from "./src/constants/constants"

const config: CodegenConfig = {
  schema: API_ENDPOINT,
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: []
    }
  }
}

export default config