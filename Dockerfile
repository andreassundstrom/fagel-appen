# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY backend/*.csproj ./backend/
RUN dotnet restore ./backend/fagel-appen.csproj

# copy everything else and build app
COPY backend/. ./backend/
WORKDIR /source/backend
RUN dotnet publish -c release -o /app --no-restore

# build frontend
FROM node:18-alpine as build-frontend

WORKDIR /app
COPY ["frontend/package.json","frontend/package-lock.json","./"]

RUN npm install

COPY frontend/ .

RUN npm run build

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app ./
COPY --from=build-frontend /app/dist wwwroot/
ENTRYPOINT ["dotnet", "fagel-appen.dll"]