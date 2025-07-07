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
   git clone https://github.com/parkingsoju/react-vite-ts-template.git
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

## 🔐 Security Defaults

This template includes built-in security headers during development via `vite.config.ts`:

- `X-Frame-Options: DENY` — blocks clickjacking by preventing iframe embedding
- `X-Content-Type-Options: nosniff` — disables MIME-type sniffing for safer content handling
- `Referrer-Policy: no-referrer-when-downgrade` — controls how much referrer info is shared
- `Permissions-Policy` — disables camera, microphone, and geolocation access by default

These help simulate a production-hardened environment, even during local development.

---

## 🔧 Sample Scripts

| Script               | Description                                                |
|----------------------|------------------------------------------------------------|
| `npm run local`      | Start Vite in **localdev** mode (`.env.localdev`)          |
| `npm run build:prod` | Build the app for **production** mode (`.env.production`)  |
| `npm run dev`        | Start Vite in **development** mode (`.env.development`)    |
| `npm run build:dev`  | Build the app for **development** mode (`.env.development`)|

### Notes

- ✅ Vite always loads `.env`, then `.env.[mode]`, and finally `.env.local` (if it exists), making `.env.local` perfect for **personal, machine-specific overrides**.
- 🚫 `.env.local` should be **excluded from version control**. Be sure it's listed in your `.gitignore`.
- ✅ This setup works smoothly whether you're **working solo** or **collaborating with a team**, and scales well for **staging**, **QA**, and **CI/CD environments**.