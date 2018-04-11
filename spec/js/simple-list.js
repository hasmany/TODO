let counter = 0;

class SimpleItem {

  constructor(options) {
    if (!options) {
      throw new Error("must instantiate item with options");
    } else if (!options.desc) {
      throw new Error("must instantiate item with a 'desc' property");
    } else {
      counter++;
      this.desc = options.desc;
      this.complete = options.complete ? options.complete: false;
    }
  }

  static getCounter() {
    return counter;
  } 

  getDesc() {
    return this.desc;
  }
 
  setDesc(desc) {
    this.desc = desc;
  }

  getStatus() {
    return this.complete;
  }

  setStatus(status) {
    if ( typeof status !== "boolean") {
      throw new Error("parameter must be of type 'boolean'");
    } else {
      this.complete = status;
    }
  }

  getId() {
    return counter;
  }
} 



class SimpleList {
  constructor(options) {
    this.title = options && options.title ? options.title : '';
    this.items = options && options.items ? options.items : [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getItems() {
    return this.items;
  }

  addItem(options) {
    if (options && typeof options === 'object' && options.desc) {
      return true;
    } else {
      throw new Error('addItem argument must include an object with a desc property');
    }
  }
}
