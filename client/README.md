### Setting Up Frontend:

1. Run Commands to create project:
```
bun create vite client
cd client
bun install
```

2. Modify vite config file (base, preview, server)

### Building

1. Build the project
```
bun run build // creates dist folder
```

2. Serve the build (2 options)

```
bun install serve -g
serve -s dist -l 1207
```

or

```
bun run preview
```

### Dockerizing

1. Create the Dockerfile in `/client`

2. Create a docker image using:

```
docker build . -t "sample-project:v1.0"
```

3. Check images on local system to see if image was successfully created

```
docker images
```

4. Run the docker container based on the image:

```
docker run -d -p 1207:1207 sample-project:v1.0
```

This runs the container in a detached state (as a background process).