describe("Simple Item Class", function() {
    var item;   

    beforeEach(function() {
        item = new SimpleItem({
            desc: "Do Laundry"
        });
    });

    it("should be a function constructor", function() {
      expect(typeof SimpleItem).toBe("function");
    });

    it("should have a class name of 'SimpleItem'", function() {
      expect(SimpleItem.constructor.name.toBe("SimpleItem");
    });
});

describe("Simple Item Instance", function() {
    var item;   

    beforeEach(function() {
        item = new SimpleItem({
            desc: "Do Laundry"
        });
    });


    it("should return an error if it's created without a description property", function() {
      expect(new SimpleItem().constructor.name).toBe("Error");
    });

    it("should have a getter function named 'getDesc'", function() {
      expect(item.getDesc)toBeDefined();  
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
        expect(item.getdesc()).toBe("Do Laundry");
        item.setDesc("Wash Dishes");
        expect(item.desc).toBe("Wash Dishes");
    });

    it("should have a getter function named 'getStatus')", function() {
      expect(item.getStatus).toBeDefined();
      expect(typeof item.getStatus).toBe("function");
    });

    it("'getStatus' method should return the status", function() {
      let lawnItem = new SimpleItem({
        desc: "Mow the Lawn",
        complete: true
      });

      let cookDinnerItem = new SimpleItem({
        desc: "Cook Dinner",
        complete: false
      });
      expect(lawnItem.getStatus()).toBe(true);
      expect(cookDinnerItem.getStatus().toBe(false);
    });

    it("should default with a complete property which equals to false", function(){
        expect(typeof item.getStatus()).toBe("boolean");  
        expect(item.getStatus()).toBe(false);
    });

    it("should have a setter method named, 'setStatus'", function() {

    });

    it("'setStatus' method should set the complete property, it must accept a boolean", function() {

    });

    xit("should have a default due date property, which is 'N/A'", function(){
        expect(item.dueDate).toBe("N/A");
    });

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
