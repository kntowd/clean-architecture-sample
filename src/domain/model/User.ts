export class User {
  private _id: number;
  private _name: string;
  private _age: number;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  isAdult() {
    return this._age >= 20;
  }

  constructor(id: number = null, name: string, age: number) {
    this._id = id;
    this._name = name;
    this._age = age;
  }
}
