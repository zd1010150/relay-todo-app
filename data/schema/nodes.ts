import { GraphQLBoolean, GraphQLList, GraphQLString } from "graphql";
// @flow
/* eslint flowtype/require-return-type: 'off' */
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { GraphQLNonNull, GraphQLObjectType, GraphQLID } from "graphql";
import { toEditorSettings } from "typescript";

// mock users
const users = [
  {
    id: "jser1",
    fav: "ts",
  },
  {
    id: "jser2",
    fav: "flow",
  },
];

export const fetchUser = (id: string): Promise<any> => {
  // mock delay for async requests
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.find((item) => item.id === id));
    }, 2000);
  });
};

const todos = [{
  id: 'item1',
  title: 'Item title 1',
  isComplete: true,
}, {
  id: 'item2',
  title: 'Item title 2',
  isComplete: false,
}];

const GraphQLTODO = new GraphQLObjectType({
  name: "TODO",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (_): string => _.id,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (_): string => _.title,
    },
    isComplete: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (_): boolean => _.isComplete
    }
  },
});

export const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (_): string => _.id,
    },
    fav: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (_): string => _.fav,
    },
    todos: {
      type: new GraphQLList(GraphQLTODO),
      resolve: (_) => todos
    }
  },
});
