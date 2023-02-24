export default abstract class LinksSource {
    public abstract read(): Promise<string | undefined>;

    public static create(sourceFile?: string): LinksSource {
        return sourceFile ? new FileLinksSource() : new TerminalLinksSource();
    }
}

class FileLinksSource extends LinksSource {
    public override read(): Promise<string | undefined> {
        throw new Error("Method not implemented.");
    }
}

class TerminalLinksSource extends LinksSource {
    public override read(): Promise<string | undefined> {
        throw new Error("Method not implemented.");
    }
}
