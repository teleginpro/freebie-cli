import commandLineArgs from "command-line-args";
import commandLineUsage, { Section, OptionDefinition } from "command-line-usage";

export interface Options {
    source: string | undefined;
}

interface OptionsWithHelp extends Options {
    help: boolean;
}

export function get(): Options | never {
    const optionsDefenition: OptionDefinition[] = [
        {
            name: "source",
            alias: "s",
            type: String,
            typeLabel: "{underline file}",
            description: "File listing video links.",
        },
        {
            name: "help",
            type: Boolean,
            defaultValue: false,
            description: "Print this usage guide.",
        },
    ];

    const sections: Section[] = [
        {
            header: "freebie",
            content: "Download video from Youtube",
        },
        {
            header: "Options",
            optionList: optionsDefenition,
        },
    ];

    const options = commandLineArgs(optionsDefenition) as OptionsWithHelp;

    if (options.help) {
        console.log(commandLineUsage(sections));
        process.exit(0);
    }

    return options;
}
