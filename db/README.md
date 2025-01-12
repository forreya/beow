# Beow DB

## How To Connect

1. The database runs as an individual docker container so you need to connect through using `docker exec`:

```
docker exec -it beow_db /bin/bash
```

2. Once you're in, connect to PostgreSQL as follows:

```
psql -h localhost -p 5432 -U admin beow_db
```

3. Show all tables:

```
\dt
```