# DevRGD Portfolio — Next.js 16 + Tailwind CSS 4.1 + Tri-Mode Theming

This is the portfolio project for **DevRGD**, demonstrating a **modern, flicker-free tri-mode theming system** (Light, Dark, System) using **Next.js 16 App Router**, **Tailwind CSS 4.1**, and **TypeScript**.

It is built as a clean, copy-pasteable, and **SEO-friendly portfolio template**, with persistent user theme preferences and offline-ready features.

---

## 🌟 Features

* **Tri-Mode Theme:** Light, Dark, and System mode respecting OS preferences.
* **Flicker-Free UX:** Uses an inline `<script>` (`ThemeScript`) to set the theme on `<html>` *before* React hydration.
* **Persistent Preferences:** Stores user choice (`light`, `dark`, or `system`) in `localStorage`.
* **System Sync:** Updates theme automatically when the OS-level preference changes while in System mode.
* **SEO-Optimized:** Metadata, OpenGraph, Twitter cards, and structured data (`SEOSchema`) included.
* **Modern Stack:** Next.js 16, Tailwind CSS 4.1, React 19, TypeScript 5, Framer Motion.
* **Reusable Context & Hooks:** `ThemeProvider` and `useTheme` hook manage theme globally.
* **Progressive Web App Ready:** Includes `manifest.json` and offline caching setup (manual service worker can be added).

---

## 🛠 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Styling:** Tailwind CSS 4.1 + PostCSS
* **Language:** TypeScript
* **Animations:** Framer Motion
* **Icons:** React Icons

---

## ⚡ How Theming Works

### 1. `ThemeScript.tsx`

* Renders inline in `<head>` for flicker-free theme application.
* Reads `localStorage` for stored theme or defaults to system.
* Sets `data-theme` attribute on `<html>` before React mounts.

### 2. `ThemeProvider.tsx`

* Client Component that syncs React state with `ThemeScript`.
* Provides a `toggleTheme` function: **light → dark → system**.
* Updates `<html>` dynamically and listens for OS theme changes when in System mode.

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/DevRGD/space-of-devrgd.git
```

2. **Navigate to the project directory**

```bash
cd space-of-devrgd
```

3. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

4. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📂 Project Structure

```
app/
├─ about/          # About page
├─ blog/           # Blog section
├─ contact/        # Contact page
├─ projects/       # Portfolio projects
├─ skills/         # Skills page
├─ layout.tsx      # Root layout with ThemeScript
├─ page.tsx        # Home page
components/
├─ Footer.tsx
├─ Navbar.tsx
├─ PageLink.tsx
├─ SEOSchema.tsx   # JSON-LD structured data
├─ ThemeProvider.tsx
├─ ThemeScript.tsx
├─ ThemeToggleButton.tsx
public/
├─ manifest.json
├─ icons/          # Favicons and PWA icons
├─ og-image.png
```

---

## ✅ Portfolio Highlights

* Fully **responsive and accessible**
* **Tri-mode theme with flicker-free UX**
* SEO-optimized metadata and structured data
* **Next.js 16 + Tailwind CSS 4.1 + TypeScript**
* Ready for **Vercel deployment** and PWA support
