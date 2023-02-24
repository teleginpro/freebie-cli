import LinksSource from "./links-source";
import { getOptions } from "./options";
import { install } from "source-map-support";

install();

async function main(): Promise<void> {
    const options = getOptions();

    const linksSource = LinksSource.create(options.source);

    let link: string | undefined;
    while ((link = await linksSource.read()) !== undefined) {
        console.log(link);
    }
}

void main();
