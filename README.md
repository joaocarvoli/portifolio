# João Victor Carvalho - Portfolio

A modern, responsive portfolio website showcasing my work as a Machine Learning Engineer. Built with React, Vite, and Tailwind CSS.

## 🚀 Live Demo

Visit the live portfolio at: [https://joaocarvoli.github.io/portfolio](https://joaocarvoli.github.io/portfolio)

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Static site hosting

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── HonorsSection.jsx
│   │   └── ContactSection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .github/workflows/
│   └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joaocarvoli/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deploy to GitHub Pages

### Automatic Deployment

The portfolio is automatically deployed to GitHub Pages whenever you push to the `main` branch. The deployment is handled by GitHub Actions.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## ⚙️ Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` directory with your domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `vite.config.js` base path if needed

## 🎨 Customization

### Colors and Styling

The portfolio uses Tailwind CSS. You can customize colors and styling by modifying:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Individual component files for specific styling

### Content Updates

To update your information:

1. **Personal Info**: Edit `src/components/HeroSection.jsx`
2. **About Section**: Edit `src/components/AboutSection.jsx`
3. **Experience**: Edit `src/components/ExperienceSection.jsx`
4. **Projects**: Edit `src/components/ProjectsSection.jsx`
5. **Honors**: Edit `src/components/HonorsSection.jsx`
6. **Contact**: Edit `src/components/ContactSection.jsx`

### Images

Replace images by updating the URLs in the respective components. The current setup uses external URLs from Supabase storage.

## 📱 Features

- **Responsive Design** - Works on all device sizes
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Clean, professional design
- **Fast Loading** - Optimized with Vite
- **SEO Optimized** - Meta tags and structured data
- **Accessibility** - Semantic HTML and ARIA labels

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: joaocarvoli@hotmail.com
- **LinkedIn**: [linkedin.com/in/joaocarvoli](https://linkedin.com/in/joaocarvoli)
- **GitHub**: [github.com/joaocarvoli](https://github.com/joaocarvoli)

---

Made with ❤️ by João Victor Carvalho
