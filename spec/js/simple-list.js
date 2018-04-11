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

  }
} 



class SimpleList {

}

