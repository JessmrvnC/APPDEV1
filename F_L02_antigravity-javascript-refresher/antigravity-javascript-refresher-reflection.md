### 00_script_in_html.html
I learned that JavaScript belongs in a.js file. JavaScript was helpful to learn that JavaScript can also be written directly within an HTML document using the <script> tag. After that, I tried type="module" and imported the greet function and userInfo object from another JavaScript file. That gave me a look at both approaches—writing code directly in the page and splitting it into separate files.

### 01_base_syntax.js
This part taught me that JavaScript syntax has rules for writing variables and statements. Variable names are case-sensitive so myName and myname are considered variables. Names can include characters, like _ and $. They must still follow the rules of JavaScript naming conventions.

### 02_variables.js
In this part I learned how to create and use variables. I first created a variable named name and stored the value 'Jess' on it. I also created variables for age and whether is it true or false. This covered how variables can store values of different types like text, and true/false values.

### 03_functions.js
In this part I learned how to create and use functions. I first created a greet function that accepts a name and returns a greeting. Then I created an arrow function for getting the square of a number. I also created a calculator function that returns both the sum and product. This covered how functions can receive values, process them, and return a result.

### 04_objects.js
Here is what I learned about objects: Objects gather information using properties and methods. Properties hold values such, as a name or age while methods are functions that belong to objects. The this keyword lets a method reach values stored objects.

### 05_arrays.js
In this part I learned how to work with arrays. I first created an array of foods. Then I used push() to add another food and shift() to remove the item. After that I used a for...of loop to display each food. I also used map() to create a sentence, for every item. This covered how I can add remove loop and transform array values.

### 06_control_structures.js
This part taught me how control structures decide which part of the code should run and how times it should repeat. If else if and else check conditions. While. While loops repeatedly execute code until their condition is finished.

### 07_dom.html
This part I learned how JavaScript can work with elements, on an HTML page. I first found the button using getElementById(). Then I set up a click event so when the button is pressed the user is asked to type a color. That color is then used as the background color of the page. I also used setTimeout() to change the text of a paragraph after two seconds. This showed how JavaScript can react to user actions and update the page.
### 08_essential_features.js
The current JavaScript has methods, for handling data. The map() function changes array values destructuring takes properties from objects and the spread operator puts existing values into a new array or object without having to type them all out again.

### 09_tricky_parts.js
In this part I learned some JavaScript behaviors that can easily cause mistakes. I compared values using == and === then checked the difference between undefined and null. I also compared how this behaves inside a function and an arrow function. After that I tested how arrays work, by reference. When I assigned one array to another variable both variables pointed to the array. Using the operator allowed me to create a separate copy instead.

### 10_let_const.js
In this part I learned the difference between let and const and var. I used let, for a value that I wanted to change. I used const for a value that should not be reassigned. I also tested var to see the way of declaring variables. This helped me understand when I should use let or const in my code.

### 11_arrow_functions.js
I found out that arrow functions help make writing functions easier and neater. An implicit return lets you leave out the brackets and the return word when you have a single line of code that returns a value. An explicit return uses brackets and a real return statement when you need more, than one line of code.

### 12_destructuring.js
In this part I learned how destructuring can help me get values from an object or array. I started by pulling out the name and age from a person object. Then I took the two items from a hobbies array. I also used destructuring inside a function parameter. This made it easier because I didn’t have to keep writing the object or array name every time I only needed certain pieces. It saved time. Made the code cleaner.

### 13_spread_rest.js
In this case the spread and rest syntax both use three dots. They work differently. Spread. Copies values, from an array or object. Rest collects values into one array. Rest parameters are useful when a function needs to accept a number of arguments.

### 14_classes_inheritance.js
I learned that classes are templates used to create objects, with properties and methods. A constructor sets the starting values of an object when it is created. Inheritance using extends allows another class to reuse existing methods while also adding its features.

### 15_modules_export.js

In this part I learned how to export code from one JavaScript file. I created an object and a greet function. Then I exported the function as the default export and the userInfo object as a named export. This helped me understand how I can share pieces of one file with another file.

### 16_modules_import.js

Importing lets you use code that was exported from another file. A default import does not need brackets but named imports do need curly brackets and must match the name used in the export. This makes it possible to break a program into reusable files.

### 17_logical_operators.js

This part I learned about operators that combine or change conditions. The. Operator requires both conditions to be true. The || operator only needs one condition to be true. The ! operator flips a value changing true to false and false, to true.
### 18_ternary_nullish.js

The ternary operator provides a way of writing a simple if…else condition. The ternary operator can be used whenever a quick decision is needed. Optional chaining ?. Safely accesses a property that might not exist. The nullish coalescing operator ?? supplies a fallback value when the original value is null or undefined. The nullish coalescing operator differs from || because || also replaces falsy values such as 0.

### 19_strings_numbers.js

I learned here that JavaScript provides built-in methods for changing and checking strings and numbers. Methods like trim() split() toUpperCase() includes(). Slice() process text. Methods like parseInt() convert part of a string into a number. Methods like toFixed() control how many decimal places are displayed.

### 20_array_methods.js

This part I learned how different array methods can process a list of student data. I first used filter() to get students who passed. Then I used map() to get their names. I used find() to search for one student. I used some() to check if least one student failed. I used every() to check if everyone passed. I also copied the array before using sort() so the original list would not be changed. Array methods should make it easier to process lists of data without writing loops. Filter() selects matching items. Map() transforms values. Find() searches, for one matching item. Some() checks if least one item passes a condition. Every() checks if all items pass it. Sort() arranges the items in an order.

### 21_errors_json.js

I learned about error handling and JSON. Error handling prevents one problem from stopping the program. Throw creates an error. Try runs the code that might fail. Catch handles the error when it happens. JSON is used to convert JavaScript objects into text with JSON.stringify(). JSON is used to convert that text back into an object, with JSON.parse().

### 22_Async_javascript.js

This part I learned how JavaScript handles tasks that do not finish immediately. I first used a callback with setTimeout() to return user data after one second. Then I used a Promise that resolves, after a delay. After that I used async. Await to wait for the Promise before continuing the function. This helped me understand the sequence of code and why some results are received later.

### 23_closures_scope.js

The last thing I have learned is scope controls. I find that scope controls show where a variable can be accessed inside the program. A variable declared inside a block or function is normally limited to that area. I find that the variable is limited. A closure is a case of scope. I find that a closure happens when an inner function remembers variables, from its function even after the outer function has already finished running