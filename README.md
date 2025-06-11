# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, experience, certifications, and skills in an elegant and interactive way.

## Features

- 🎨 Modern and clean design with smooth animations
- 📱 Fully responsive layout for all devices
- 🌙 Dark theme with customizable color scheme
- ⚡ Fast performance with Vite and React
- 🎯 Interactive components with Framer Motion
- 🎨 Beautiful UI with Tailwind CSS and DaisyUI
- 📊 Project showcase with filtering capabilities
- 🏆 Experience and certification highlights
- 📝 Contact form with validation
- 🔗 Social media integration

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + DaisyUI
- **Animations:** Framer Motion
- **Icons:** React Icons + Heroicons
- **Form Handling:** React Hooks
- **Code Quality:** ESLint + TypeScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── Projects.tsx
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Customization

### Colors and Theme

The color scheme can be customized by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary: 250 95% 60%;
  --secondary: 262 83% 58%;
  --accent: 316 70% 50%;
  /* ... other variables ... */
}
```

### Content

Update the content by modifying the respective component files:

- `Projects.tsx`: Add or modify your projects
- `Experience.tsx`: Update your experience entries
- `Certifications.tsx`: Add your certifications
- `Contact.tsx`: Update contact information and social links

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
