import LinksSource from "./links-source";
import { get as getOptions } from "./options";
import { install as installSourceMapSupport } from "source-map-support";

installSourceMapSupport();

async function main(): Promise<void> {
    const options = getOptions();

    const linksSource = LinksSource.create(options.source);

    let link: string | undefined;
    while ((link = await linksSource.read()) !== undefined) {
        console.log(link);
    }
}

void main();
