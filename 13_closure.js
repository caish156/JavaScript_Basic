// A closure is a function that remembers its outer variables and can access them.
// That is: they automatically remember where they were created using a hidden [[Environment]] property,
// and then their code can access outer variables.

// STEP : 1 - In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

// The Lexical Environment object consists of two parts:

// Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
// A reference to the outer lexical environment, the one associated with the outer code.

// A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

// STEP : 2 - A function is also a value, like a variable.

// The difference is that a Function Declaration is instantly fully initialized.
// When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function

// STEP: 3. Inner and outer Lexical Environment
// When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store local variables and parameters of the call.

// When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.

// so the conclusion is a function that remembers its outer variables and can access them.
