import Documents from "./documents.js";

export default class passeport extends Documents {
    decouper() {
        console.log("Découpe au format livret");
    }

    operationSpecifique(){
        console.log("Reliure!!!!!!!!!!!")
    }
}