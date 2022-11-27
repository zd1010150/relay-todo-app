/**
 * @generated SignedSource<<188d6880a3ac43735d513a2e7667c3b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userQuery_app_Query$variables = {
  id?: string | null;
};
export type userQuery_app_Query$data = {
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"header_fragment" | "todos_fragment">;
  } | null;
};
export type userQuery_app_Query = {
  response: userQuery_app_Query$data;
  variables: userQuery_app_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "userQuery_app_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "header_fragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "todos_fragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userQuery_app_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fav",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TODO",
            "kind": "LinkedField",
            "name": "todos",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isComplete",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "349ca86ae3b9ed9cf255b8468f754323",
    "id": null,
    "metadata": {},
    "name": "userQuery_app_Query",
    "operationKind": "query",
    "text": "query userQuery_app_Query(\n  $id: String\n) {\n  user(id: $id) {\n    ...header_fragment\n    ...todos_fragment\n    id\n  }\n}\n\nfragment header_fragment on User {\n  id\n  fav\n}\n\nfragment todo_fragment on TODO {\n  id\n  title\n  isComplete\n}\n\nfragment todos_fragment on User {\n  todos {\n    id\n    ...todo_fragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "664a6a9197ce96411c917588d0c5c9c1";

export default node;
