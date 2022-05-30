# Contexte
Notre fantastique propriétaire de produit a une idée merveilleuse, étonnante et révolutionnaire... il veut construire une nouvelle application Todo. 

### Technologies utilisées
- Vue.js 3 + Vue router + Vue CLI
- Node.js + express
- MongoDB(Mongoose)

## Mise en place du projet et installation
La base de données utilisée pour le développement est hebergée sur un serveur distant. Vous pouvez vous y connecter en utilisant les identifiants fournis dans le fichier ".env".

Clonez le repo du projet dans un dossier afin d'obtenir un résultat comme ceci : dossierPrincipal/back & dossierPrincipal/front

Ouvrir le dossier front dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm run serve

puis rendez-vous à cette adresse:

- http://localhost:8080/

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    nodemon server ou node server

## Utilisation

Pour utiliser l'application, veuillez créer un compte sur la page prévue à cet effet.

- Une adresse mail valide
- Un mot de passe (8 carcatères)

Une fois connecté vous pouvez voir les listes:

- En cours
- Terminées
- En cliquant sur une liste, vous aurez accès à la vue détaillée de cette dernière

## Erreur possible

Dans le cadre d'un deploiment sous linux, node v17 présentant des dysfonctionnements sur ce sytème d'éxploitation, vous devez lancer le front-end avec la version 16(LTS).
