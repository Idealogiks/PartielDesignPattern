import Documents from "./documents.js";
import CPAM from "../CPAM.js";

export default class carteVitale extends Documents {
    constructor(item){
        super(item); 
        this.CPAM = new CPAM();
    }

    recupererInformations(){
        this.CPAM.fetchPatientData(); 
    }

    preparerEncre(){
        this.CPAM.initializeInk(); 
    }

    verifierPapier(){
        this.CPAM.verifySupport(); 
    }

    imprimer(){
        this.CPAM.startPrint(); 
    }

    decouper(){
        this.CPAM.cutCard(); 
        console.log("Découpe au format carte Vitale");
    }

    operationSpecifique(){
        this.CPAM.finalizeCard(); 
    }
}