# @datafire/isendpro

Client library for API iSendPro

## Installation and Usage
```bash
npm install --save @datafire/isendpro
```
```js
let isendpro = require('@datafire/isendpro').create();

isendpro.getCampagne({
  "keyid": "",
  "rapportCampagne": "",
  "date_deb": "",
  "date_fin": ""
}).then(data => {
  console.log(data);
});
```

## Description

[1] Liste des fonctionnalités :
- envoi de SMS à un ou plusieurs destinataires,
- lookup HLR,
- récupération des récapitulatifs de campagne,
- gestion des répertoires,
- ajout en liste noire.
- comptage du nombre de caractères des SMS

[2] Pour utiliser cette API vous devez:
- Créer un compte iSendPro sur https://isendpro.com/
- Créditer votre compte 
    - Remarque: obtention d'un crédit de test possible sous conditions
- Noter votre clé de compte (keyid)
  - Elle vous sera indispensable à l'utilisation de l'API
  - Vous pouvez la trouver dans le rubrique mon "compte", sous-rubrique "mon API"
- Configurer le contrôle IP
  - Le contrôle IP est configurable dans le rubrique mon "compte", sous-rubrique "mon API"
  - Il s'agit d'un système de liste blanche, vous devez entrer les IP utilisées pour appeler l'API
  - Vous pouvez également désactiver totalement le contrôle IP


## Actions

### getCampagne
Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 

Les dates sont au format YYYY-MM-DD hh:mm. 

Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.



```js
isendpro.getCampagne({
  "keyid": "",
  "rapportCampagne": "",
  "date_deb": "",
  "date_fin": ""
}, context)
```

#### Input
* input `object`
  * keyid **required** `string`: Clé API
  * rapportCampagne **required** `string` (values: 1): Doit valoir "1"
  * date_deb **required** `string`: date de debut au format YYYY-MM-DD hh:mm
  * date_fin **required** `string`: date de fin au format YYYY-MM-DD hh:mm

#### Output
* output `file`

### comptage
Compte le nombre de SMS necessaire à un envoi


```js
isendpro.comptage({
  "comptagerequest": {
    "comptage": "",
    "keyid": "",
    "num": "",
    "sms": ""
  }
}, context)
```

#### Input
* input `object`
  * comptagerequest **required** [ComptageRequest](#comptagerequest)

#### Output
* output [ComptageReponse](#comptagereponse)

### getCredit
Retourne le credit existant associe au compte.



```js
isendpro.getCredit({
  "keyid": "",
  "credit": ""
}, context)
```

#### Input
* input `object`
  * keyid **required** `string`: Clé API
  * credit **required** `string` (values: 1, 2): Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité

#### Output
* output [CreditResponse](#creditresponse)

### delListeNoire
Supprime un numero en liste noire


```js
isendpro.delListeNoire({
  "keyid": "",
  "dellisteNoire": "",
  "num": ""
}, context)
```

#### Input
* input `object`
  * keyid **required** `string`: Clé API
  * dellisteNoire **required** `string` (values: 1): Doit valoir "1"
  * num **required** `string`: numéro de mobile à supprimer

#### Output
* output [LISTENOIREReponse](#listenoirereponse)

### getListeNoire
Retourne un fichier csv zippé contenant la liste noire


```js
isendpro.getListeNoire({
  "keyid": "",
  "getListeNoire": ""
}, context)
```

#### Input
* input `object`
  * keyid **required** `string`: Clé API
  * getListeNoire **required** `string` (values: 1): Doit valoir "1"

#### Output
* output `file`

### getHlr
Réalise un lookup HLR sur les numéros 



```js
isendpro.getHlr({
  "hlrrequest": {
    "getHLR": "",
    "keyid": "",
    "num": []
  }
}, context)
```

#### Input
* input `object`
  * hlrrequest **required** [HLRrequest](#hlrrequest)

#### Output
* output [HLRReponse](#hlrreponse)

### repertoireCrea
Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.


```js
isendpro.repertoireCrea({
  "repertoirecreaterequest": {
    "keyid": "",
    "repertoireEdit": "",
    "repertoireNom": ""
  }
}, context)
```

#### Input
* input `object`
  * repertoirecreaterequest **required** [REPERTOIREcreaterequest](#repertoirecreaterequest)

#### Output
* output [REPERTOIREcreatereponse](#repertoirecreatereponse)

### repertoire
Ajoute ou supprime une liste de numéros à un répertoire existant.


```js
isendpro.repertoire({
  "repertoiremodifrequest": {
    "keyid": "",
    "num": [],
    "repertoireEdit": "",
    "repertoireId": ""
  }
}, context)
```

#### Input
* input `object`
  * repertoiremodifrequest **required** [REPERTOIREmodifrequest](#repertoiremodifrequest)

#### Output
* output [REPERTOIREmodifreponse](#repertoiremodifreponse)

### setListeNoire
Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.


```js
isendpro.setListeNoire({
  "keyid": "",
  "setlisteNoire": "",
  "num": ""
}, context)
```

#### Input
* input `object`
  * keyid **required** `string`: Clé API
  * setlisteNoire **required** `string` (values: 1): Doit valoir "1"
  * num **required** `string`: numéro de mobile à insérer en liste noire

#### Output
* output [LISTENOIREReponse](#listenoirereponse)

### sendSms
Envoi un sms vers un unique destinataire


```js
isendpro.sendSms({
  "smsrequest": {
    "keyid": "",
    "num": "",
    "sms": ""
  }
}, context)
```

#### Input
* input `object`
  * smsrequest **required** [SmsUniqueRequest](#smsuniquerequest)

#### Output
* output [SMSReponse](#smsreponse)

### sendSmsMulti
Envoi de SMS vers 1 ou plusieurs destinataires



```js
isendpro.sendSmsMulti({
  "smsrequest": {
    "keyid": "",
    "num": [],
    "sms": []
  }
}, context)
```

#### Input
* input `object`
  * smsrequest **required** [SMSRequest](#smsrequest)

#### Output
* output [SMSReponse](#smsreponse)



## Definitions

### ComptageReponse
* ComptageReponse `object`
  * etat [ComptageReponse_etat](#comptagereponse_etat)

### ComptageReponse_etat
* ComptageReponse_etat `object`
  * etat `array`
    * items [ComptageReponse_etat_etat](#comptagereponse_etat_etat)

### ComptageReponse_etat_etat
* ComptageReponse_etat_etat `object`
  * nb_caractere `string`: nombre de caractères
  * nb_sms `string`: nombre de sms nécessaires
  * tel `string`: numéro de téléphone

### ComptageRequest
* ComptageRequest `object`
  * comptage **required** `string` (values: 1)
  * date_envoi `string`: Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.
  * emetteur `string`: - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
  * keyid **required** `string`: Clé API
  * nostop `string`: Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"
  * num **required** `string`: Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
  * sms **required** `string`: Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
  * smslong `string` (values: 999): Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
  * tracker `string`: Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. 
  * ucs2 `string`: Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur

### CreditResponse
* CreditResponse `object`
  * etat [CreditResponse_etat](#creditresponse_etat)

### CreditResponse_etat
* CreditResponse_etat `object`
  * credit `number`: Montant du crédit restant
  * quantite `string`: Equivalence du crédit en nombre de SMS vers la France Métropolitaine.

### Erreur
* Erreur `object`
  * etat [Erreur_etat](#erreur_etat)

### Erreur_etat
* Erreur_etat `object`
  * etat `array`
    * items [Erreur_etat_etat](#erreur_etat_etat)

### Erreur_etat_etat
* Erreur_etat_etat `object`
  * code `string`: Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
  * message `string`: Libellé associé au code de retour

### HLRReponse
* HLRReponse `object`
  * etat [HLRReponse_etat](#hlrreponse_etat)

### HLRReponse_etat
* HLRReponse_etat `object`
  * etat **required** `array`: liste des retours
    * items [HLRReponse_etat_etat](#hlrreponse_etat_etat)

### HLRReponse_etat_etat
* HLRReponse_etat_etat `object`
  * operateur **required** `string`: Opérateur associé (si numéro valide)
  * tel **required** `string`: Numero de téléphone concerné

### HLRrequest
* HLRrequest `object`
  * getHLR **required** `string` (values: 1): Doit valoir "1"
  * keyid **required** `string`: Clé API
  * num **required** `array`: liste de numéros de téléphone
    * items `string`: numéro au format national français ou international

### LISTENOIREReponse
* LISTENOIREReponse `object`
  * etat [LISTENOIREReponse_etat](#listenoirereponse_etat)

### LISTENOIREReponse_etat
* LISTENOIREReponse_etat `object`
  * etat **required** `array`
    * items [LISTENOIREReponse_etat_etat](#listenoirereponse_etat_etat)

### LISTENOIREReponse_etat_etat
* LISTENOIREReponse_etat_etat `object`
  * listeNoire **required** `string`: Doit valoir "OK"
  * tel **required** `string`: Numéro de téléphone à placer en liste noire. Format national Français ou international.

### REPERTOIREcreatereponse
* REPERTOIREcreatereponse `object`
  * etat [REPERTOIREcreatereponse_etat](#repertoirecreatereponse_etat)

### REPERTOIREcreatereponse_etat
* REPERTOIREcreatereponse_etat `object`
  * etat `array`
    * items [REPERTOIREcreatereponse_etat_etat](#repertoirecreatereponse_etat_etat)

### REPERTOIREcreatereponse_etat_etat
* REPERTOIREcreatereponse_etat_etat `object`
  * code **required** `string`: Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
  * message `string`: Libellé associé au code retour.
  * repertoireId `string`: repertoireId du repertoire crée.

### REPERTOIREcreaterequest
* REPERTOIREcreaterequest `object`
  * keyid **required** `string`: Clé API
  * repertoireEdit **required** `string` (values: create): Action à réaliser doit valoir "create" ici.
  * repertoireNom **required** `string`: Nom du répertoire (libellé) à créer

### REPERTOIREmodifreponse
* REPERTOIREmodifreponse `object`
  * etat [REPERTOIREmodifreponse_etat](#repertoiremodifreponse_etat)

### REPERTOIREmodifreponse_etat
* REPERTOIREmodifreponse_etat `object`
  * etat `array`
    * items [REPERTOIREmodifreponse_etat_etat](#repertoiremodifreponse_etat_etat)

### REPERTOIREmodifreponse_etat_etat
* REPERTOIREmodifreponse_etat_etat `object`: Tableau de code retour. Si succès, un code retour distinct par numéro soumis.
  * code **required** `string`: Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
  * message `string`: Libellé associé au code retour.
  * repertoireId `string`: repertoireId passé en argument lors de l'appel
  * tel `string`: Numéro de téléphone

### REPERTOIREmodifrequest
* REPERTOIREmodifrequest `object`
  * champ1 `array`: Noms des contact
    * items `string`: Nom des contacts
  * champ10 `array`: Champs I des contacts
    * items `string`: Champ I
  * champ11 `array`: Champs J des contacts
    * items `string`: Champ J
  * champ12 `array`: Champs K des contacts
    * items `string`: Champ K
  * champ13 `array`: Champs L des contacts
    * items `string`: Champ L
  * champ14 `array`: Champs M des contacts
    * items `string`: Champ M
  * champ15 `array`: Champs N des contacts
    * items `string`: Champ N
  * champ16 `array`: Champs O des contacts
    * items `string`: Champ O
  * champ17 `array`: Champs P des contacts
    * items `string`: Champ P
  * champ18 `array`: Champs Q des contacts
    * items `string`: Champ Q
  * champ19 `array`: Champs R des contacts
    * items `string`: Champ R
  * champ2 `array`: Champs A des contacts
    * items `string`: Champ A
  * champ20 `array`: Champs S des contacts
    * items `string`: Champ S
  * champ21 `array`: Champs T des contacts
    * items `string`: Champ T
  * champ22 `array`: Champs U des contacts
    * items `string`: Champ U
  * champ23 `array`: Champs V des contacts
    * items `string`: Champ V
  * champ24 `array`: Champs W des contacts
    * items `string`: Champ W
  * champ25 `array`: Champs X des contacts
    * items `string`: Champ X
  * champ26 `array`: Champs Y des contacts
    * items `string`: Champ Y
  * champ27 `array`: Champs Z des contacts
    * items `string`: Champ Z
  * champ3 `array`: Champs B des contacts
    * items `string`: Champ B
  * champ4 `array`: Champs C des contacts
    * items `string`: Champ C
  * champ5 `array`: Champs D des contacts
    * items `string`: Champ D
  * champ6 `array`: Champs E des contacts
    * items `string`: Champ E
  * champ7 `array`: Champs F des contacts
    * items `string`: Champ F
  * champ8 `array`: Champs G des contacts
    * items `string`: Champ G
  * champ9 `array`: Champs H des contacts
    * items `string`: Champ H
  * keyid **required** `string`: Clé API
  * num **required** `array`: liste des numéros des téléphone à ajouter ou supprimer
    * items `string`: Numéro de téléphone au format national ou international
  * repertoireEdit **required** `string` (values: add, del): action à réaliser, "add" pour l'ajout de numéros, "del" pour la suppression de numéros
  * repertoireId **required** `string`: repertoireId du répertoire cible

### SMSReponse
* SMSReponse `object`
  * etat [SMSReponse_etat](#smsreponse_etat)

### SMSReponse_etat
* SMSReponse_etat `object`
  * etat `array`
    * items [SMSReponse_etat_etat](#smsreponse_etat_etat)

### SMSReponse_etat_etat
* SMSReponse_etat_etat `object`
  * code `integer`: Code retour. Voir "tableau des code retour" dans l'annexe de la documentation
  * message `string`: Libellé associé au code de retour
  * smslong `string`: Nombre de SMS longs facturés
  * tel `string`: Numero de téléphone concerné

### SMSRequest
* SMSRequest `object`
  * date_envoi `string`: Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm
  * emetteur `string`: L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.
  * keyid **required** `string`: Clé API
  * nostop `string`: Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"
  * num **required** `array`
    * items `string`: Numeros de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
  * repertoireId `string`: Id du repertoire
  * sms **required** `array`
    * items `string`: Message à envoyer aux destinataires. Il peut y avoir un seul message ou 1 message par destintaire différent.
  * smslong `string`: Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999" 
  * tracker `array`
    * items `string`: Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. 
  * ucs2 `string`: Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.

### SmsUniqueRequest
* SmsUniqueRequest `object`
  * date_envoi `string`: Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.
  * emetteur `string`: - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
  * keyid **required** `string`: Clé API
  * nostop `string`: Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"
  * num **required** `string`: Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
  * sms **required** `string`: Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
  * smslong `string`: Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
  * tracker `string`: Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. 
  * ucs2 `string`: Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur


