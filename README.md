# DMS ABE 2.0

> Starter template for Vite with React (TypeScript). Includes Tailwind CSS,
> ESLint, Prettier, Vitest, and more. Follows Atomic Design principles and is
> ready for scalable enterprise applications.

## 📦 Project Info

- **Name**: dms-abe-2-0
- **Version**: 1.0.0
- **Author**: Khanh Duy <duynk38@fpt.com>
- **License**: MIT

## 🚀 Features

- ⚡ Vite for lightning-fast development
- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS for utility-first styling
- 🧪 Vitest & @testing-library/react preconfigured
- 🔍 ESLint & Prettier for consistent code style
- 🔒 Husky + Commitlint + Lint-staged for Git hooks & commit hygiene
- 🧱 Atomic Design structure for components
- 🌐 Internationalization (i18n) with `react-i18next`
- 🍪 Cookie management with `js-cookie`
- 🔁 Redux Toolkit + Redux Persist for state management
- 📦 Modular architecture with reusable components

## 🛠 Installation

Make sure you have **Node.js >=18** and **Yarn >=1.22.5** installed.

```bash
yarn install
```

## 🚧 Development

Start the dev server:

```bash
yarn dev
```

Build for production:

```bash
yarn build
```

Preview the production build:

```bash
yarn preview
```

## ✅ Code Quality

Lint all files:

```bash
yarn lint
```

Auto-fix lint issues:

```bash
yarn lint:fix
```

Run lint with no warnings allowed:

```bash
yarn lint:check
```

## 🔧 Git Hooks

Set up Git hooks with Husky:

```bash
yarn prepare
```

Pre-commit hooks (via `lint-staged`) will format and lint staged files
automatically.

## 🧪 Testing

Vitest and `@testing-library/react` are ready to go. Add your test files with
`.test.tsx` extension inside the `__tests__` or `components` directories.

## 📥 Generate Icons

Automatically convert SVGs to React components:

```bash
yarn generate-icon
```

## 📚 Tech Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- Redux Toolkit & Persist
- React Router v6
- i18next
- Axios, RxJS, Yup, Lodash
- Ant Design (v5)
- ESLint + Prettier
- Husky + Commitlint + Lint-staged

---

## 📄 License

MIT © [Khanh Duy](mailto:duynk38@fpt.com)

# Git Rules

## Cách đặt tên branch

### Triển khai tính năng mới

```text
feature/[ticket-id]
```

- Example

```text
feature/RND_EPROFORBANKING_2024-328
```

### Fix bugs

```text
fixbug/[ticket-id]
```

- Example

```text
fixbug/RND_EPROFORBANKING_2024-328
```

### Chú ý:

- Khi chẻ nhánh để triển khai tính năng mới or fix bug thì phải chẻ nhánh từ
  develop mới nhất.
- Bắt buộc phải đánh lable cho MR. Có 2 loại feature và bug
