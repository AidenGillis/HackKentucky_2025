# Character Creator

A terminal-inspired character creation interface with a retro cyberpunk aesthetic. Create and manage character profiles with names, descriptions, and profile pictures.

## Overview

This is a full-stack JavaScript application featuring:
- **Split-screen layout**: Character list (left) and creation form (right)
- **Terminal aesthetic**: Black background with neon green (#00ff00) text and borders
- **Real-time updates**: Characters appear instantly in the list after creation
- **In-memory storage**: Characters persist during the session

## Architecture

### Frontend (React + TypeScript)
- **Pages**: Single-page app with home page at `/`
- **Components**:
  - `CharacterCard`: Displays individual character with profile picture, name, and description
  - `CharacterList`: Scrollable list of characters (newest first)
  - `CharacterForm`: Creation form with name, description, and image upload
- **Styling**: Custom terminal theme using Tailwind CSS with JetBrains Mono font
- **State Management**: React Query for API data fetching and caching

### Backend (Express + TypeScript)
- **API Routes**:
  - `GET /api/characters` - Fetch all characters
  - `POST /api/characters` - Create new character
  - `DELETE /api/characters/:id` - Delete character (implemented but not used in UI)
- **Storage**: In-memory storage using `MemStorage` class
- **Validation**: Zod schemas for request validation

### Data Model
```typescript
Character {
  id: string (UUID)
  name: string (required)
  profilePicture?: string (base64 image data)
  description: string
}
```

## Key Features

1. **Character Creation**
   - Name field (required)
   - Description textarea
   - Profile picture upload with preview
   - Form auto-clears after submission
   - Real-time validation

2. **Character List**
   - Displays all created characters
   - Newest characters appear at top
   - Shows profile picture or placeholder icon
   - Scrollable when list is long
   - Empty state message when no characters exist

3. **Terminal Design**
   - Monospace JetBrains Mono font
   - Neon green (#00ff00) on black background
   - Sharp corners (no border radius)
   - 2px green borders on all interactive elements
   - Uppercase labels and headers with letter spacing

## Recent Changes

**2024-11-08**: Initial implementation
- Created terminal-themed UI with split-screen layout
- Implemented character creation form with image upload
- Built character list with reverse chronological ordering
- Set up Express backend with REST API
- Added in-memory storage for character data
- Integrated React Query for data fetching
- All core features tested and working

## User Preferences

- Terminal/cyberpunk aesthetic with black and green color scheme
- All code in JavaScript/TypeScript
- Split-screen layout with list on left, form on right
- Green outlined text boxes and borders throughout

## Project Structure

```
client/
  src/
    components/
      CharacterCard.tsx       # Individual character display
      CharacterList.tsx       # List of all characters
      CharacterForm.tsx       # Character creation form
    pages/
      home.tsx               # Main application page
    lib/
      queryClient.ts         # React Query configuration
server/
  routes.ts                  # API endpoint definitions
  storage.ts                 # In-memory data storage
shared/
  schema.ts                  # Shared TypeScript types and Zod schemas
```

## Running the Project

The application runs on port 5000 with:
```bash
npm run dev
```

This starts both the Express backend and Vite frontend development server.
