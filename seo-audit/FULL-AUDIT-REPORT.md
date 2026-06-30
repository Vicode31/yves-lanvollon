# Audit SEO Complet — hypnose-saintbrieuc.fr
**Date de l'audit :** 28 mai 2026  
**URL auditée :** https://www.hypnose-saintbrieuc.fr/  
**Type de site :** Cabinet d'hypnothérapie locale (Saint-Brieuc, 22)  
**Technologie :** Next.js 15 App Router — Hébergement Vercel  

---

## Score de Santé SEO Global : **52 / 100**

| Catégorie | Score | Poids |
|-----------|-------|-------|
| SEO Technique | 58/100 | 25% |
| Qualité du Contenu | 42/100 | 25% |
| SEO On-Page | 50/100 | 20% |
| Schema / Données Structurées | 72/100 | 10% |
| Performance (CWV) | 78/100 | 10% |
| Images | 80/100 | 5% |
| Lisibilité IA / AI Search | 45/100 | 5% |

---

## Résumé Exécutif

Le site dispose d'une base technique solide (Vercel, HTTPS, HSTS, images optimisées Next.js, schema LocalBusiness complet) mais souffre de **bugs structurels graves** qui sabotent l'indexation du blog entier. Les deux problèmes les plus critiques sont : (1) la page `/blog` a le même titre, la même meta description et le même canonical que la homepage — Google la traite donc comme un doublon et ne l'indexera pas ; (2) tous les articles de blog ont **2 balises H1** (une venant du header/layout, une de l'article lui-même), ce qui confuse les moteurs de recherche sur le sujet principal de chaque page.

### Top 5 problèmes critiques
1. Page `/blog` = doublon de la homepage (même title + meta desc + canonical)
2. Double H1 sur tous les articles (header H1 + article H1)
3. Entités HTML brutes (`&amp;apos;`) dans les titres et descriptions affichés dans Google
4. Meta descriptions trop longues sur 2 articles (446 chars — limite : ~155 chars)
5. Aucun maillage interne entre articles (0 lien contextuel cross-articles)

### Top 5 quick wins
1. Corriger le canonical du `/blog` (1 ligne de code)
2. Changer le H1 du header/nav en lien simple (pas H1)
3. Décoder les entités HTML dans les meta (unescape `&apos;` → `'`)
4. Ajouter des liens internes dans chaque article vers les autres articles pertinents
5. Tronquer les meta descriptions à 155 chars maximum

---

## 1. SEO Technique — 58/100

### Robots.txt
✅ Fichier présent et correct  
✅ Sitemap référencé  
✅ Autorise tous les bots majeurs (Googlebot, Bingbot, Slurp)  
✅ Pas de blocage inutile  

### HTTPS & Sécurité
✅ HTTPS actif  
✅ HSTS activé (`max-age=63072000` = 2 ans)  
✅ Hébergement Vercel (CDN global, latence faible)  
⚠️ Headers de sécurité supplémentaires absents : pas de `Content-Security-Policy`, pas de `X-Frame-Options`, pas de `Permissions-Policy`

### Sitemap XML
✅ Sitemap présent à `/sitemap.xml`  
✅ 11 URLs référencées  
✅ `changefreq` et `priority` présents  
❌ **URL `/blog` a un canonical pointant vers `/`** → le sitemap réfère une URL que Google considère comme doublon  
⚠️ Date `lastmod` future pour l'article "sucre" (`2026-06-08` — page non encore publiée ?)  

### Crawlabilité
✅ Vercel cache HIT (< 70ms TTFB)  
✅ Statut 200 sur toutes les pages testées  
✅ Pas de redirections en boucle  
✅ Robots.txt n'interdit aucune URL utile  

### Indexabilité
❌ **CRITIQUE : La page `/blog` est non-indexable en pratique**  
→ Son `canonical` pointe vers `https://www.hypnose-saintbrieuc.fr` (homepage)  
→ Son `<title>` est identique à la homepage  
→ Sa `<meta name="description">` est identique à la homepage  
→ Google ne distinguera pas `/blog` de `/` et ignorera l'une des deux  

### Redirections
✅ Pas de redirect inutile détecté  
✅ Les liens internes utilisent des URLs propres  

---

## 2. Qualité du Contenu — 42/100

### E-E-A-T (Expérience, Expertise, Autorité, Confiance)
✅ Praticien identifié nominalement (Yves Deniau)  
✅ Formations mentionnées dans le schema  
✅ Profil LinkedIn, Resalib et Facebook présents en sameAs  
✅ Avis patients intégrés directement dans la homepage  
⚠️ Pas de page "À Propos" dédiée avec diplômes, formations, photos de cabinet  
⚠️ Pas de mentions de certification ou organisme de référence  
⚠️ Pas de références scientifiques citées dans les articles (liens vers études PubMed, etc.)  

### Contenu des articles — Analyse page par page

| Page | Mots totaux | Note contenu |
|------|-------------|--------------|
| Hypnothérapie vs Spectacle | 676 | ❌ Trop court |
| Hypnose : définition | 913 | ⚠️ Limite basse |
| Hypnose et volonté | 885 | ⚠️ Limite basse |
| Sevrage tabagique | 896 | ⚠️ Limite basse |
| Hypnose et stress | 917 | ⚠️ Limite basse |
| Hypnose et tabac | 1206 | ✅ Acceptable |
| Deuil amoureux | 1083 | ✅ Acceptable |
| Crises d'angoisse | 1767 | ✅ Bon |
| Hypnose et sucre | 1253 | ✅ Acceptable |

**Note :** ces chiffres incluent le texte de navigation, footer, etc. Le contenu réel de l'article est probablement 20-30% inférieur. L'article "spectacle" avec 676 mots est clairement en contenu fin (*thin content*).

### Duplication de contenu
❌ **La meta description de l'article "hypnose-definition" est strictement identique à celle de "sevrage-tabac"** (446 chars, même texte)  
⚠️ La meta description du blog index est identique à la homepage  

### Lisibilité
✅ Bon usage des H2 pour structurer les articles  
✅ Titres informatifs et orientés questions  
⚠️ Certains articles manquent de listes à puces, tableaux comparatifs  
⚠️ Pas de TL;DR ou résumé en début d'article  

---

## 3. SEO On-Page — 50/100

### Balises Title

| Page | Titre | Longueur | Problème |
|------|-------|----------|---------|
| Homepage | Hypnothérapeute à Saint-Brieuc \| Yves Deniau | 44 chars | ✅ OK |
| Blog index | Hypnothérapeute à Saint-Brieuc \| Yves Deniau | 44 chars | ❌ Identique homepage |
| blog/hypnose-definition | Qu&amp;apos;est-ce que l&amp;apos;hypnose ?... | 107 chars | ❌ Entités HTML + trop long |
| blog/hypnose-volonte | Hypnose, Conscience Modifiée et Éthique... | 104 chars | ⚠️ Trop long (>70) |
| blog/hypnose-tabac | Combien de séances d&amp;apos;hypnose... | 111 chars | ❌ Entités HTML + trop long |
| blog/deuil-amoureux | Deuil amoureux : comment surmonter... | 148 chars | ❌ Beaucoup trop long |
| blog/crise-angoisse | Crises d&#x27;angoisse : pourquoi... | 100 chars | ❌ Entités HTML |

**Limite recommandée : 60-65 caractères** (affichage Google). Plusieurs titres dépassent largement cette limite.

### Meta Descriptions

| Page | Longueur | Problème |
|------|----------|---------|
| Homepage | 174 chars | ⚠️ Un peu longue (tronquée) |
| Blog index | 174 chars | ❌ Identique homepage |
| blog/hypnose-definition | 446 chars | ❌ Beaucoup trop longue |
| blog/sevrage-tabac | 446 chars | ❌ Identique à définition |
| blog/hypnose-stress | 398 chars | ❌ Trop longue |
| blog/hypnose-volonte | 177 chars | ⚠️ Légèrement longue |
| blog/hypnose-tabac | 200 chars | ⚠️ Légèrement longue |
| blog/deuil-amoureux | 223 chars | ⚠️ Trop longue |
| blog/crise-angoisse | 209 chars | ⚠️ Trop longue |
| blog/sucre | 204 chars | ⚠️ Trop longue |
| blog/spectacle | 294 chars | ❌ Trop longue |

**Limite recommandée : 155-160 caractères maximum.**

### Balises H1
✅ Homepage : 1 H1 correct ("Hypnothérapeute à Saint-Brieuc")  
❌ **Tous les articles de blog : 2 H1**  
→ H1 #1 : "Hypnothérapeute à Saint-Brieuc" (vient du composant `<header>` / nav)  
→ H1 #2 : Le titre de l'article  

**Origine du bug :** Le header contient `<h1 class="ml-2 text-xl font-medium">Hypnothérapeute à Saint-Brieuc</h1>` à l'intérieur du lien logo. Sur la homepage, c'est sémantiquement correct. Sur les pages blog, ce H1 est dupliqué avec le titre de l'article.

**Correction :** Remplacer le `<h1>` du header par `<span>` ou `<p>` sur les pages autres que la homepage, OU utiliser une balise `<a>` seule sans H1.

### Structure des headings (articles)
✅ Bonne hiérarchie H2 → H3 dans les articles  
✅ Titres descriptifs et riches en mots-clés  
⚠️ Quelques H2 génériques ("Introduction", "Conclusion") sans valeur sémantique  

### Maillage interne
❌ **0 lien contextuel entre les articles de blog**  
❌ Les articles ne renvoient pas vers les pages de services de la homepage  
❌ Pas de page de service dédiée (ex: `/arret-tabac`, `/phobies`, `/stress`) qui recevraient des liens depuis les articles  
✅ Menu de navigation présent et cohérent  

### Open Graph & Twitter Cards
✅ `og:title` présent  
✅ `og:description` présent  
✅ `og:image` pointe vers `/yves-deniau.jpg`  
✅ `twitter:card: summary_large_image` présent  
⚠️ `og:image` utilise une photo de profil plutôt qu'une image optimisée pour le partage (1200×630)  

---

## 4. Schema / Données Structurées — 72/100

### Homepage
✅ Schema `LocalBusiness` + `MedicalBusiness` + `HealthAndBeautyBusiness` (multi-type)  
✅ Adresse complète (rue, ville, CP, région, pays)  
✅ Coordonnées GPS précises  
✅ Téléphone et email  
✅ `openingHoursSpecification` complet  
✅ `serviceArea` avec rayon de 50km  
✅ `hasOfferCatalog` avec 3 services  
✅ `founder` avec nom et titre  
✅ `sameAs` avec LinkedIn, Resalib, Facebook  
⚠️ Pas de `aggregateRating` (avis Google intégrés mais pas structurés en schema)  
⚠️ Pas de `Review` schema  

### Articles de blog
✅ Schema `BlogPosting` présent sur chaque article  
✅ Schema `BreadcrumbList` présent  
✅ Schema `LocalBusiness` répété sur chaque article (cohérence)  
⚠️ `BlogPosting` ne contient pas `author` avec profil complet  
⚠️ Pas de `datePublished` dans le schema  
⚠️ Articles avec sections FAQ n'ont pas de schema `FAQPage`  
❌ Certains articles ont des sections FAQ sans schema correspondant (manque à gagner pour les rich snippets)  

---

## 5. Performance — 78/100

### Temps de réponse (TTFB mesuré via curl)
| Page | TTFB | Taille |
|------|------|--------|
| Homepage | 66ms | 210 KB |
| Blog index | 138ms | 41 KB |
| Article stress | 60ms | 64 KB |

✅ TTFB excellent (cache Vercel HIT)  
✅ Next.js statique / ISR = pas de SSR à la demande  
⚠️ Homepage assez lourde (210 KB HTML — beaucoup de code inline Next.js)  

### Signaux Core Web Vitals (inférés)
✅ Images servies via `/_next/image` avec WebP/AVIF, srcset, lazy loading  
✅ Fonts préchargées avec `<link rel="preload">`  
✅ GTM préchargé (évite le blocking render)  
⚠️ GTM + Meta Pixel + Matomo = 3 outils analytics/tracking qui impactent le TBT  
⚠️ 108 images sur la homepage (dont beaucoup pour les avis patients) — à surveiller pour LCP  

### Scripts tiers
- Google Tag Manager (GTM-WKCZK7W5) — préchargé ✅  
- Facebook/Meta Pixel (chargé via `/scripts/pixel.js`) — différé ✅  
- Matomo analytics — chargé dynamiquement ✅  

---

## 6. Images — 80/100

✅ **0 image sans attribut `alt`** — excellent  
✅ Next.js Image component utilisé partout (srcset, AVIF/WebP automatique)  
✅ Lazy loading activé sur toutes les images  
✅ Dimensions width/height spécifiées (évite le CLS)  
⚠️ Image principale (`/yves-deniau.jpg`) servie depuis la racine — devrait être dans `/public/` avec nom optimisé  
⚠️ `/cabinet-horizontal.JPG` — extension en majuscules (non-standard, risque sur serveurs case-sensitive)  
⚠️ Pas d'image d'illustration dans les articles de blog (seule image = photo du praticien)  

---

## 7. AI Search Readiness — 45/100

### Signaux de citabilité
✅ Contenu en français structuré  
✅ Informations de contact claires  
✅ Expert identifié nominalement  
❌ Pas de références scientifiques citées avec liens (PubMed, etc.)  
❌ Pas de "About" page avec biographie détaillée  
❌ Contenu de certains articles trop court pour être cité par un LLM  
❌ Pas de FAQ structurée (schema FAQPage manquant)  
⚠️ Les articles utilisent des meta descriptions trop longues comme résumés — pas optimisé pour extraction IA  

### Autorité thématique
⚠️ Couverage thématique correcte mais pas systématique  
⚠️ Certains sujets importants manquants : phobies, douleur chronique, confiance en soi, sommeil  

---

## Annexe — Inventaire des pages

| URL | Status | Indexable |
|-----|--------|-----------|
| / | 200 | ✅ |
| /blog | 200 | ❌ (canonical = /) |
| /blog/hypnose-definition-saint-brieuc | 200 | ✅ |
| /blog/hypnose-volonte-saint-brieuc | 200 | ✅ |
| /blog/sevrage-tabac-saint-brieuc | 200 | ✅ |
| /blog/hypnose-spectacle-saint-brieuc | 200 | ✅ |
| /blog/hypnose-stress-saint-brieuc | 200 | ✅ |
| /blog/hypnose-tabac-saint-brieuc | 200 | ✅ |
| /blog/deuil-amoureux-hypnose-saint-brieuc | 200 | ✅ |
| /blog/crise-angoisse-hypnose-saint-brieuc | 200 | ✅ |
| /blog/sucre-hypnose-saint-brieuc | 200 | ✅ |
