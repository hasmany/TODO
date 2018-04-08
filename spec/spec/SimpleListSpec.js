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
    expect(toDoList.getTitle()).toBe("My ToDo list");
  });

  it("should default with an empty string if title paramter is not passed", function() {
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
    expect(list.getItems()).toBe([]);
  });

  it("should have a method called 'addItem'", function() {
    expect(list.addItem).toBeDefined();
    expect(typeof list.addItem).toBe("function");
  });

  it("'addItem' method must include an object with the property 'desc' and return true if an item is added sucessfuly", function() {
    expect(list.addItem()).toThrowError("addItem must include paramter that is an object with a desc property");
    expect(list.addItem({description: "do homework"})).toThrowError("addItem must include paramter that is an object with a desc property");
    expect(list.addItem({desc: "do homework"})).toBe(true);
  });
});
