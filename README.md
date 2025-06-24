# React + TypeScript + Vite

> A minimal starter template for building modern React apps with TypeScript and Vite.

---

## 🚀 Features

- **Blazing-fast dev server** powered by Vite  
- **Type safety** with TypeScript  
- **Zero-config** environment-based builds  
- **Opinionated folder structure** (feature-first)

---

## 📦 Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/ParkingSoju/react-vite-ts-template.git
   cd your-repo
   ```
2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start coding**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 📁 Folder Structure

We recommend a **feature-first** approach to keep related files together.  
Learn more about this pattern → [Feature-first drawbacks & alternatives](https://codewithandrea.com/articles/flutter-project-structure/#layer-first-drawbacks)

```
src/
├── features/
│   ├── auth/
│   │   ├── Login.tsx
│   │   └── loginSlice.ts
│   ├── dashboard/
│   │   ├── Dashboard.tsx
│   │   └── dashboardAPI.ts
│   └── …
├── components/
├── hooks/
├── utils/
└── index.tsx
```

---

## 🎨 Styling

If you’re using a library that already includes base styles or resets, you can **omit** `reset.css` to avoid conflicts:

- **Tailwind CSS** (Preflight)  
- **DaisyUI** (built on Tailwind)  
- **Material UI** (with `CssBaseline`)

Including both a CSS reset and a library’s own base styles can lead to redundant or conflicting rules.

---

## 🔧 Sample Scripts

| Script             | Description                                           |
| ------------------ | ----------------------------------------------------- |
| `npm run local`    | Start Vite in **local** mode (`.env.local`)           |
| `npm run build`    | Compile with TypeScript and build for **local** mode  |
| `npm run dev`      | Start Vite in **development** mode (`.env.development`) |
| `npm run build:dev`| Compile with TypeScript and build for **development** mode |

---

