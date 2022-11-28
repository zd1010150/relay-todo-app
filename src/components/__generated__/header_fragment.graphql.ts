/**
 * @generated SignedSource<<046364be2f978d4e1d9cb4f8979706e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type header_fragment$data = {
  readonly fav: string;
  readonly id: string;
  readonly " $fragmentType": "header_fragment";
};
export type header_fragment$key = {
  readonly " $data"?: header_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"header_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "header_fragment",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9ad63ce4f21f75396f58af4cdf5b5114";

export default node;
