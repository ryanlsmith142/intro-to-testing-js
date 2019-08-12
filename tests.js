// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World" when true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return false if passed null', function() {
        expect(sayHello(null)).toBe("That doesn't work!");
    });
});

describe('isFive', function() {
   it('should be a defined function', function() {
       expect(typeof isFive).toBe('function');
   });
   it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe('boolean');
   });
   it('should return true if passed the number 5', function() {
       expect(isFive(5)).toBe(true);
   });
   it('should return false if passed the string "5"', function() {
       expect(isFive("5")).toBe(false);
   });
   it('should return false if passed the number 42', function() {
       expect(isFive("42")).toBe(false);
   })

});


describe('sum', function() {
    it('should be a defined function.', function() {
        expect(typeof sum).toBe('function');
    });
    it('should return the number 4 when passed the numbers 2 and 2', function() {
        expect(sum(2, 2)).toBe(4);
    });
    it('should return the number 5 when passed the numbers 2 and 3', function() {
        expect(sum(2, 3)).toBe(5);
    });
    it('should return false when passed two strings', function() {
        expect(sum("black", "sheep")).toBe(false);
    })



});