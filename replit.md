# replit.md

## Overview

This is a full-stack portfolio web application for Bayan Bayrakdar, a biomedical engineer and AI specialist. The application showcases projects, professional experience, education, and provides a contact form. It's built with a modern tech stack using React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Development**: Custom Vite integration for SSR-like development experience

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express.js application
├── shared/          # Shared types and schemas
├── dist/           # Production build output
└── migrations/     # Database migrations
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Provider**: Neon Database (serverless PostgreSQL)
- **Schema**: Defined in `shared/schema.ts` with Zod validation
- **Tables**: 
  - `projects` - Portfolio projects with technologies and metadata
  - `contacts` - Contact form submissions
  - `users` - User authentication (basic structure)

### API Endpoints
- `GET /api/projects` - Fetch all projects
- `GET /api/projects/featured` - Fetch featured projects only
- `GET /api/github/repos` - Proxy to GitHub API (CORS workaround)
- `POST /api/contact` - Submit contact form

### Storage Layer
- **Interface**: `IStorage` abstraction for data operations
- **Implementation**: `MemStorage` class with in-memory fallback
- **Seeding**: Pre-populated with Bayan's professional projects

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling
- **Sections**: Modular components for different portfolio sections
  - Hero section with introduction
  - About section with skills and stats
  - Projects section with GitHub integration
  - Experience timeline
  - Education and certifications
  - Contact form with validation

## Data Flow

1. **Client Request**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express.js routes handle requests and validate data
3. **Data Layer**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client
5. **UI Update**: React components re-render with new data

### Contact Form Flow
1. User fills contact form with validation
2. Form data sent to `/api/contact` endpoint
3. Server validates using Zod schema
4. Data stored in contacts table
5. Success/error feedback displayed to user

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Components**: Radix UI component primitives
- **State**: TanStack React Query
- **Forms**: React Hook Form with Hookform resolvers
- **Utilities**: date-fns, lucide-react icons

### Backend Dependencies
- **Server**: Express.js with middleware
- **Database**: Drizzle ORM, Neon Database client
- **Validation**: Zod schemas
- **Session**: connect-pg-simple (configured but not actively used)

### Development Dependencies
- **Build**: Vite, esbuild for production builds
- **TypeScript**: Full type safety across the stack
- **Linting**: TSConfig with strict mode enabled

## Deployment Strategy

### Development Mode
- Vite dev server for frontend with HMR
- Express server with automatic TypeScript compilation
- Database migrations applied with `npm run db:push`

### Production Build
1. Frontend built with `vite build` to `dist/public`
2. Backend bundled with `esbuild` to `dist/index.js`
3. Static files served by Express in production
4. Environment variables required: `DATABASE_URL`

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via environment variable

## Recent Changes

### Latest Updates (July 2025)
- Updated personal information with new phone number (+963) 995295071 and location (Damascus, Syria)
- Added two new current positions: Backend Developer at TEQNEIA ICT and Software Engineer Instructor at Algoritmics International School
- Reorganized skills structure to include frameworks/libraries as separate category
- Updated experience section with comprehensive work history including recent roles
- Enhanced certifications list with complete titles and issuers
- Modified about section to reflect current professional status

### Key Architecture Decisions

1. **Monorepo Structure**: Single repository with shared types between frontend and backend for better type safety and code reuse.

2. **Drizzle ORM**: Chosen for type-safe database operations and excellent TypeScript integration, with PostgreSQL as the target database.

3. **Memory Storage Fallback**: Implemented `MemStorage` class to provide functionality even without database connection, useful for development and demos.

4. **Shared Schema**: Zod schemas in `shared/` directory ensure consistent validation between client and server.

5. **Component Library**: shadcn/ui provides consistent, accessible UI components built on Radix UI primitives.

6. **GitHub API Proxy**: Server-side proxy to GitHub API avoids CORS issues and provides consistent data formatting.

7. **Vite Integration**: Custom Vite setup allows for modern development experience while maintaining Express.js backend compatibility.