var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 1 and 4 to get 5',function(){
    var first_value = 1;
    var second_value = 4;
    var target_value = 5;
    var operator = '+';

    calculator.numberClick(first_value);
    calculator.operatorClick(operator);
    calculator.numberClick(second_value);
    calculator.operatorClick('=');

    assert.equal(target_value,calculator.runningTotal);
  });

  it('it should subtract 4 from 7 to get 3',function(){
    var first_value = 7;
    var second_value = 4;
    var target_value = 3;
    var operator = '-';

    calculator.numberClick(first_value);
    calculator.operatorClick(operator);
    calculator.numberClick(second_value);
    calculator.operatorClick('=');

    assert.equal(target_value,calculator.runningTotal);
  });

  it('it should multiply 3 by 5 to get 15',function(){
    var first_value = 3;
    var second_value = 5;
    var target_value = 15;
    var operator = '*';

    calculator.numberClick(first_value);
    calculator.operatorClick(operator);
    calculator.numberClick(second_value);
    calculator.operatorClick('=');

    assert.equal(target_value,calculator.runningTotal);
  });

  it('it should divide 21 by 7 to get 3',function(){
    var first_value = 21;
    var second_value = 7;
    var target_value = 3;
    var operator = '/';

    calculator.numberClick(first_value);
    calculator.operatorClick(operator);
    calculator.numberClick(second_value);
    calculator.operatorClick('=');

    assert.equal(target_value,calculator.runningTotal);
  });

  it('it should take inputs of 3, 4 and 5, and return 345',function(){
    var first_value = 3;
    var second_value = 4;
    var third_value = 5;
    var target_value = 345;

    calculator.numberClick(first_value);
    calculator.numberClick(second_value);
    calculator.numberClick(third_value);

    assert.equal(target_value,calculator.runningTotal);
  });

  it('it should be able to take 1 + 2 + 3 + 4 + 5 to get 15',function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=');

    assert.equal(15,calculator.runningTotal);
  });

  it('it should be able to add 3 and 5, add 2 and press clear and still return a total of 8',function(){
    var first_value = 3;
    var second_value = 5;
    var third_value = 2;
    var target_value = 8;

    calculator.numberClick(first_value);
    calculator.operatorClick('+');
    calculator.numberClick(second_value);
    calculator.operatorClick('+');
    calculator.numberClick(third_value);
    calculator.clearClick();
    calculator.operatorClick('=');

    assert.equal(target_value,calculator.runningTotal);
  });
});
