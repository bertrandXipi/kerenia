# Guide de Test Anti-Spam

## 🧪 Tests à effectuer après déploiement

### ✅ Test 1 : Soumission normale (doit réussir)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir tous les champs correctement :
   - Nom : "Jean Dupont"
   - Email : "jean.dupont@example.com"
   - Téléphone : "0612345678"
   - Sujet : "Réservation"
   - Message : "Bonjour, je souhaite réserver un appartement pour 2 personnes."
4. Soumettre
5. **Résultat attendu** : ✅ Message "Message envoyé avec succès"

---

### ❌ Test 2 : Soumission trop rapide (doit échouer)
1. Ouvrir le formulaire de contact
2. **Immédiatement** remplir et soumettre (< 3 secondes)
3. **Résultat attendu** : ❌ Erreur "Soumission trop rapide. Veuillez réessayer."

---

### ❌ Test 3 : Formulaire expiré (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre plus d'1 heure (ou modifier le timestamp dans DevTools)
3. Remplir et soumettre
4. **Résultat attendu** : ❌ Erreur "Le formulaire a expiré. Veuillez recharger la page."

**Astuce pour tester sans attendre 1h :**
```javascript
// Dans la console du navigateur
document.querySelector('input[name="_t"]').value = Date.now() - (61 * 60 * 1000);
```

---

### ❌ Test 4 : Rate limiting (doit échouer à la 6ème)
1. Soumettre 5 formulaires valides en moins d'1 heure
2. Tenter une 6ème soumission
3. **Résultat attendu** : ❌ Erreur "Trop de messages envoyés. Veuillez réessayer dans une heure."

---

### 🤫 Test 5 : Honeypot rempli (succès silencieux)
1. Ouvrir le formulaire de contact
2. Ouvrir DevTools → Console
3. Remplir le champ honeypot :
```javascript
document.querySelector('input[name="website"]').value = "https://spam.com";
```
4. Remplir le reste du formulaire normalement
5. Soumettre
6. **Résultat attendu** : ✅ Message "Message envoyé avec succès" (mais email non envoyé)

---

### 🤫 Test 6 : Second honeypot rempli (succès silencieux)
1. Ouvrir le formulaire de contact
2. Ouvrir DevTools → Console
3. Remplir le second champ honeypot :
```javascript
document.querySelector('input[name="url"]').value = "https://spam.com";
```
4. Remplir le reste du formulaire normalement
5. Soumettre
6. **Résultat attendu** : ✅ Message "Message envoyé avec succès" (mais email non envoyé)

---

### 🤫 Test 7 : Mot-clé spam dans le message (succès silencieux)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir le formulaire avec un message contenant "viagra" ou "casino" :
   - Message : "Bonjour, je veux acheter du viagra pas cher"
4. Soumettre
5. **Résultat attendu** : ✅ Message "Message envoyé avec succès" (mais email non envoyé)

**Autres mots-clés à tester :**
- viagra
- cialis
- casino
- lottery
- winner
- prize
- click here
- buy now

---

### 🤫 Test 8 : Majuscules excessives (succès silencieux)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un nom contenant 20+ majuscules :
   - Nom : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
4. Soumettre
5. **Résultat attendu** : ✅ Message "Message envoyé avec succès" (mais email non envoyé)

---

### 🤫 Test 9 : URL trop longue (succès silencieux)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un message contenant une URL > 50 caractères :
   - Message : "Visitez https://www.example.com/very/long/url/path/that/exceeds/fifty/characters/total"
4. Soumettre
5. **Résultat attendu** : ✅ Message "Message envoyé avec succès" (mais email non envoyé)

---

### 🤫 Test 10 : Tentative XSS (succès silencieux)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un message contenant du code :
   - Message : "Bonjour <script>alert('XSS')</script>"
4. Soumettre
5. **Résultat attendu** : ✅ Message "Message envoyé avec succès" (mais email non envoyé)

---

### ❌ Test 11 : Sujet invalide (doit échouer)
1. Ouvrir le formulaire de contact
2. Ouvrir DevTools → Console
3. Modifier la valeur du select :
```javascript
document.querySelector('select[name="subject"]').innerHTML += '<option value="hacking">Hacking</option>';
document.querySelector('select[name="subject"]').value = 'hacking';
```
4. Remplir le reste du formulaire
5. Soumettre
6. **Résultat attendu** : ❌ Erreur "Sujet invalide"

---

### ❌ Test 12 : Nom trop court (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un nom d'1 caractère :
   - Nom : "A"
4. Soumettre
5. **Résultat attendu** : ❌ Erreur "Le nom doit contenir au moins 2 caractères"

---

### ❌ Test 13 : Nom trop long (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un nom > 100 caractères :
   - Nom : "A" répété 101 fois
4. Soumettre
5. **Résultat attendu** : ❌ Erreur "Le nom ne peut pas dépasser 100 caractères"

---

### ❌ Test 14 : Email invalide (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un email invalide :
   - Email : "pas-un-email"
4. Soumettre
5. **Résultat attendu** : ❌ Erreur "Email invalide"

---

### ❌ Test 15 : Email trop long (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un email > 254 caractères
4. Soumettre
5. **Résultat attendu** : ❌ Erreur "Email trop long"

---

### ❌ Test 16 : Message trop court (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un message < 10 caractères :
   - Message : "Bonjour"
4. Soumettre
5. **Résultat attendu** : ❌ Erreur "Le message doit contenir au moins 10 caractères"

---

### ❌ Test 17 : Message trop long (doit échouer)
1. Ouvrir le formulaire de contact
2. Attendre 5 secondes
3. Remplir avec un message > 5000 caractères
4. Soumettre
5. **Résultat attendu** : ❌ Erreur "Le message ne peut pas dépasser 5000 caractères"

---

## 📊 Tableau récapitulatif

| # | Test | Type | Résultat attendu |
|---|------|------|------------------|
| 1 | Soumission normale | ✅ Valide | Message de succès + email envoyé |
| 2 | Soumission < 3s | ❌ Invalide | Erreur "trop rapide" |
| 3 | Formulaire > 1h | ❌ Invalide | Erreur "expiré" |
| 4 | 6ème soumission/1h | ❌ Invalide | Erreur "trop de messages" |
| 5 | Honeypot 1 rempli | 🤫 Bot | Succès silencieux (pas d'email) |
| 6 | Honeypot 2 rempli | 🤫 Bot | Succès silencieux (pas d'email) |
| 7 | Mot-clé spam | 🤫 Spam | Succès silencieux (pas d'email) |
| 8 | Majuscules excessives | 🤫 Spam | Succès silencieux (pas d'email) |
| 9 | URL trop longue | 🤫 Spam | Succès silencieux (pas d'email) |
| 10 | Tentative XSS | 🤫 Spam | Succès silencieux (pas d'email) |
| 11 | Sujet invalide | ❌ Invalide | Erreur "sujet invalide" |
| 12 | Nom trop court | ❌ Invalide | Erreur validation |
| 13 | Nom trop long | ❌ Invalide | Erreur validation |
| 14 | Email invalide | ❌ Invalide | Erreur validation |
| 15 | Email trop long | ❌ Invalide | Erreur validation |
| 16 | Message trop court | ❌ Invalide | Erreur validation |
| 17 | Message trop long | ❌ Invalide | Erreur validation |

---

## 🔍 Vérification des emails

### Emails qui DOIVENT être reçus
- ✅ Test 1 : Soumission normale

### Emails qui NE DOIVENT PAS être reçus
- 🤫 Tests 5-10 : Détections de bots/spam (succès silencieux)

### Erreurs affichées (pas d'email)
- ❌ Tests 2-4, 11-17 : Validations échouées

---

## 🛠️ Outils de test

### Script de test automatique (optionnel)

```javascript
// test-spam-detection.js
const testCases = [
  { name: 'viagra', shouldBlock: true },
  { name: 'cialis', shouldBlock: true },
  { name: 'casino', shouldBlock: true },
  { name: 'AAAAAAAAAAAAAAAAAAAA', shouldBlock: true },
  { name: '<script>alert(1)</script>', shouldBlock: true },
  { name: 'Message normal', shouldBlock: false },
];

// Fonction de test
function testSpamDetection(text) {
  const SPAM_PATTERNS = [
    /\b(viagra|cialis|casino|lottery|winner|prize|click here|buy now)\b/i,
    /https?:\/\/[^\s]{50,}/i,
    /<script|<iframe|javascript:/i,
    /\b[A-Z]{20,}\b/,
  ];
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
}

// Exécuter les tests
testCases.forEach(test => {
  const result = testSpamDetection(test.name);
  const status = result === test.shouldBlock ? '✅' : '❌';
  console.log(`${status} ${test.name}: ${result ? 'BLOQUÉ' : 'AUTORISÉ'}`);
});
```

---

## 📝 Checklist de validation

Avant de considérer les tests comme réussis :

- [ ] Test 1 réussi (soumission normale fonctionne)
- [ ] Tests 2-4 échouent correctement (time gate + rate limit)
- [ ] Tests 5-6 retournent succès silencieux (honeypots)
- [ ] Tests 7-10 retournent succès silencieux (spam patterns)
- [ ] Tests 11-17 échouent correctement (validation Zod)
- [ ] Aucun email reçu pour les tests 5-10
- [ ] Email reçu uniquement pour le test 1
- [ ] Aucune erreur dans les logs serveur (sauf logs attendus)

---

## 🚨 Que faire en cas de problème ?

### Problème : Tous les formulaires sont rejetés
- Vérifier que le timestamp `_t` est bien généré
- Vérifier la configuration SMTP dans `.env.local`
- Consulter les logs serveur

### Problème : Le rate limiting ne fonctionne pas
- Le rate limiter est en mémoire, il se réinitialise au redémarrage
- Vérifier que l'IP est bien récupérée (logs)
- Tester depuis différentes IPs si derrière un proxy

### Problème : Les honeypots ne bloquent pas
- Vérifier que les champs sont bien masqués (DevTools)
- Vérifier que les noms correspondent : `website` et `url`
- Consulter les logs serveur pour voir si la détection se déclenche

### Problème : Les patterns de spam ne détectent pas
- Vérifier que la fonction `containsSpamPatterns()` est appelée
- Tester les regex individuellement
- Ajouter des logs pour déboguer

---

**Date** : 4 mai 2026  
**Version** : 1.0  
**Statut** : Prêt pour tests
