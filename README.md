# Beow App

## Getting Started

### Prerequisites

Docker needs to be installed on your system.

### Installation

1. Install all the packges on both the client and server.
   ```sh
   cd ./client
   bun i
   cd ../server
   bun i
   ```
2. Spin up the docker containers.
   ```sh
   docker-compose up
   ```
3. Build the frontend in watch-mode.
   ```sh
   cd ./client/build
   bun buildEngine.ts
   ```

## Todo List

### Frontend
- [x] Finish Barebones `RadioModal` Component
- [x] Add Error Display for `BuildEngine`
   - [x] TypeScript Compile Script
   - [x] Tailwind Build Script
- [ ] Setup Auto-Formatter for `BuildEngine`
- [ ] Make `BuildEngine` Watch `tailwind.config.js` As Well

### Backend
- [x] Set up automated database migrations via entrypoint script
- [ ] Implement error handling and logging for backend processes

### Database
- [ ] Configure `settings.py` to be environment flexible (development, production, etc)
