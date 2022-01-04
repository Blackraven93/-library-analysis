const canceled = Symbol("canceled");

export default class AbstractEvent {
  static type = "event";
  static cancelable = false;

  constructor(data) {
    this[canceled] = false;
    this.data = data;
  }

  get type() {
    return this.constructor.type;
  }

  get cancelable() {
    return this.constructor.cancelable;
  }

  cancel() {
    this[canceled] = true;
  }

  canceled() {
    return Boolean(this[canceled]);
  }

  clone(data) {
    return new this.constructor({
      ...this.data,
      ...data,
    });
  }
}
