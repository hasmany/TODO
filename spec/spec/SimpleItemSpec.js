describe("Simple Item Class", function() {
    
    beforeEach(function() {
      // reset counter
    });

    it("should be a function constructor", function() {
      expect(typeof SimpleItem).toBe("function");
    });

    it("should create an instance of the class name of 'SimpleItem'", function() {
      var item = new SimpleItem({desc: "example todo item"});
      console.log('first real test', item);
      expect(item.constructor.name).toBe("SimpleItem");
    });
    
});

describe("Simple Item Instance", function() {
    var item;   

    beforeEach(function() {
        // reset counter
        console.log('id is zero');
        counter = 0;
        item = new SimpleItem({
            desc: "Do Laundry"
        });
    });

    it("should return an error if it's created without options", function() {
      console.log('first test', item);
      expect(function(){new SimpleItem()}).toThrowError("must instantiate item with options");
    });

    it("should return an error if it's created without a description property", function() {
      expect(function(){new SimpleItem({ description: "my todo task"})}).toThrowError("must instantiate item with a 'desc' property");
    });

    it("should have a getter function named 'getDesc'", function() {
      expect(item.getDesc).toBeDefined();  
      expect(typeof item.getDesc).toBe("function"); 
    });

    it("'getDesc' method should return it's description value", function() {
      expect(item.getDesc()).toBe("Do Laundry");
      let brandNewItem = new SimpleItem({desc: "Take out the trash."});
      expect(brandNewItem.getDesc()).toBe("Take out the trash.");
    });
   
    it("should have a setter function named 'setDesc'", function() {
      expect(item.setDesc).toBeDefined();
      expect(typeof item.setDesc).toBe("function");
    });

    it("'setDesc' method should set it's description", function() {
        expect(item.getDesc()).toBe("Do Laundry");
        item.setDesc("Wash Dishes");
        expect(item.getDesc()).toBe("Wash Dishes");
    });

    it("should have a getter function named 'getStatus'", function() {
      expect(item.getStatus).toBeDefined();
      expect(typeof item.getStatus).toBe("function");
    });

    it("'getStatus' method should return the complete status", function() {
      let lawnItem = new SimpleItem({
        desc: "Mow the Lawn",
        complete: true
      });

      let cookDinnerItem = new SimpleItem({
        desc: "Cook Dinner",
        complete: false
      });
      expect(lawnItem.getStatus()).toBe(true);
      expect(cookDinnerItem.getStatus()).toBe(false);
    });

    it("should default with a complete property which equals to false", function(){
        let makeBedItem = new SimpleItem({
          desc: "Make the Bed"
        });
        expect(typeof makeBedItem.getStatus()).toBe("boolean");  
        expect(makeBedItem.getStatus()).toBe(false);
    });

    it("should have a setter method named, 'setStatus'", function() {
      expect(item.setStatus).toBeDefined();
      expect(typeof item.setStatus).toBe("function");
    });

    it("'setStatus' method must accept a boolean and set the complete property", function() {
      expect(function() { item.setStatus("true") }).toThrowError("parameter must be of type 'boolean'");
      expect(item.getStatus()).toBe(false);
      item.setStatus(true);
      expect(item.getStatus()).toBe(true);
      item.setStatus(false);
      expect(item.getStatus()).toBe(false);
    });

    it("should have a getter method named, 'getId'", function() {
      expect(item.getId).toBeDefined();
      expect(typeof item.getId).toBe("function");
    });

    it("'getId' should return the id of an item. The id for an item is automatically added and starts at 1", function() {
      console.log(item);
      expect(item.getId()).toBe(1);
      let toDoItem2 = new SimpleItem({desc: "go to the gym."});
      expect(toDoItem2.getId()).toBe(2);
      let toDoItem3 = new SimpleItem({desc: "clean the car"});
      expect(toDoItem3.getId()).toBe(3);
    });
    
    xit("should have a default due date property, which is 'N/A'", function(){
        expect(item.dueDate).toBe("N/A");
    });
    
    //TODO: getter function for date

    xit("should have a setter function to set it's due date property", function() {
        expect(item.setDate).toBeDefined();
        expect(typeof item.setDate).toBe("function");
    });

    xit("should be able to set a date object for it's due date property", function() {
        expect(item.duedate).toBe("N/A");
        item.setDate(new Date);
        expect(item.dueDate.constructor.name).toBe("Date"); 
    }); 

    xit("setDate function should only accept a date object for it's due date property", function() {
      expect(function() {item.setDate("2 hours")}).toThrowError("paramter to setDate function must be a date object");
    });

});
