const validate = require('./calc');

test("Test add function",()=>
{
    expect(validate(26,72,1.8,1485)).toBe(false);
})