# PartielDesignPattern

**Designs Patterns à utiliser :**
*Adaptater* parce qu'il y a deux logiciels différents avec des méthodes différentes qui sont censées fonctionner ensmble 
*Template Method* parce que les étapes d'impression sont les mêmes (même squelette d'algorithme) mais il y a des variations selon le type du document
*Factory* parce qu'elle (l'imprimante) agit sans connaitre le type de l'objet (à imprimer) et doit juste le créer 