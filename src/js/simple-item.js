let counter = 0;

class SimpleItem {

  constructor(options) {
    if (!options) {
      throw new Error("must instantiate item with options");
    } else if (!options.desc) {
      throw new Error("must instantiate item with a 'desc' property");
    } else {
      counter++;
    }
  }

  static getCounter() {
    return counter;
  } 
} 

/* remove for specs:start */
export default SimpleItem;
/* remove for specs:end */
