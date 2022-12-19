export default class Job {
    static gerente: Job;
    static atendente: Job;
    constructor(private name: string) {
        this.name = name;
    }

    gerente = new Job("gerente")
    atendente = new Job("atendente")
    
};
