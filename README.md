# 🎨 Portfolio Template - React

Un template de portfolio moderne, élégant et entièrement personnalisable, développé avec React et Tailwind CSS.

![Portfolio Preview](/readme_ressources/white_theme.png)
![Portfolio Preview](/readme_ressources/dark_theme.png)

## ✨ Fonctionnalités

- 🌓 **Mode sombre/clair** - Basculez entre les thèmes pour une meilleure expérience utilisateur
- 🌍 **Bilingue (FR/EN)** - Support complet français et anglais
- 📱 **Responsive** - Optimisé pour mobile, tablette et desktop
- 🎨 **Design moderne** - Effets de parallaxe et animations fluides
- ⚡ **Navigation fluide** - Scroll smooth et transitions élégantes
- 🎭 **Animations** - Micro-interactions et effets visuels soignés

## 🚀 Démarrage rapide

### Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Luxinenglish/pink_portfolio_template.git

# Aller dans le dossier
cd portfolio-template

# Installer les dépendances
npm install

# Lancer en mode développement
npm start
```

## 📝 Personnalisation

### Configuration simple

Tout est centralisé dans l'objet `config` au début du fichier (lignes 30-180). Modifiez simplement ces valeurs pour personnaliser entièrement votre portfolio.

### 🎯 Sections à personnaliser

#### 1. **Informations personnelles**
```javascript
const config = {
    name: "Votre Nom",
    title: {
        fr: "Votre Titre Professionnel",
        en: "Your Professional Title"
    },
    description: {
        fr: "Une description accrocheuse...",
        en: "A catchy description..."
    },
    photoUrl: "https://your-image-url.com/photo.jpg"
}
```

#### 2. **À propos**
4 paragraphes personnalisables en français et anglais :
```javascript
about: {
    fr: [
        "Premier paragraphe...",
        "Deuxième paragraphe...",
        "Troisième paragraphe...",
        "Quatrième paragraphe..."
    ],
    en: [...]
}
```

#### 3. **Projets**
Tableau de projets (ajoutez-en autant que vous voulez) :
```javascript
projects: [
    {
        title: { fr: "Projet 1", en: "Project 1" },
        description: { fr: "...", en: "..." },
        skills: ["Compétence A", "Compétence B"],
        imageUrl: "https://..."
    },
    // Ajoutez plus de projets ici
]
```

#### 4. **Portfolio créatif**
Présentez vos créations, maquettes, designs :
```javascript
models: [
    {
        title: { fr: "Création 1", en: "Creation 1" },
        description: { fr: "...", en: "..." },
        details: {
            fr: ["Matériaux : ...", "Échelle : ..."],
            en: ["Materials: ...", "Scale: ..."]
        },
        imageUrl: "https://..."
    }
]
```

#### 5. **Formation**
Votre parcours académique :
```javascript
education: [
    {
        school: "Nom de l'école",
        degree: { fr: "Diplôme", en: "Degree" },
        period: { fr: "2024 - Présent", en: "2024 - Present" },
        level: { fr: "Niveau", en: "Level" }
    }
]
```

#### 6. **Expériences**
Vos stages et expériences professionnelles :
```javascript
experiences: [
    {
        title: { fr: "Titre du stage", en: "Internship title" },
        period: { fr: "Durée", en: "Duration" },
        company: "Nom de l'entreprise",
        description: { fr: "...", en: "..." }
    }
]
```

#### 7. **Contact**
Vos liens de contact (optionnels) :
```javascript
contact: {
    email: "votre.email@exemple.com",
    linkedin: "https://linkedin.com/in/...",
    github: "https://github.com/...",      // Optionnel
    twitter: "https://twitter.com/...",     // Optionnel
    instagram: "https://instagram.com/..."  // Optionnel
}
```

#### 8. **Footer**
Personnalisez le crédit du footer :
```javascript
footerCredit: {
    name: "Votre Nom",
    url: "https://votre-site.com"  // Optionnel
}
```

## 🎨 Personnalisation avancée

### Changer les couleurs

Le template utilise des couleurs rose/rouge par défaut. Pour les modifier, recherchez et remplacez :
- `pink-` par votre couleur préférée (ex: `blue-`, `purple-`, `green-`)
- `rose-` par votre couleur secondaire

### Ajouter/Retirer des sections

Pour ajouter ou retirer des sections, modifiez le tableau `sections` :
```javascript
const sections = [
    { id: 'accueil', label: t.nav.home },
    { id: 'apropos', label: t.nav.about },
    // Ajoutez vos sections ici
];
```

### Modifier les animations

Les effets de parallaxe peuvent être ajustés dans les propriétés `style` :
```javascript
style={{ transform: `translateY(${scrollY * 0.05}px)` }}
// Changez le multiplicateur (0.05) pour modifier la vitesse
```

## 📦 Structure du projet

```
portfolio-template/
├── src/
│   ├── components/
│   │   └── Portfolio.jsx    # Composant principal
│   ├── App.js
│   └── index.js
├── public/
│   └── images/              # Vos images
├── package.json
└── README.md
```

## 🛠️ Technologies utilisées

- **React** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Bibliothèque d'icônes
- **React Hooks** - useState, useEffect

## 📱 Responsive Design

Le portfolio s'adapte automatiquement à toutes les tailles d'écran :
- 📱 **Mobile** : < 768px
- 📱 **Tablette** : 768px - 1024px
- 💻 **Desktop** : > 1024px

## 🌐 Déploiement

### Netlify
```bash
npm run build
# Glissez-déposez le dossier build/ sur Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Configurez GitHub Pages pour pointer vers le dossier build/
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 💡 Inspiration et crédits

Ce template a été créé pour offrir une solution simple et élégante pour créer un portfolio professionnel en quelques minutes.

## 📞 Support

Si vous avez des questions ou besoin d'aide :
- 📧 Email : votre.email@exemple.com
- 🐛 Issues : [GitHub Issues](https://github.com/votre-username/portfolio-template/issues)
- 💬 Discussions : [GitHub Discussions](https://github.com/votre-username/portfolio-template/discussions)

---

⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile sur GitHub !

**Fait avec ❤️ et React**