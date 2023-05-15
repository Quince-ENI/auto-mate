# Étape de construction de l'application React
FROM node:latest as build
WORKDIR /app

# Copie des fichiers de package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers de l'application
COPY . .

# Construction de l'application React
RUN npm run build

# Exposition du port 80 pour le serveur nginx
EXPOSE 80