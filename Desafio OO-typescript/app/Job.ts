export default class Job {
    constructor(private name: string) {
        this.name = name;
    }

    getJob() {
        let job = new Job("job")
        return job
    }
};
