export default class Documents {
    constructor(item) {
        this.item = item;
    }

    imprimerDocument(){
        this.recupererInformations();
        this.preparerEncre();
        this.verifierPapier();
        this.imprimer();
        this.decouper();
        this.operationSpecifique();
        console.log("Fin de l'impression :emoji_pouce_en_l_air:\n");
    }

    recupererInformations(){
        console.log(`Récupération des informations`);
    }

    preparerEncre(){
        console.log("Préparation de l'encre");
    }

    verifierPapier(){
        console.log("Vérification du papier");
    }

    imprimer(){
        console.log("Impression");
    }

    decouper(){
        console.log("Découpage"); //att je sais plus, faudra que ça, ça soit réadapté en fonction du format (sous-classes) je verrai plus tard pfpfpfpfpfpfpfp
    }
    
}
