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

- [] Finish Barebones RadioModal Component
- [] Add Error Display for BuildEngine
- [] Setup Auto-Linter on Build