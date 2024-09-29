FROM oven/bun:debian

WORKDIR /client

COPY package.json bun.lockb .

RUN bun install

COPY . .

RUN bun run build

COPY /dist/output.css /dist/output.css

EXPOSE 1207

CMD ["bun", "run", "preview"]