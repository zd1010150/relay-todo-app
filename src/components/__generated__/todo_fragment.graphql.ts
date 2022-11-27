/**
 * @generated SignedSource<<962befbc5e5ca863e724aa6ce5202fb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type todo_fragment$data = {
  readonly id: string;
  readonly isComplete: boolean;
  readonly title: string;
  readonly " $fragmentType": "todo_fragment";
};
export type todo_fragment$key = {
  readonly " $data"?: todo_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"todo_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "todo_fragment",
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
  "type": "TODO",
  "abstractKey": null
};

(node as any).hash = "588115db7acff92d1ff7ea3f0b6471b6";

export default node;
