# Next.js 14 Atomic Design Application

A modern web application built with Next.js 14, TypeScript, and Tailwind CSS, following the Atomic Design methodology.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Atomic Design Pattern** for component organization
- **Server-Side Rendering (SSR)** with parallel data fetching
- **API Routes** with static data

## Project Structure

```
nextjs-atomic-app/
├── app/
│   ├── api/
│   │   ├── users/
│   │   │   └── route.ts          # Users API endpoint
│   │   └── posts/
│   │       └── route.ts          # Posts API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page with SSR
│   └── globals.css               # Global styles
├── components/
│   ├── atoms/                    # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Text.tsx
│   │   └── Badge.tsx
│   ├── molecules/                # Simple component combinations
│   │   ├── UserCard.tsx
│   │   └── PostCard.tsx
│   ├── organisms/                # Complex component groups
│   │   ├── UserList.tsx
│   │   └── PostList.tsx
│   └── templates/                # Page-level layouts
│       └── DashboardTemplate.tsx
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json

## Atomic Design Pattern

This project follows the Atomic Design methodology:

- **Atoms**: Basic building blocks (Button, Text, Badge)
- **Molecules**: Simple combinations of atoms (UserCard, PostCard)
- **Organisms**: Complex UI components (UserList, PostList)
- **Templates**: Page-level component layouts (DashboardTemplate)
- **Pages**: Specific instances of templates with real data

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Routes

The application includes two API endpoints with static data:

- `/api/users` - Returns a list of users
- `/api/posts` - Returns a list of blog posts

Both endpoints are called in parallel on the home page using `Promise.all()` for optimal performance.

## Server-Side Rendering

The home page ([app/page.tsx](app/page.tsx)) demonstrates SSR with parallel data fetching:

```typescript
const [users, posts] = await Promise.all([getUsers(), getPosts()])
```

This approach ensures both API calls happen simultaneously, reducing overall load time.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```
