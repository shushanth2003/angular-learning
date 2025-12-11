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
