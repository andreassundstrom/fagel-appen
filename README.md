# Fågel-appen
En enkel app för att visa information om fåglar i Sverige

## Kör lokalt
```ps
cd frontend
npm install
npm run dev
```

## Kör med docker compose
Kopiera `.env.example` till `.env`
```ps
docker compose up -d
```
Öppna appen [lokalt](http://localhost:5000).

## Bygg och pusha till docker-hub
```ps
docker build -t fagel-appen:1.0
docker tag fagel-appen:1.0 docker.io/andreassundstrom/fagel-appen:10
docker push docker.io/andreassundstrom/fagel-appen:1.0
```