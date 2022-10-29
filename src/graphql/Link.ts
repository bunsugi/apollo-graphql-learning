import { objectType } from "nexus";
import { NexusGenObjects } from "../nexus-typegen";
import { extendType } from "nexus";

export const Link = objectType({
    name: "Link",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("description");
        t.nonNull.string("url");
    },
});

//　オブジェクトを作成
let links: NexusGenObjects["Link"][] = [
    {
        id: 1,
        url: "www.howtographql.com",
        description: "１つめのリンク。",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "２つめのリンク。",
    },
];

// ルートタイプ「Query」を拡張し、「feed」ルートフィールドを作っている。
export const LinkQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {
            // 「feed」の型を定義している。[Link!]!と同じ
            type: "Link",
            resolve(parent, args, context, info) {
                // すべてのタイプのフィールドには、そのタイプをフェッチされたときに返却する値を決める「リゾルバー関数」がある。
                return links;
            },
        });
    },
});
