describe("Simple Item", function() {
    var item;   

    beforeEach(function() {
        item = new SimpleItem({
            desc: "Do Laundry"
        });
    });

    it("should be a function constructor", function() {
        expect(typeof SimpleItem).toBe("function");
    });

    it("should give an error if it's created without a description ", function() {
        expect(new SimpleItem().constructor.name).toBe("Error");
    });

    it("should have a description, which is a string", function() {
        expect(item.desc).toBe("Do Laundry");
    });

    it("can have a due date, it is a date object", function(){
        expect(item.dueDate).toBe("N/A");
        expect(new SimpleItem({desc: "Check Mail",dueDate: "next week"}.constructor.name).toBe("Error");
        var  newItem = new SimpleItem({
            desc: "Fill out taxes",    
            dueDate: new Date() 
        });
        expect(newItem.dueDate.constructor.name).toBe("Date");
    });

    it("should be able to set a date", function() {
        expect(item.duedate).toBe("N/A");
        expect(typeof item.setDate).toBe("function");
        item.setDate(new Date);
        expect(item.dueDate.constructor.name).toBe("Date");  
    }); 

    it("should  be able to set a description", function() {
        expect(item.desc).toBe("Do Laundry");
        item.setDesc("Wash Dishes");
        expect(item.desc).toBe("Wash Dishes");
    });

    it("should have a complete status, which is a boolean; it defaults to false", function(){
        expect(typeof item.complete).toBe("boolean");  
        expect(item.compelte).toBe(false);
    });

});
