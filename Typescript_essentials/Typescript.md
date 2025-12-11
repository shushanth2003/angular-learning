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
