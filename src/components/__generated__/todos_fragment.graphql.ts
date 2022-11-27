/**
 * @generated SignedSource<<8396bbd7f5900ef65fbbfaa11047be00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type todos_fragment$data = {
  readonly todos: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"todo_fragment">;
  } | null> | null;
  readonly " $fragmentType": "todos_fragment";
};
export type todos_fragment$key = {
  readonly " $data"?: todos_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"todos_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "todos_fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TODO",
      "kind": "LinkedField",
      "name": "todos",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "todo_fragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5a6f66aaba71b450063a3acf829ef486";

export default node;
