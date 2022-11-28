/**
 * @generated SignedSource<<8c5a90615769eed6c1105c06ab08148b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddTODOInput = {
  clientMutationId?: string | null;
  title: string;
};
export type addTodo_AddTODOMutation$variables = {
  input: AddTODOInput;
};
export type addTodo_AddTODOMutation$data = {
  readonly addTodo: {
    readonly id: string;
    readonly isComplete: boolean;
    readonly title: string;
  } | null;
};
export type addTodo_AddTODOMutation = {
  response: addTodo_AddTODOMutation$data;
  variables: addTodo_AddTODOMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddTODOPayload",
    "kind": "LinkedField",
    "name": "addTodo",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addTodo_AddTODOMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addTodo_AddTODOMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "68b765af86159ab235f30df016b8c9c6",
    "id": null,
    "metadata": {},
    "name": "addTodo_AddTODOMutation",
    "operationKind": "mutation",
    "text": "mutation addTodo_AddTODOMutation(\n  $input: AddTODOInput!\n) {\n  addTodo(input: $input) {\n    id\n    title\n    isComplete\n  }\n}\n"
  }
};
})();

(node as any).hash = "746593c11a2a0f80c138ccee5071988c";

export default node;
