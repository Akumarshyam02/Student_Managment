# LearnOS 
A modern student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

The idea behind LearnOS was to create a clean and engaging learning workspace where students can track their active courses, monitor their progress, and stay motivated through learning streaks and activity insights.

## Features

* Dark-mode only UI
* Bento Grid dashboard layout
* Dynamic course cards powered by Supabase
* Learning streak section
* Activity tracking widget
* Smooth Framer Motion animations
* Responsive design for desktop, tablet, and mobile
* Collapsible sidebar navigation
* Loading skeletons and graceful loading states
* TypeScript support

## Tech Stack

* Next.js 14 (App Router)
* Supabase
* Tailwind CSS
* Framer Motion
* Lucide React
* TypeScript

## Project Structure

```bash
app/
components/
lib/
types/
```

The dashboard follows a simple server/client architecture:

* Server Components handle data fetching from Supabase.
* Client Components handle animations and user interactions.
* Reusable UI components keep the codebase maintainable and scalable.

## Performance

While building this project, I paid special attention to UI performance.

* Data is fetched on the server.
* Animations use only `transform` and `opacity`.
* Skeleton loaders prevent layout shifts.
* Components are kept modular and reusable.

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
cd learnos
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

Run the project:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Future Improvements

* Course detail pages
* Authentication
* Real activity analytics
* Notifications
* Personalized recommendations

## Author

**Shyam Kumar**

Frontend Developer passionate about building modern web applications with React, Next.js, and TypeScript.
