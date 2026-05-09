# Crave Burger

Crave Burger is a modern, sophisticated single-page web application (SPA) built for a premium fast-food/burger restaurant. The application features a sleek dark-mode aesthetic with fluid animations, intuitive navigation, and a complete WhatsApp-based checkout flow.

## 🚀 Features

- **Sophisticated Dark Theme**: A visually appealing, high-contrast dark aesthetic that highlights high-quality food photography.
- **Interactive Menu**: Grouped by categories (Burgers, Shawarma, Sides, Offers) with smooth filtering and layout animations using `motion/react`.
- **Cart Management**: A responsive slide-out cart drawer where users can adjust quantities and review their order.
- **WhatsApp Checkout**: A seamless ordering experience that compiles the user's cart into a formatted WhatsApp message for direct restaurant communication.
- **Responsive Design**: Mobile-first approach using Tailwind CSS, including a mobile bottom navigation bar and touch-friendly interfaces.
- **Fluid Animations**: Page transitions, micro-interactions (like adding items to the cart), and layout morphing for a polished feel.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (with automatic import injection)
- **Icons**: Lucide React
- **Animations**: Motion (`motion/react`)
- **Language**: TypeScript

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── cart/            # Cart drawer and related items
│   ├── home/            # Homepage sections (Hero, Offers, Menu)
│   └── layout/          # Global layout components (Navbar, Footer, MobileNav)
├── context/             # Global state management
│   └── CartContext.tsx  # Cart logic and state
├── lib/                 # Utilities and constants
│   └── data.ts          # Mock data (Menu items, categories, restaurant config)
├── App.tsx              # Main application layout and routes
└── main.tsx             # Application entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (typically `http://localhost:3000` or `http://localhost:5173`).

## 🎨 Customization

The application is highly customizable. You can modify the core configurations, such as the restaurant name, currency, and WhatsApp number, within `src/lib/data.ts`.

Colors and typography are set in `src/index.css` using Tailwind CSS variables:
- **Brand Primary**: Orange (`#ea580c`)
- **Background**: Deep Dark (`#0F0F0F`)
- **Typography**: Cairo (Arabic Font)

## 📄 License

This project is open-source and available under the MIT License.
