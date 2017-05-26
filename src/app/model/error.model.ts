
export class Error {
    key: string;
    description: string;
    errors: Error[] = [];

    constructor(key: string, description: string) {
        this.key = key;
        this.description = description;
    }
}