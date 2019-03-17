/* any time the function is invoked it is placed(pushed) on the top of call stack*/
/* when JS sees the return keyword or when the function ends(nothing else to compile)
the compiler will removed(pop) it from the top of call stack */

/* simple example of 4 functions */
function takeShower() {
    return console.log('Showering');
}

function eatBreakfast() {
    let meal = cookFood();
    return console.log(`Eating ${meal}`);
}

function cookFood() {
    const items = ['Oatmeal', 'Eggs', 'Bacon', 'Protein shake'];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log('Ok ready to go to work!');
}

// 1. wakeUp() call
// 2. wakeUp() calls -> takeShower(). compiler put's it on top of call stack.
// 3. takeShower() -> returns a value and get removed from call stack.
// 4. wakeUp() calls -> eatBreakfast(). compiler put's it on top of call stack.
// 5. eatBreakfast() calls -> cookFood(). compiler put's it on top of call stack.
// 6. cookFood() -> returns a value and get removed from call stack.
// 7. eatBreakfast() -> returns a value and get removed from call stack.
// 8. wakeUp() -> returns a value and get removed from call stack.

wakeUp();