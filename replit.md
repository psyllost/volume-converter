# Kitchen Converter Replit Documentation

## Overview

Kitchen Converter is a comprehensive cooking unit conversion web application that enables precise ingredient measurements across multiple units (grams, cups, ounces, teaspoons, tablespoons). The application is designed as a full-stack solution with both dynamic and static deployment capabilities, featuring 17 pre-loaded common cooking ingredients and real-time conversion functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: TSX for TypeScript execution in development

### Hybrid Deployment Strategy
The application supports both full-stack and static deployment modes:
- **Full-stack mode**: Complete backend with database integration
- **Static mode**: Client-only version with embedded ingredient data for GitHub Pages deployment

## Key Components

### Database Schema (Drizzle ORM)
- **Ingredients Table**: Stores ingredient data with conversion ratios
  - `id` (serial primary key)
  - `key` (unique identifier)
  - `name` (display name)
  - `gramsPerOunce` (conversion ratio)
  - `category` (ingredient classification)

- **Conversions Table**: Tracks conversion history
  - `id` (serial primary key)
  - `ingredient` (ingredient key)
  - `amount` (input amount)
  - `fromUnit` (source unit)
  - `toUnit` (target unit)
  - `result` (converted value)
  - `timestamp` (conversion time)

### API Endpoints
- `GET /api/ingredients` - Retrieve all available ingredients
- `POST /api/convert` - Perform unit conversions with history tracking
- `DELETE /api/conversions` - Clear conversion history

### Storage Layer
- **Interface**: `IStorage` abstraction for data operations
- **Implementation**: `MemStorage` class with in-memory fallback
- **Database Integration**: Drizzle ORM with PostgreSQL connection

### UI Components
- **Conversion Interface**: Real-time conversion as user types
- **Ingredient Selection**: Dropdown with 17 pre-loaded ingredients
- **Unit Selection**: Support for grams, cups, ounces, teaspoons, tablespoons
- **History Display**: Track and display recent conversions
- **Responsive Design**: Mobile-optimized interface

## Data Flow

1. **User Input**: User selects ingredient, enters amount, and chooses source unit
2. **Real-time Conversion**: Frontend triggers conversion on input changes
3. **API Request**: POST to `/api/convert` with conversion parameters
4. **Conversion Logic**: Backend calculates all unit equivalents using ingredient-specific ratios
5. **Database Storage**: Conversion history saved to PostgreSQL
6. **Response**: Converted values returned to frontend
7. **UI Update**: Results displayed with formatted precision

### Conversion Algorithm
- All conversions normalize to grams as the base unit
- Ingredient-specific `gramsPerOunce` ratios enable accurate conversions
- Standard volume conversions: 1 cup = 8 fl oz, 1 tbsp = 0.5 fl oz, 1 tsp = 1/6 fl oz

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe SQL query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Minimalist router for React

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production
- **drizzle-kit**: Database migration and introspection tools

### UI Enhancement
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Server**: Express with Vite middleware for HMR
- **Database**: Connects to Neon PostgreSQL instance
- **Port**: Development server runs on default port

### Production Build
- **Frontend**: `vite build` generates optimized static assets
- **Backend**: `esbuild` bundles server code to `dist/` directory
- **Assets**: Static files served from `dist/public/`
- **Database**: Requires `DATABASE_URL` environment variable

### Static Deployment (GitHub Pages)
- **Mode Detection**: Automatically switches to static mode
- **Data Source**: Uses embedded `staticData.ts` instead of API calls
- **Functionality**: Maintains full conversion capabilities without backend
- **Limitations**: No conversion history persistence

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for full-stack mode)
- `NODE_ENV`: Environment mode (development/production)

## Changelog
- July 02, 2025: Fixed GitHub Pages deployment 404 errors by configuring correct base path (/volume-converter/) in build process
- July 02, 2025: Added GitHub Actions workflow for automated deployment to GitHub Pages
- July 02, 2025: Created static version of app that works without backend for GitHub Pages compatibility
- July 02, 2025: Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.