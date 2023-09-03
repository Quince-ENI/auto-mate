## tl,dr
```
docker compose down
docker volume rm db_data

docker volume create db_data
docker compose build
docker compose up -d

```
# Procédure de Déploiement de l'Application

Ce guide détaille les étapes nécessaires pour déployer votre application en utilisant Docker Desktop. Assurez-vous de respecter les prérequis avant de commencer.

## Prérequis

Avant de procéder au déploiement de l'application, assurez-vous d'avoir installé Docker Desktop sur votre système.

## Étapes de Déploiement

1. **Choisir la Branche**

   Avant de déployer l'application, assurez-vous d'être sur la branche que vous désirez tester. Vous pouvez le faire en utilisant les commandes Git appropriées, par exemple :

   ```bash
   git checkout ma_branche_de_test
   ```

2. **Exécution de Docker Compose**

   Pour déployer l'application, utilisez la commande suivante dans le répertoire racine de votre projet :

   ```bash
   docker-compose up -f ./docker-compose.yml --build (a faire à la racine du projet)
   ```

   Cette commande va construire et lancer les conteneurs Docker nécessaires pour exécuter votre application.

3. **Gestion de la Base de Données**

   Si vous souhaitez conserver les données de votre base de données entre les déploiements, vous pouvez ajouter la configuration suivante dans votre fichier `docker-compose.yml` :

   ```yaml
   volumes:
     db_data:
        - external: true
   ```

   Assurez-vous d'ajuster le chemin (`/path/to/your/database`) en fonction de votre configuration.

4. **Accès à l'Application**

   Une fois que Docker Compose a terminé le déploiement, votre application sera accessible localement à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

5. **Accès aux Routes Backend (Environnement de Développement uniquement)**

   Dans l'environnement de développement, les routes backend de votre application sont disponibles à l'adresse : [http://localhost:5000](http://localhost:5000). Veuillez noter que cette redirection est spécifique à l'environnement de développement.

C'est tout ! Votre application devrait maintenant être déployée avec succès et prête à être testée. Assurez-vous de respecter ces étapes pour chaque déploiement ou test ultérieur.
```

```

Déploiement en Production
Pour déployer l'application en production, veuillez suivre les fichiers de configuration contenues dans le répertoire "prod" de ce repository. Les fichiers et les étapes spécifiques à la production se trouvent dans ce répertoire. Assurez-vous de suivre scrupuleusement les indications pour garantir un déploiement stable et sécurisé de votre application en production.


