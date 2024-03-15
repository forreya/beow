FROM oven/bun:latest

WORKDIR /client

COPY package.json bun.lockb .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 8080

CMD ["bun", "run", "preview"]