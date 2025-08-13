# Randoovu 🗓️

**Randoovu** is a modern and elegant open-source appointment scheduling interface, built with **Next.js** and **Tailwind CSS**.

This repository contains the **frontend** side of the project. The backend (Node.js + Express) will be developed and released separately.

---

## ✨ Features

- 🔐 Sign in / Sign up pages
- 🗓️ Appointment creation and management modal
- 🏢 Corporate dashboard & public profiles
- 🌐 Multi-language support (i18n ready)
- 📱 Responsive design (mobile-first)
- ⚡ Fast and accessible UI
- 🎨 Custom UI components built with Tailwind CSS

---

## 📁 Folder Structure (Simplified)

```

src/
│
├── app/
│   ├── api/                 # API endpoints (Next.js route handlers)
│   ├── components/          # Reusable UI components
│   │   ├── Corp/
│   │   ├── Create/
│   │   ├── Dashboard/
│   │   ├── General/
│   │   └── Sign/
│   ├── corp/\[id]/           # Dynamic route for corporate public profiles
│   ├── dashboard/           # User dashboard (internal view)
│   ├── sign-in/             # Login page
│   ├── sign-up/             # Register page
│   ├── sign-out/            # Sign out logic
│   ├── icons/               # SVG icons
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Layout wrapper
│   └── globals.css          # Global styles
│
├── public/                  # Static files
├── tailwind.config.js       # Tailwind CSS config
├── next.config.js           # Next.js config
├── tsconfig.json            # TypeScript config
└── README.md

````

---

## 🛠️ Technologies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- CSS Modules
- Websockets
- Node & Express.js (on the back-end side)

---

## 📦 Getting Started

```bash
# Install dependencies
yarn install

# Run the development server
yarn dev

# Open http://localhost:3000 in your browser
````

---

## Features
* ⚙️ Admin panel for managing appointments
* 🗓️ Create and manage appointment bases with custom weekly schedules
* 📈 View real-time appointment statistics and fullness percentages
* 🔄 Real-time updates via server-sent events (WebSocket-like experience)
* 💻 Fully integrated with Firebase

---

## 📄 License

This project is **MIT Licensed**.
Feel free to use, modify and share it.

---

## ✨ Author

Made by [Yavuz](https://github.com/Yefee8)
