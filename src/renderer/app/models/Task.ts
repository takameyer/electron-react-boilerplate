import Realm from 'realm';
// import { createRealmContext } from '@realm.io/react';

export default class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;

  description!: string;

  isComplete!: boolean;

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      partition: '',
      description,
      isComplete: false,
      createdAt: new Date(),
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      partition: 'string',
      description: 'string',
      isComplete: { type: 'bool', default: false },
      createdAt: 'date',
    },
  };
}

// export default createRealmContext({
//   schema: [Task],
//   deleteRealmIfMigrationNeeded: true,
// });