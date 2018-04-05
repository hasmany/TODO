describe("Simple Item Class", function() {
    var item;   

    beforeEach(function() {
        item = new SimpleItem({
            desc: "Do Laundry"
        });
    });

    it("should be a function constructor", function() {
        console.log(SimpleItem);
        expect(typeof SimpleItem).toBe("function");
    });

    if("should have a class name of 'Simple Item'", function() {

    });

    it("should be able to set a date", function() {
        expect(item.duedate).toBe("N/A");
        expect(typeof item.setDate).toBe("function");
        item.setDate(new Date);
        expect(item.dueDate.constructor.name).toBe("Date");  
    }); 
    
    it("should have a complete status, which is a boolean; it defaults to false", function(){
        expect(typeof item.complete).toBe("boolean");  
        expect(item.compelte).toBe(false);
    });

});

describe("Simple Item Instance", function() {

    it("should return an error if it's created without a description property", function() {
        expect(new SimpleItem().constructor.name).toBe("Error");
    });

    it("should be able to retreive it's description property", function() {
        expect(item.desc).toBe("Do Laundry");
        item.setDesc("Wash Dishes");
        expect(item.desc).toBe("Wash Dishes");
    });

    it("should be able to set a description", function() {
        expect(item.desc).toBe("Do Laundry");
        item.setDesc("Wash Dishes");
        expect(item.desc).toBe("Wash Dishes");
    });

    xit("should have a default due date property, which is 'N/A'", function(){
        expect(item.dueDate).toBe("N/A");
    });

    xit("should have a setter function for it's due date property", function() {
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
