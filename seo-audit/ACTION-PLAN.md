# Plan d'Action SEO — hypnose-saintbrieuc.fr
**Date :** 28 mai 2026  
**Score actuel :** 52/100  
**Score estimé après corrections :** 74/100

---

## CRITIQUE — Corriger immédiatement

### C1. Corriger le canonical et les métadonnées de `/blog`
**Fichier :** `src/app/blog/page.tsx` (ou `layout.tsx` du blog)  
**Problème :** La page `/blog` a le même `<title>`, `<meta name="description">` et canonical URL que la homepage. Google la traite comme un doublon et ne l'indexe pas.  
**Correction :**
```tsx
// Dans src/app/blog/page.tsx
export const metadata: Metadata = {
  title: "Blog Hypnothérapie à Saint-Brieuc | Yves Deniau",
  description: "Articles sur l'hypnothérapie par Yves Deniau, hypnothérapeute à Saint-Brieuc : stress, tabac, phobies, deuil amoureux, crises d'angoisse.",
  alternates: {
    canonical: "https://www.hypnose-saintbrieuc.fr/blog",
  },
};
```
**Impact :** Critique — permet à la page blog d'exister comme entité SEO propre.

---

### C2. Corriger le double H1 dans les articles de blog
**Fichier :** Composant header/nav (probablement `src/components/Layout.tsx` ou `src/components/Header.tsx`)  
**Problème :** Le header contient `<h1>Hypnothérapeute à Saint-Brieuc</h1>` dans le lien logo. Sur les pages blog, cela crée 2 H1 (un du header + un de l'article).  
**Correction :**
```tsx
// Remplacer le <h1> dans le header par <span> ou <p>
// Avant :
<h1 className="ml-2 text-xl font-medium">Hypnothérapeute à Saint-Brieuc</h1>

// Après (sur toutes les pages sauf la homepage) :
<span className="ml-2 text-xl font-medium">Hypnothérapeute à Saint-Brieuc</span>
```
Alternativement, utiliser le pathname pour rendre un H1 uniquement sur `/` :
```tsx
const isHomepage = pathname === '/';
const Logo = isHomepage ? 'h1' : 'span';
return <Logo className="ml-2 text-xl font-medium">Hypnothérapeute à Saint-Brieuc</Logo>
```
**Impact :** Critique — chaque page doit avoir un seul H1 clair.

---

### C3. Corriger les entités HTML dans les titles et meta descriptions
**Problème :** Les titres contiennent `&amp;apos;` et `&#x27;` au lieu de `'` dans les balises `<title>` et `<meta name="description">`. Ces caractères s'affichent tels quels dans les résultats Google.  
**Exemple :**  
- Affiché : `Qu&apos;est-ce que l&apos;hypnose ?`  
- Attendu : `Qu'est-ce que l'hypnose ?`

**Correction :** Dans les fichiers `page.tsx` de chaque article, utiliser directement les apostrophes typographiques dans les métadonnées :
```tsx
export const metadata: Metadata = {
  title: "Qu'est-ce que l'hypnose ? Exploration scientifique | Saint-Brieuc",
  description: "...",
};
```
**Vérifier tous les fichiers :** `blog/hypnose-definition-saint-brieuc/page.tsx`, `hypnose-tabac/page.tsx`, `crise-angoisse/page.tsx`  
**Impact :** Critique pour le CTR — des titres avec entités HTML font amateur dans Google.

---

## HAUTE PRIORITÉ — Corriger dans la semaine

### H1. Raccourcir les meta descriptions à 155 chars maximum
**Pages concernées :**

| Fichier | Longueur actuelle | Action |
|---------|-------------------|--------|
| `blog/hypnose-definition-saint-brieuc/page.tsx` | 446 chars | Réécrire en 155 chars |
| `blog/sevrage-tabac-saint-brieuc/page.tsx` | 446 chars | Réécrire (actuellement identique à définition) |
| `blog/hypnose-stress-saint-brieuc/page.tsx` | 398 chars | Raccourcir |
| `blog/hypnose-spectacle-saint-brieuc/page.tsx` | 294 chars | Raccourcir |
| `blog/deuil-amoureux-hypnose-saint-brieuc/page.tsx` | 223 chars | Raccourcir |
| `blog/crise-angoisse-hypnose-saint-brieuc/page.tsx` | 209 chars | Raccourcir |

**Exemple de réécriture pour "définition" :**
```
Avant (446 chars) : "Hypnose Saint Brieuc – Et c'est en étudiant les données scientifiques autour de l'hypnose pour l'arrêt du tabac que j'ai découvert..."

Après (140 chars) : "L'hypnose thérapeutique expliquée par la science : mécanismes, applications validées, déroulement d'une séance. Par Yves Deniau, hypnothérapeute à Saint-Brieuc."
```

---

### H2. Raccourcir et corriger les titres trop longs
**Limite Google :** 60-65 caractères (affichage complet dans les SERP)

| Page | Titre actuel | Titre recommandé | Longueur |
|------|-------------|-----------------|---------|
| blog/hypnose-definition | Qu'est-ce que l'hypnose ? Une exploration scientifique et clinique \| Hypnose Saint-Brieuc | Qu'est-ce que l'hypnose ? Science et clinique \| Saint-Brieuc | 61 chars |
| blog/deuil-amoureux | Deuil amoureux : comment surmonter une rupture amoureuse et réussir à passer à autre chose | Deuil amoureux et hypnose : se reconstruire \| Saint-Brieuc | 58 chars |
| blog/hypnose-tabac | Combien de séances d'hypnose pour arrêter de fumer ? \| Yves Deniau Saint-Brieuc | Combien de séances d'hypnose pour arrêter de fumer ? | 52 chars |
| blog/hypnose-volonte | Hypnose, Conscience Modifiée et Éthique à Saint-Brieuc : Ce que Révèle la Science | Hypnose et volonté : ce que dit la science \| Saint-Brieuc | 57 chars |

---

### H3. Ajouter du maillage interne entre articles
**Problème :** Aucun article ne pointe vers un autre article, ni vers la homepage.  
**Correction :** Ajouter dans chaque article 2-3 liens contextuels vers :
- D'autres articles du blog (liens textuels dans le corps du texte)
- La homepage ou section de service correspondante

**Exemple pour l'article "hypnose-tabac" :**
```tsx
// Dans le corps de l'article
<p>
  L'hypnose peut également vous aider à{' '}
  <a href="/blog/hypnose-stress-saint-brieuc">gérer le stress</a>{' '}
  souvent associé au sevrage tabagique.
</p>
```

**Matrice de liens recommandée :**
- tabac → stress, sevrage-tabac
- stress → angoisse, deuil
- angoisse → stress, volonte
- deuil → stress, angoisse
- sucre → tabac, stress
- spectacle → définition, volonte

---

### H4. Étoffer l'article "hypnose-spectacle" (thin content)
**Fichier :** `src/app/blog/(articles)/hypnose-spectacle-saint-brieuc/page.tsx`  
**Problème :** 676 mots totaux — thin content, risque de non-indexation efficace.  
**Objectif :** Atteindre 1200+ mots de contenu réel.  
**À ajouter :**
- Section "Études scientifiques comparatives"
- Témoignages de patients ayant été hésitants entre les deux
- FAQ (avec schema FAQPage)
- Tableau de comparaison structuré

---

## MOYEN TERME — Corriger dans le mois

### M1. Créer des pages de service dédiées
**Problème :** Le site n'a que la homepage et le blog. Pas de pages dédiées par service.  
**Opportunité :** Des pages comme `/arret-tabac`, `/hypnose-stress`, `/phobies` capteraient du trafic transactionnel à fort intent.  

**Pages à créer (par ordre de priorité) :**
1. `/arret-tabac-hypnose-saint-brieuc` — mot-clé fort, très transactionnel
2. `/hypnose-stress-anxiete-saint-brieuc`
3. `/hypnose-phobies-saint-brieuc`
4. `/hypnose-douleur-chronique-saint-brieuc`
5. `/hypnose-confiance-en-soi-saint-brieuc`

**Structure type pour ces pages :**
- H1 : "Arrêt du tabac par l'hypnose à Saint-Brieuc"
- Description du problème (3-4 paragraphes)
- Comment l'hypnose aide
- Déroulement d'une séance
- Témoignages
- FAQ (avec FAQPage schema)
- CTA de prise de rendez-vous

---

### M2. Ajouter le schema `aggregateRating`
**Problème :** Les avis patients sont affichés visuellement mais pas structurés en schema.  
**Impact :** Activer les étoiles dans les résultats Google (rich snippets).  
**Correction :** Ajouter dans le schema LocalBusiness de la homepage :
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5"
}
```
Note : Vérifier les guidelines Google avant — les avis doivent être authentiques et vérifiables.

---

### M3. Ajouter le schema `FAQPage` sur les articles qui ont des FAQ
**Articles concernés :** définition, stress, tabac, spectacle (tous ont des sections FAQ ou Q&A)  
**Impact :** Obtenir des rich snippets FAQ dans Google (espace supplémentaire dans les SERP).

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "L'hypnose est-elle dangereuse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, l'hypnose thérapeutique est sans danger..."
      }
    }
  ]
}
```

---

### M4. Créer une page "À Propos" dédiée
**Problème :** La section "À propos" de la homepage est minimale. Pas de page dédiée.  
**Impact E-E-A-T :** Une page biographique complète renforce la confiance et l'autorité.  
**Contenu recommandé :**
- Photo professionnelle
- Parcours et formations (avec noms d'écoles/organismes)
- Certifications
- Vision de l'hypnothérapie
- Approche personnelle
- FAQ sur le praticien

---

### M5. Corriger la date `lastmod` future dans le sitemap
**Fichier :** `src/app/sitemap.ts`  
**Problème :** L'article "sucre" a une `lastmod` du 2026-06-08 (dans le futur).  
**Correction :** Utiliser `new Date().toISOString()` ou la date réelle de publication.

---

## FAIBLE PRIORITÉ — Backlog

### L1. Ajouter des images illustratives dans les articles
Les articles n'ont pas d'image de contenu (seulement la photo du praticien en sidebar).  
Ajouter 1-2 images par article avec des alt texts descriptifs.

### L2. Renommer `/cabinet-horizontal.JPG`
Extension en majuscules — non-bloquant mais non-standard.  
Renommer en `/cabinet-horizontal.jpg`.

### L3. Ajouter des balises `<time>` avec `dateTime` dans les articles
Pour renforcer les signaux de fraîcheur du contenu.

### L4. Optimiser l'image OG pour le partage social
L'image `og:image` pointe vers une photo de profil.  
Créer une image dédiée 1200×630px avec le nom du praticien et le logo pour un meilleur CTR sur les réseaux sociaux.

### L5. Ajouter un flux RSS
Permet aux agrégateurs et aux lecteurs de s'abonner — signal d'autorité pour les LLMs.

---

## Récapitulatif des tâches par priorité

| # | Tâche | Fichier(s) | Effort | Impact |
|---|-------|------------|--------|--------|
| C1 | Corriger canonical + metadata blog | `src/app/blog/page.tsx` | 15 min | Très haut |
| C2 | Corriger double H1 header | Header component | 20 min | Très haut |
| C3 | Décoder entités HTML dans metadata | Articles `page.tsx` | 30 min | Haut |
| H1 | Raccourcir meta descriptions | Articles `page.tsx` | 45 min | Haut |
| H2 | Raccourcir titres > 65 chars | Articles `page.tsx` | 30 min | Moyen |
| H3 | Ajouter maillage interne | Articles `page.tsx` | 1h | Haut |
| H4 | Étoffer article spectacle | `spectacle/page.tsx` | 2h | Moyen |
| M1 | Créer pages de service | Nouveau fichiers | 1-2j | Très haut |
| M2 | Ajouter aggregateRating schema | Homepage schema | 20 min | Moyen |
| M3 | Ajouter FAQPage schema | Articles `page.tsx` | 45 min | Moyen |
| M4 | Créer page À Propos | Nouveau fichier | 3h | Moyen |
| M5 | Corriger lastmod sitemap | `src/app/sitemap.ts` | 10 min | Faible |
