# React Setup (Without Vite)

This guide explains how to set up a React project manually using npm.

---
<!-- first install npm i react
npm i react-dom

delete package.json

install  -->



## Step 1: Initialize a Node.js Project

```bash
npm init -y
```

This creates a `package.json` file.

---

## Step 2: Install React

```bash
npm install react
```

---

## Step 3: Install React DOM

```bash
npm install react-dom
```

---

## Step 4: Enable ES Modules

Open `package.json` and add:

```json
"type": "module"
```

Example:

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "type": "module"
}
```

---

## Step 5: Add a Dev Script

Inside `package.json`, add:

```json
"scripts": {
  "dev": "node script.js"
}
```

---

## Step 6: Run the Project

```bash
npm run dev
```

---

# Fix Common Error

If you get an error while running the project:

1. Delete the existing `package.json` file.
2. Create a new one:

```bash
npm init -y
```

3. Install React again:

```bash
npm install react
npm install react-dom
```

4. Add `"type": "module"` to `package.json`.

5. Add the `dev` script:

```json
"scripts": {
  "dev": "node script.js"
}
```

6. Run:

```bash
npm run dev
```

---

## Final package.json Example

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node script.js"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  }
}
```