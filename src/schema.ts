import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
    types: types, // スキーマのタイプを設定する
    outputs: {
        schema: join(process.cwd(), "schema.graphql"), // Nexusは、.graphql の拡張子を持つ、「GraphQLスキーマファイル」を出力する。
        typegen: join(process.cwd(), "nexus-typegen.ts"), // Typescriptの型定義を含む。
    },
});
