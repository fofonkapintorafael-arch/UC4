export class Registry<T> {
    private items: T[]

    public constructor() {
        this.items = []
    }

    public add(value: T): void {
        this.items.push(value)
    }

    public list(): T[] {
        return this.items
    }

    public find(condition: (item: T) => boolean): T | undefined {
        return this.items.find(condition);
    }
}