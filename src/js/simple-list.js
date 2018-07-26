/* remove for specs:start */
import SimpleItem from './simple-item';
/* remove for specs:end */

class SimpleList {
  constructor(options) {
    this.title = options && options.title ? options.title : '';
    this.items = options && options.items ? options.items : [];
    this.selector = options && options.selector ? options.selector :  '[data-simple-list]';
    this.initList();
  }

  initList() {
    let listContainer = document.querySelector(this.selector);
    this.createListElement(listContainer);
  }

  createListElement(listContainer) {
    if (listContainer) {
      listContainer.classList.add('simple-list')
      const title = this.title ? this.generateTitle(this.title) : null; 
      this.itemListElement = document.createElement('ul');
      this.addItems();
      if (title) { listContainer.appendChild(title) }
      listContainer.appendChild(this.itemListElement);
    } else {
      throw new Error(`DOM element with ${this.selector} selector not found`)
    }
  }

  generateTitle(title) {
   const titleElement =  document.createElement('p');
   titleElement.innerHTML = title;
   return titleElement;
  }

  addItems()  {
    for (let i = this.items.length - 1; i >= 0; i--) {
      this.addItem(this.items.splice(i,1)[0]);
    }
  }

  appendItem(item) {
    const itemElement = this.generateItem(item);
    this.itemListElement.appendChild(itemElement);
  }

  generateItem(item) {
    const itemElement = document.createElement('li');
    const itemRemoveBtn = this.generateRemoveBtn();
    const itemCheckBtn = this.generateCheckBtn();
    const itemDesc = this.generateDesc(item.desc);

    itemElement.classList.add('simple-item');
    itemElement.setAttribute('data-complete', item.complete);
    itemElement.setAttribute('data-desc', item.desc);

    itemElement.appendChild(itemCheckBtn);
    itemElement.appendChild(itemDesc);
    itemElement.appendChild(itemRemoveBtn);

    return itemElement
  }

  generateRemoveBtn() {
    const itemRemoveBtn = document.createElement('span');
    itemRemoveBtn.classList.add('simple-item--close');
    itemRemoveBtn.innerHTML = '&times;';
    return itemRemoveBtn;
  }

  generateCheckBtn() {
    const itemCheckBtn = document.createElement('span');
    itemCheckBtn.classList.add('simple-item--check');
    itemCheckBtn.innerHTML = '&#10004;';
    return itemCheckBtn;
  }

  generateDesc(text) {
    const itemDesc = document.createElement('span');
    itemDesc.innerHTML = text;
    return itemDesc;
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
      const item = new SimpleItem(options);
      this.items.push(item);
      this.appendItem(item);
      return true;
    } else {
      throw new Error('addItem argument must include an object with a desc property');
    }
  }

  removeItem(id) {
    for (let i = this.items.length - 1;  i >= 0; i-- ) {
      if (this.items[i].id === id) {
        this.items.splice(i,1);
        return true;
        break;
      }
    }
    return false;
  }
}
