var bad = new Person({
    name: { "first": "Walter", "last": "White" }
});

console.log("%s is insane", bad.name.full); // Walter White is insane