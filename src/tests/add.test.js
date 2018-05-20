const add=(a , b)=> a + b;
const generateGreeting=(name='Guest')=>`Hello ${name}!`;

test('should add two number',()=>{
    const result=add(10,10);
    expect(result).toBe(20);
});

test('match greeting strings',()=>{
    const name=generateGreeting('Gaurav');
    expect(name).toBe('Hello Gaurav!');
});

test('match greeting strings Guest',()=>{
    const name=generateGreeting();
    expect(name).toBe('Hello Guest!');
});