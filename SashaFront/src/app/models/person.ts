export class Person {
    constructor (public id: number, public firstName: string, public lastName: string){ }

    public getFullName(): string{
        return this.firstName + ' ' + this.lastName;
    }
}