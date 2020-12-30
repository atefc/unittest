const add = require('./calc');

test("Test add function",()=>
{
    expect(add(1,2)).toBe(3);
})