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
      return true;
    } else {
      throw new Error('addItem argument must include an object with a desc property');
    }
  }
}
