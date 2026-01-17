# MoviesCL Catalog

A modern **Vue 3** project for showcasing **Chilean movies and films related to Chile**, with individual movie detail pages. Built with **TypeScript** and **Vuetify 3 (Material 3)** for a clean, dynamic, and responsive UI.

This project fetches movie data via **web scraping** from [The Movie Database](https://www.themoviedb.org) and displays it in a structured and visually appealing way. Over time, more movies and details will be added to enhance the catalog.

---

## 🔹 Features

- **Home page**: displays a responsive grid of movies using Vuetify cards with hover overlays showing description and details.  
- **Movie detail page**: shows complete information for each movie, including title, release year, poster, overview, and additional metadata.  
- **Routing**: handled with **Vue Router 4**.  
- **TypeScript support**: for type safety and better developer experience.  
- **Material Design 3**: via **Vuetify 3** for a modern and responsive UI.  
- **Responsive layout**: adapts to different devices, showing 1–6 movies per row depending on screen size.  
- **Hover effects & minimalistic card design**: emphasizes posters while keeping the interface clean.  
- **Search functionality**: search movies directly from the Navbar.  

---

## 📦 Technologies & Packages

- **[Vue 3](https://vuejs.org/)** – JavaScript framework for building user interfaces.  
- **[Vite](https://vitejs.dev/)** – Fast development server and build tool.  
- **[TypeScript](https://www.typescriptlang.org/)** – Typed superset of JavaScript.  
- **[Vuetify 3](https://next.vuetifyjs.com/)** – Material Design 3 component framework for Vue.  
- **[Vue Router 4](https://router.vuejs.org/)** – Declarative routing for Vue applications.  
- **[Material Design Icons](https://materialdesignicons.com/)** – Icons used in Vuetify components.  
- **[Axios](https://axios-http.com/)** *(optional, for future API integration)* – HTTP client to fetch movie data.  

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/robgoncas/moviesCL.git
cd moviesCL
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Open your browser at `http://localhost:5173/`.

---

## 🛠 Project Structure

```
moviesCL/
├─ src/
│  ├─ components/       # Reusable Vue components (MovieCard, Navbar, etc.)
│  ├─ views/            # Pages (HomeMovie.vue, MovieDetailPage.vue)
│  ├─ router/           # Vue Router configuration
│  ├─ plugins/          # Vuetify plugin setup
│  ├─ assets/           # Images, posters, icons, and JSON movie data
│  └─ main.ts           # App entry point
├─ public/              # Static files (logos, favicons)
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

---

## ✅ How to Contribute

1. Fork the repository  
2. Create a new branch: `git checkout -b feature/my-feature`  
3. Make changes and commit: `git commit -m "Add my feature"`  
4. Push to the branch: `git push origin feature/my-feature`  
5. Open a Pull Request  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👀 Future Improvements

- Connect to a backend or API to fetch real movie data automatically.  
- Add filtering and sorting options (year, genre, rating).  
- Implement a more detailed movie page with trailers, cast, and reviews.  
- Add animations and smooth hover effects for cards.  
- Include multi-language support (Spanish and English).  
- Expand the dataset with more Chilean movies and historical films.  
