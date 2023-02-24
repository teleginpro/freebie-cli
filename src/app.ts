import LinksSource from "./links-source";
import { getOptions } from "./options";
import { install } from "source-map-support";

install();

async function main(): Promise<void> {
    const options = getOptions();

    const linksSource = LinksSource.create(options.source);

    while (await linksSource.canBeRead()) {
        const link = linksSource.read();
        console.log(link);
    }
}

void main();
