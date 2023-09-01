# Étape de construction de l'application React
FROM node:18 as build
WORKDIR /app

# Copie des fichiers de package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./
COPY . .

# Installation des dépendances
RUN npm install
RUN npm install vite --save-dev

# Construction de l'application React
RUN npm run build

EXPOSE 3000

# Commande d'exécution de l'application (ici, nous utilisons le serveur de développement Vite)
CMD ["npm", "run", "start"]

