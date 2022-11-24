/**
 * @generated SignedSource<<b5a9dca73e4e219df5782a24abc1f79a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type app_AppQuery$variables = {
  id?: string | null;
};
export type app_AppQuery$data = {
  readonly user: {
    readonly fav: string;
    readonly id: string;
  } | null;
};
export type app_AppQuery = {
  response: app_AppQuery$data;
  variables: app_AppQuery$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fav",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "app_AppQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "app_AppQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f8796ebe99270d68dca13e9303f0677c",
    "id": null,
    "metadata": {},
    "name": "app_AppQuery",
    "operationKind": "query",
    "text": "query app_AppQuery(\n  $id: String\n) {\n  user(id: $id) {\n    id\n    fav\n  }\n}\n"
  }
};
})();

(node as any).hash = "e2bf37a82050471327369792aca2c266";

export default node;
