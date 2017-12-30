describe("Simple List", function() {
    var list;    

    beforeEach(function() {
        var list = new SimpleList();
    });

    it("should be a function constructor", function() {
        expect(typeof SimpleList).toBe("function");
    });

    it("should create an instance of the class SimpleList", function() {
        expect(list.constructor.name).toBe("SimpleList");
    });

    it ("should have a default id of simple-list", function() {
        expect(list.id).toBe("simple-list"); 
    });

    it("can be instantiated with an Id", function() {
        var exampleList = new SimpleList({
            id: "custom-list-id"
        });
        expect(exampleList.id).toBe("custom-list-id");
    });

    it("can be instantiated with a title", function() {
        var exampleList = new SimpleList({
            title: "example-list"
        }); 
        expect(exampleList.title).toBe("example-list");
    });

    it("should have a list of items", function() {
       expect(list.items).not.toBe("undefined"); 
       expect(list.items.constructor.name).toBe("Array");
    }); 

    it("should increase amount of items when an item is created", function() {

        expect(list.items.length).toBe(0);
        var item = new SimpleItem({
            desc: "Do laundry",
        });

        expect(list.items.length).toBe(1);
    });

    it("should include an item in the list, when an item is created", function() {
        var item = new SimpleItem({
            desc: "Do laundry"    
        });

        expect(typeof list.items[list.items.length-1]).toBe("object");
        expect(list.items[list.items.length-1].desc).toBe("Do laundry");
        expect(list.items[list.items.length-1].constructor.name).toBe("SimpleItem");
    });

    it("should decrease amount of items when an item is removed", function() {
        var item = new SimpleItem({
            desc: "Do laundry
        });       
        expect(list.items.length).toBe(1);
        list.removeItem(item);
    });

    it("", function() {
        
    });

});
