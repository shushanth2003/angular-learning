# Introduction
Angular is a powerful front-end framework built with TypeScript, designed for creating dynamic, scalable, and maintainable single-page applications (SPAs). It provides a complete ecosystem of tools, libraries, and design patterns to streamline web development

## overview of angular
**Framework by Google**: Angular is maintained by Google and widely used in enterprise-level applications.

**TypeScript-based**: Strong typing, modern JavaScript features, and better tooling support.

**Single-Page Applications**: Enables fast, interactive web apps without full page reloads.

**Component-driven**: Applications are built using reusable UI components.

*Open-source ecosystem*: Backed by a large community and extensive documentation

## Purpose of Angular in Projects
**Scalability**: Handles large codebases with modular architecture.

**Maintainability**: Clear separation of concerns (MVC/MVVM patterns).

**Performance**: Optimized rendering and change detection for fast apps.

## ⚙️ Key Features
**Components**: Encapsulated UI building blocks.

**Directives**: Extend HTML with custom behavior.

**Services & Dependency Injection**: Share logic and data across components.

**Routing**: Navigate between views in SPAs.

**Reactive Forms**: Manage complex form inputs and validation.

**RxJS Observables**: Handle asynchronous data streams
---

### **1. Setting Up the Development Environment**

**Purpose:**  
You need a proper environment to develop Angular apps efficiently. Installing Angular CLI (Command Line Interface) simplifies creating, running, and managing Angular projects.

**Real-Time Example:**  
Imagine you’re joining a team building an e-commerce site. The first step is setting up your environment so you can clone the repo, run the app locally, and start coding.

**Key Steps:**

*   Install **Node.js** (Angular depends on it).
*   Install **Angular CLI** using `npm install -g @angular/cli`.
*   Create a new project:
    ```bash
    ng new my-app
    ```
*   Navigate and run:
    ```bash
    cd my-app
    ng serve
    ```

***

### **2. Angular Project Structure and Files**

**Purpose:**  
Understanding the structure helps you know where to add components, services, and configurations.

**Real-Time Example:**  
In a banking app, you’ll have:

*   `src/app/components` for UI pieces like account summary.
*   `src/app/services` for API calls like fetching transactions.
*   `angular.json` for build configurations.

**Key Files:**

*   `app.module.ts` → Root module
*   `app.component.ts` → Root component
*   `main.ts` → Entry point
*   `angular.json` → Build settings

***

### **3. Running and Building Angular Applications**

**Purpose:**  
You need to run the app locally for development and build it for deployment.

**Real-Time Example:**  
For a food delivery app:

*   During development: `ng serve` (runs on localhost)
*   For production: `ng build --prod` (creates optimized files for deployment)

***


