const isAnagram=require('./anagram');

test('table and bleat',()=>{
    expect(isAnagram("table","bleat")).toBe(true);
});

test('eat and tar',()=>{
    expect(isAnagram("eat","tar")).toBe(false);
});