## **Purpose of Basic Types in Angular Projects**

### ✅ **Common Basic Types**

*   **string** → Text values
*   **number** → Numeric values
*   **boolean** → True/False
*   **any** → Accepts any type (avoid overuse)
*   **array** → List of items
*   **object** → Structured data
*   **union types** → Multiple possible types
*   **custom types (interfaces)** → For structured models

***

### ✅ **Real-Time Example**

Imagine you’re building a **Product Catalog** in an e-commerce app:

```typescript
export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const product: Product = {
  id: 101,
  name: 'Laptop',
  price: 75000,
  inStock: true
};
```

Here:

*   `id` → number
*   `name` → string
*   `price` → number
*   `inStock` → boolean

This ensures that every product object follows the same structure.

***

### ✅ **Mini Project Idea**

**“Product List App”**

*   Create an Angular app.
*   Define a `Product` interface using TypeScript types.
*   Display a list of products in a component using `*ngFor`.
*   Add a button to toggle `inStock` status (boolean).

***
### ✅ **Purpose of Type Annotations**

Type annotations tell the compiler what type a variable, function parameter, or return value should have.  
**Why is this important in Angular?**

*   Prevents accidental type errors.
*   Improves code readability and maintainability.
*   Enables better IntelliSense and autocompletion in IDEs.

***

### ✅ **Syntax**

```typescript
let variableName: type;
```

Examples:

```typescript
let username: string = 'Shushanth';
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [90, 85, 88];
```

***

### ✅ **Real-Time Example in Angular**

Imagine you have a **User Service** that fetches user details:

```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}

getUser(id: number): User {
  return { id: id, name: 'John', email: 'john@example.com' };
}
```

Here:

*   `id: number` ensures the function only accepts numbers.
*   `User` interface ensures the return object has the correct structure.

***

### ✅ **Mini Project Idea**

**“User Profile Component”**

*   Create a `User` interface with `id`, `name`, and `email`.
*   Use type annotations for component properties and methods.
*   Display user details in the template.

***
### ✅ **Purpose in Angular Projects**

*   **Interfaces** and **type aliases** help define the shape of objects, making your code predictable and easier to maintain.
*   They are heavily used for:
    *   API response models
    *   Component input/output types
    *   Service data contracts

***

### ✅ **Interface**

*   Defines the structure of an object.
*   Can be extended by other interfaces.
*   Commonly used for models in Angular.

**Syntax:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
```

**Real-Time Example in Angular:**
In a **User Management App**, you might have:

```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Shushanth',
  email: 'shushanth@example.com'
};
```

***

### ✅ **Type Alias**

*   Can define a type for primitives, unions, tuples, or objects.
*   More flexible than interfaces.

**Syntax:**

```typescript
type Status = 'active' | 'inactive' | 'pending';
type UserID = number;
```

**Real-Time Example:**
For an **Order System**:

```typescript
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
  id: number;
  status: OrderStatus;
}
```

***

### ✅ **Difference Between Interface and Type Alias**

*   **Interface** → Best for object shapes and can be extended.
*   **Type Alias** → Best for unions, primitives, and complex types.

***

Got it! Here are the **definitions and one simple example for each**:

***

### ✅ **Functions**

**Definition:**  
A function is a block of code that performs a specific task and can be reused.

**Example:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
```

***

### ✅ **Classes**

**Definition:**  
A class is a blueprint for creating objects with properties and methods.

**Example:**

```typescript
class Person {
  constructor(public name: string) {}

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const p = new Person('Shushanth');
console.log(p.greet()); // Output: Hello, Shushanth
```

***

### ✅ **Modules**

**Definition:**  
A module is a file that can export variables, functions, or classes and import them into other files.

**Example:**
`math.ts`

```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

`main.ts`

```typescript
import { add } from './math';
console.log(add(2, 3)); // Output: 5
```

***

### ✅ **Imports & Exports**

**Definition:**  
Imports and exports allow sharing code between files.

**Example:**

```typescript
// utils.ts
export const PI = 3.14;

// main.ts
import { PI } from './utils';
console.log(PI); // Output: 3.14
```

***


Got it! Here are the **definitions and one simple example for each**:

***

### ✅ **Functions**

**Definition:**  
A function is a block of code that performs a specific task and can be reused.

**Example:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
```

***

### ✅ **Classes**

**Definition:**  
A class is a blueprint for creating objects with properties and methods.

**Example:**

```typescript
class Person {
  constructor(public name: string) {}

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const p = new Person('Shushanth');
console.log(p.greet()); // Output: Hello, Shushanth
```

***

### ✅ **Modules**

**Definition:**  
A module is a file that can export variables, functions, or classes and import them into other files.

**Example:**
`math.ts`

```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

`main.ts`

```typescript
import { add } from './math';
console.log(add(2, 3)); // Output: 5
```

***

### ✅ **Imports & Exports**

**Definition:**  
Imports and exports allow sharing code between files.

**Example:**

```typescript
// utils.ts
export const PI = 3.14;

// main.ts
import { PI } from './utils';
console.log(PI); // Output: 3.14
```
ASDNKJAKJABKJABDSKJABDDKJ
***

