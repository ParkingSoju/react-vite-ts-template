# React + TypeScript + Vite

Omit reset.css if you’re using a library that includes its own base styles or reset, such as:
	•	Tailwind CSS (Preflight)
	•	DaisyUI (built on Tailwind)
	•	Material UI (with CssBaseline)

Including both can lead to redundant or conflicting styles.

Folder structure guide using feature-first:
https://codewithandrea.com/articles/flutter-project-structure/#layer-first-drawbacks

Configure scripts in package.json for each environments use:
"local": "vite --mode local",
"build": "tsc -b && vite build --mode local",
"dev": "vite --mode development",
"build:dev": "tsc -b && vite build --mode development",
