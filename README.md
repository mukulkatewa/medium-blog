# medium-blog

![Node.js](https://img.shields.io/badge/-Node.js-blue?logo=nodejs&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)

## 📝 Description

Embark on a coding journey with medium-blog, a project showcasing the power of Node.js and TypeScript in crafting a robust web application. While the specifics are still under development, the core focus is on building a platform reminiscent of Medium, emphasizing clean code, test-driven development, and modern web technologies. Expect a well-tested and scalable foundation as the project evolves, providing a solid starting point for aspiring web developers looking to learn and contribute.

## ✨ Features

- 🧪 Testing
- 🕸️ Web


## 🛠️ Tech Stack

- ⬢ Node.js
- 📜 TypeScript


## 📦 Key Dependencies

```
@mukulkatewa/medium-blog-common: ^1.0.0
@prisma/client: ^6.15.0
@prisma/extension-accelerate: ^2.0.2
hono: ^4.9.6
prisma: ^6.15.0
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **deploy**: `npm run deploy`
- **cf-typegen**: `npm run cf-typegen`
- **build**: `npm run build`


## 📁 Project Structure

```
.
├── backend
│   ├── package.json
│   ├── prisma
│   │   ├── migrations
│   │   │   ├── 20250903213605_init_schema
│   │   │   │   └── migration.sql
│   │   │   ├── 20250905223306_descriptive_name
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   ├── src
│   │   ├── index.js
│   │   ├── index.ts
│   │   └── routes
│   │       ├── blog.js
│   │       ├── blog.ts
│   │       ├── user.js
│   │       └── user.ts
│   ├── tsconfig.json
│   └── wrangler.jsonc
├── common
│   ├── package.json
│   ├── src
│   │   └── index.ts
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── Appbar.tsx
    │   │   ├── Auth.tsx
    │   │   ├── BlogCard.tsx
    │   │   ├── BlogSkeleton.tsx
    │   │   ├── FullBlog.tsx
    │   │   ├── Quote.tsx
    │   │   └── Spinner.tsx
    │   ├── config.ts
    │   ├── hooks
    │   │   └── index.ts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── Blog.tsx
    │   │   ├── Blogs.tsx
    │   │   ├── Publish.tsx
    │   │   ├── Signin.tsx
    │   │   └── Signup.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    └── vite.config.ts
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/mukulkatewa/medium-blog.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

---
*This README was generated with ❤️ by ReadmeBuddy*
