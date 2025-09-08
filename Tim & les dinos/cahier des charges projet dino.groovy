titre du projet:  Tim & les dinos


L'application sera développée en utilisant:

front-end:

    technoligie:

        - HTML
        - CSS
        - TypeScript

    design:

        - Responsive
        - Mobile-first
        - Sans framework CSS (Bootstrap interdit)

    interactivité:

        - Validation des formulaires
        - Messages d’erreur clairs

back-end:
    technoligie:

        - NodeJS, 
        - Express, 
        - TypeScript (exécuté avec tsx)
        

    design:

        - Design pattern MVC

    interactivité:

        - Requêtes SQL préparées/paramétrées

Base de données:

    technoligie:

        - PostgreSQL

    design:

        - Relationnel (clés primaires et étrangères)

    Modélisation:

        -  MCD et MLD

Stockage base de données:

Réservations:

    ● Date de la réservation
    ● Billet(s) associé(s) à la commande (minimum 1 billet)

Dinosaures:

    ● Nom commun
    ● Régime
    ● Description

Types de billet:

    ● Intitulé
    ● Tarif unitaire

------------------------------------------------------------------------

Pages à réaliser

Côté visiteur:

    ● Accueil :
        ○ Les dinosaures du parc
        ○ Localisation du parc
    ● Réservation de billets :
        ○ Sélection de la date (jour unique, égale ou ultérieure au jour actuel)
        ○ Sélection de la quantité et des types de billets (adulte, enfant, VIP)
        ○ Processus de paiement (simulé)
        ○ Page de confirmation de réservation avec récapitulatif de commande


Côté administrateur

    ● Page de connexion : Saisie de l’adresse email et du mot de passe
    ● Tableau de bord :
        ○ Statistiques de ventes organisées par types de billet sur la semaine courante
        ○ Affichage des capacités d’accueil de chaque jour de la semaine courante

    ■ Capacité maximale : 1500 personnes/jour (tous billets confondus)


------------------------------------------------------------------------------


Livrables:

        ● Code source : Dépôt Github contenant tout le code source du projet
        ● Base de données : MCD, MLD et script SQL pour la création des tables (LDD)
        ● Documentation : Un fichier README expliquant comment installer et exécuter le projet
        ● Instance en ligne : L’application doit être déployée et accessible en ligne