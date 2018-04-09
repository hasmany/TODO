describe("Simple List Class", function() {
    var list;    

    beforeEach(function() {
        list = new SimpleList();
    });

    it("should be a function constructor", function() {
        expect(typeof SimpleList).toBe("function");
    });

    it("should create an instance of the class SimpleList", function() {
        expect(list.constructor.name).toBe("SimpleList");
    });

});

describe("Simple List Instance", function() {
  var list;

  beforeEach(function() {
      list = new SimpleList();
  });


  it("should have a getter function named 'getTitle'", function() {
    expect(list.getTitle).toBeDefined();
    expect(typeof list.getTitle).toBe('function');      
  });  

  it("'getTitle' method should return the title property", function(){
    let toDoList = new SimpleList({
      title: "My Todo list" 
    });
    expect(toDoList.getTitle()).toBe("My Todo list");
  });

  it("should default with an empty string if title parameter is not passed", function() {
    expect(list.getTitle()).toBe("");;
    let groceryList = new SimpleList();
    expect(groceryList.getTitle()).toBe("");
  });

  it("should have a setter function named 'setTitle'", function() {
    expect(list.setTitle).toBeDefined();
    expect(typeof list.setTitle).toBe("function");
  });

  it("'setTitle' should set the title property", function() {
    let groceryList = new SimpleList();
    expect(groceryList.getTitle()).toBe("");
    expect(groceryList.setTitle("My Grocery List"));
    expect(grocerylist.getTitle()).toBe("My Grocery List");
  });

  it("should have a getter function named 'getItems'", function() {
    expect(list.getItems).toBeDefined();  
    expect(typeof list.getItems).toBe('function'); 
  });

  it("'getList' method should default to an empty array if a list does not have any items", function() {
    expect(list.getItems().constructor.name).toBe("Array");
    let groceryList = new SimpleList();
    expect(groceryList.getItems().length).toBe(0);
  });

  it("should have a method called 'addItem'", function() {
    expect(list.addItem).toBeDefined();
    expect(typeof list.addItem).toBe("function");
  });

  it("'addItem' method invocation must include an object with the property 'desc' and return true if an item is added successfully", function() {
    expect(list.addItem()).toThrowError("addItem argument must include an object with a desc property");
    expect(list.addItem({description: "do homework"})).toThrowError("addItem argument must include an object with a desc property");
    expect(list.addItem({desc: "do homework"})).toBe(true);
  });

  it("'addItem' method invocation will add an object of type 'SimpleItem' into a list's items property  ", function() {
    expect(list.getItems().length).toBe(0);
    list.addItem({desc: "Make the bed"});
    expect(list.getItems().length).toBe(1);
    expect(typeof list.getItems()[0]).toBe("object");
    expect(list.getItems()[0].constructor.name).toBe("SimpleItem");
    list.addItem({desc: "cook Dinner"});
    expect(list.getItems().length).toBe(2);
    expect(list.getItems()[1].getDesc()).toBe("cook Dinner");
  });

  it("should have a method called 'removeItem'"), function() {
    expect(list.removeItem).toBeDefined();        
    expect(typeof list.removeItem).toBe("function");
  });

  it("'removeItem' method accepts a number as an argument; it will remove an item from a list's items property with the corresponding id, if an id is not found it will return false.", function() {
    expect(list.getItems().length).toBe(0));
    list.addItem({desc: "check mail"}) 
    expect(list.getItems().length).toBe(1));
    expect(list.getItems()[0].getId()).toBe(1));
    expect(list.removeItem(5)).toBe(false);
    expect(list.removeItem(1)).toBe(true);
    expect(list.getItems().length).toBe(0);
    list.addItem({desc: "change oil car"});
    list.addItem({desc: "sign up for yoga class"});
    expect(list.getItems().length)).toBe(2); 
    expect(list.getItems()[1].getId()).toBe(3);
    expect(list.getItems()[1].getDesc()).toBe("sign up for yoga class");
    expect(list.removeItem(2)).toBe(true);
    expect(list.getItems().length).toBe(1);
    expect(list.getItems()[0].getDesc()).toBe("sign up for yoga class");
  });

});
