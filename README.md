# Portfolio Website

A portfolio website built with **Vite**, **TypeScript**, and **Tailwind CSS**. 

**Live Site:** [rochiv.github.io](https://rochiv.github.io)

## Tech Stack

- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages

## Project Structure

```
rochiv.github.io/
├── src/
│   ├── components/      # React-like component modules
│   │   ├── Header.ts
│   │   ├── Hero.ts
│   │   ├── About.ts
│   │   ├── Projects.ts
│   │   ├── Contact.ts
│   │   └── Footer.ts
│   ├── assets/         # Static assets (images, icons, fonts)
│   ├── style.css       # Global styles & Tailwind imports
│   └── main.ts         # Application entry point
├── public/
│   ├── favicon.svg     # Site favicon
│   └── resume/         # Resume PDF
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── index.html          # HTML entry point
├── package.json        # Dependencies & scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rochiv/rochiv.github.io.git
   cd rochiv.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in terminal).

### Building for Production

Build the optimized production bundle:

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Making Changes

### Updating Content

Content is modularized in `src/components/`:

- **Bio & Skills:** Edit `src/components/About.ts`
- **Projects:** Edit `src/components/Projects.ts` (update the `projects` array)
- **Contact Form:** Edit `src/components/Contact.ts`
- **Resume:** Replace `public/resume/resume.pdf` with your updated PDF

### Styling

- **Tailwind Classes:** Use Tailwind utility classes directly in component templates
- **Custom Styles:** Add to `src/style.css` using Tailwind's `@layer` directive
- **Theme Colors:** Modify `tailwind.config.js` -> `theme.extend.colors`

### Adding New Sections

1. Create a new component file in `src/components/` (e.g., `NewSection.ts`)
2. Export a `setupNewSection` function that takes an `HTMLElement`
3. Import and call it in `src/main.ts`:
   ```typescript
   import { setupNewSection } from './components/NewSection'
   const newSection = document.createElement('section')
   newSection.id = 'new-section'
   main.append(newSection)
   setupNewSection(newSection)
   ```

### Code Style

- **TypeScript:** Strict mode enabled, type everything
- **Formatting:** Run `npm run format` (Prettier)
- **Linting:** Run `npm run lint` (ESLint)
- **Inline Styles:** Minimize inline `style=""` attributes. Use Tailwind classes or CSS variables instead. Animation delays are acceptable inline if needed.

## Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch:

1. **Make your changes** locally
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. **GitHub Actions will:**
   - Build the site (`npm run build`)
   - Deploy to `rochiv.github.io`
   - Usually completes in 1-2 minutes

Check deployment status: Go to your repo -> **Actions** tab

### Manual Deployment

If you need to deploy manually:

1. Build: `npm run build`
2. Copy `dist/` contents to your GitHub Pages branch (usually `gh-pages`)

## Configuration

### GitHub Pages Setup

1. Go to your repository **Settings** -> **Pages**
2. **Source:** Select **GitHub Actions** (not "Deploy from a branch")
3. The workflow in `.github/workflows/deploy.yml` handles the rest

### Custom Domain (Optional)

1. Add a `CNAME` file in `public/` with your domain (e.g., `rohit.dev`)
2. Configure DNS records as per GitHub Pages documentation
3. Update `vite.config.ts` if needed for base path

## Maintenance

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages (minor/patch versions)
npm update

# Update specific package
npm install package-name@latest
```

### Common Tasks

- **Change colors:** Edit `tailwind.config.js`
- **Add new font:** Add to `index.html` (Google Fonts) or `src/assets/fonts/`
- **Modify Lorenz Attractor:** Edit `src/components/Hero.ts` -> `initLorenzAttractor()`
- **Update resume:** Replace `public/resume/resume.pdf`

## Troubleshooting

### Build Fails

- Check Node.js version: `node --version` (should be v18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check TypeScript errors: `npm run build` (shows detailed errors)

### Styles Not Updating

- Restart dev server
- Clear browser cache
- Check Tailwind config includes your file paths

### GitHub Pages Not Updating

- Check **Actions** tab for workflow errors
- Ensure `main` branch is pushed
- Verify GitHub Pages source is set to **GitHub Actions**

## License

Personal portfolio - All rights reserved.

## Contact

- **GitHub:** [@rochiv](https://github.com/rochiv)
- **LinkedIn:** [rohit-chivukula](https://linkedin.com/in/rohit-chivukula)
