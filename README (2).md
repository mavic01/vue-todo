# 🚀 Todo App (Vue 3 + Supabase)

A modern, fully responsive **Todo Application** built with **Vue 3, Supabase, and Tailwind CSS**.  
This is an upgrade of the original JSONPlaceholder version, now featuring **real authentication, a real database, and CRUD (Create, Read, Delete) functionality with Supabase**.  

---

## ✨ Features

- 🔑 **Authentication** – Sign up, log in, and log out with Supabase Auth  
- ✅ **Create, Read, Delete (CRD)** todos stored in Supabase DB  
- 📋 **Fetch all todos** or a single todo by **ID**  
- 🖼️ **Modal-based form** for adding todos  
- 🎨 **Beautiful UI** with TailwindCSS  
- 📱 **Fully responsive** & accessible design (mobile-first)  

---

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) – Composition API + Vite  
- [Supabase](https://supabase.com/) – Authentication & Postgres Database  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  

---

## ⚙️ Installation & Setup

Clone the repo and install dependencies:

```bash
git clone git@github.com:mavic01/vue-todo.git
cd vue-todo
npm install
```

### 🔑 Environment Variables

Create a `.env.local` file in the project root and add:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## 🚀 Running the App

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📸 Preview

[App Preview](https://ibb.co/jkXcdBMB)

---

## 👤 Author

**Victor Iberi**  
Frontend Web Developer  
- GitHub: [mavic01](https://github.com/mavic01)  
- Portfolio: [website-portfolio-rust-three.vercel.app](https://website-portfolio-rust-three.vercel.app/)  

---

## 🎯 Usage

1. **Sign up / Log in** with Supabase Auth  
2. **Add new todos** via modal form  
3. **View all todos** in the dashboard  
4. **View individual todos** by navigating to `/todos/[id]`  
5. **Delete todos** when no longer needed  
6. **Log out** when done  

---

## 🔑 Available Scripts

- `dev` – Runs the app in development mode  
- `build` – Builds the app for production  
- `preview` – Serves the production build locally  

---

## 🚀 Deployment

You can deploy this app easily on:  

- [PipeOps](https://pipeops.io/)  
- [Vercel](https://vercel.com/)  
- [Netlify](https://netlify.com/)  

---

## 📜 License

MIT License  
