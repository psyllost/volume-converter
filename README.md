# Kitchen Converter

A comprehensive cooking unit conversion web application that allows precise ingredient measurements across multiple units (grams, cups, ounces, teaspoons, tablespoons).

## Features

- Convert between grams, cups, ounces, teaspoons, and tablespoons
- Pre-loaded ingredient database with 17 common cooking ingredients
- Real-time conversion as you type
- Conversion history tracking
- Clean, modern interface
- Works both as a full-stack app and static site

## Ingredients Supported

- All-Purpose Flour
- Granulated Sugar
- Butter
- Milk
- Water
- White Rice
- Table Salt
- Vegetable Oil
- Brown Sugar
- Powdered Sugar
- Honey
- Cocoa Powder
- Olive Oil
- Semolina
- Yogurt
- Milk Cream (35% fat)
- Cornflour

## Development

### Local Development

```bash
npm install
npm run dev
```

This starts the full-stack application with both frontend and backend.

### Building for Production

```bash
npm run build
```

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The workflow will automatically trigger on pushes to main
   - Your app will be available at `https://yourusername.github.io/volume-converter/`

### Repository Name

This configuration is set up for a repository named "volume-converter". If your repository has a different name, update the `base` path in `vite.config.static.ts` to match your repository name.

## How It Works

The application uses a grams-per-ounce conversion system where:
- 1 ounce = 28.35 grams (standard conversion)
- 1 cup = 8 fluid ounces
- 1 tablespoon = 0.5 fluid ounces
- 1 teaspoon = 0.167 fluid ounces

All conversions go through grams as the base unit for consistency.

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express (for local development)
- **Static Version**: Self-contained React app for GitHub Pages
- **Build Tool**: Vite
- **Deployment**: GitHub Actions + GitHub Pages

## License

MIT License