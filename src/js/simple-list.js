/* remove for specs:start */
import SimpleItem from './simple-item';
/* remove for specs:end */

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
      this.items.push( new SimpleItem({ desc: options.desc}) );
      return true;
    } else {
      throw new Error('addItem argument must include an object with a desc property');
    }
  }

  removeItem(id) {
    if (typeof id !== "number") throw new Error("removeItem must be passed a number");
    let removeSuccess = false;
    this.items.forEach( (item, index) => {
      if (item.getId() === id) {
        this.items = this.items.splice(1,index);
        removeSuccess = true;
      }
    }); 

    return removeSuccess;
  }
}
