FROM oven/bun:latest

WORKDIR /client

COPY package.json bun.lockb .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 1207

CMD ["bun", "run", "preview"]