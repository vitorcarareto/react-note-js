const api_latency_example = 500;

let failedLoadAttempts = 2;
let failedSaveAttempts = 2;

class NoteService {
    static load() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (failedLoadAttempts > 1) {
                    const notes = window.localStorage.getItem("notes");
                    resolve(JSON.parse(notes || "[]"));
                } else {
                    failedLoadAttempts++;
                    reject();
                }
            }, api_latency_example);
        });
    }
    static save(notes) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (failedSaveAttempts > 1) {
                    window.localStorage.setItem("notes", JSON.stringify(notes));
                    resolve();
                } else {
                    failedSaveAttempts++;
                    reject();
                }
            }, api_latency_example);
        });
    }
}

export default NoteService;
