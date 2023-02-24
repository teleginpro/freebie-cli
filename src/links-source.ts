export default abstract class LinksSource {
    public abstract canBeRead(): Promise<boolean>;

    public abstract read(): Promise<string>;

    public static create(sourceFile?: string): LinksSource {
        return sourceFile ? new FileLinksSource() : new TerminalLinksSource();
    }
}

class FileLinksSource extends LinksSource {
    public constructor() {
        super();
    }

    public canBeRead(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public read(): Promise<string> {
        throw new Error("Method not implemented.");
    }
}

class TerminalLinksSource extends LinksSource {
    public canBeRead(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public read(): Promise<string> {
        throw new Error("Method not implemented.");
    }
}
