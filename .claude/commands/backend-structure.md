# Commande d'analyse backend pour Claude

Analyse cette spécification OpenAPI 3.1.0 de l'API "Custom Life Changer" et fournis-moi :

## 1. Architecture générale

- **Domaines fonctionnels** : Identifie les modules principaux (users, auth, formations, communications, health)
- **Modèle de données** : Schéma des entités principales et leurs relations
- **Patterns d'authentification** : OAuth2, rôles utilisateur (student, teacher, admin)

## 2. Mapping des endpoints par fonctionnalité

### Authentification

- Points d'entrée login (user/teacher)
- Gestion des tokens
- Sécurité des routes

### Gestion utilisateurs

- CRUD complet des utilisateurs
- Profil utilisateur (/me)
- Relations entre utilisateurs

### Formations

- Création et mise à jour des formations
- Gestion du progrès (progress tracking)
- Assignment d'étudiants
- Structure : Formation → Categories → SubCategories

### Communication

- Posts, commentaires, réactions
- Messages privés
- Communautés avec canaux (Communities → Canals → Sections → Posts)

## 3. Structures de données clés

Pour chaque schéma important, fournis :

- **Champs obligatoires vs optionnels**
- **Types et formats** (UUID, datetime, etc.)
- **Relations entre entités**
- **Schémas de création vs réponse vs mise à jour**

## 4. Patterns d'intégration frontend

- **Services API** : Structure recommandée pour les appels
- **Gestion d'état** : Données à stocker côté client
- **Routing** : Correspondance avec les endpoints
- **Formulaires** : Validation côté client basée sur les schémas

## 5. Cas d'usage principaux

- Flux d'authentification complet
- Création et suivi d'une formation
- Interaction communautaire (posts, commentaires)
- Gestion du profil utilisateur

## 6. Points d'attention

- Gestion des erreurs (404, 401, 422)
- Pagination (skip/limit)
- Upload de fichiers (formations)
- Relations complexes (UserWithRelations, FormationWithRelations)

**Objectif** : Créer une intégration frontend robuste et maintenable qui respecte parfaitement l'architecture backend définie.
