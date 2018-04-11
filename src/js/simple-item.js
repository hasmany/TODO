let counter = 0;

class SimpleItem {

  constructor() {
    counter++;
  }

  static getCounter() {
    return counter;
  } 
} 

/* remove for specs:start */
export default SimpleItem;
/* remove for specs:end */
