module chrome.contextMenus {
    export enum Type {
        Normal      = <any>"normal",
        Checkbox    = <any>"checkbox",
        Radio       = <any>"radio",
        Separator   = <any>"separator"
    }
    export enum Context {
        All         = <any>"all",
        Page        = <any>"page",
        Frame       = <any>"frame",
        Selection   = <any>"selection",
        Link        = <any>"link",
        Editable    = <any>"editable",
        Image       = <any>"image",
        Video       = <any>"video",
        Audio       = <any>"audio",
        Launcher    = <any>"launcher"
    }
}

declare module chrome.contextMenus {
    interface OnClickData {
        menuItemId: string;
        parentMenuItemId?: string;
        mediaType?: string;
        linkUrl?: string;
        srcUrl?: string;
        pageUrl?: string;
        frameUrl?: string;
        selectionText?: string;
        editable: bool;
        wasChecked?: bool;
        checked?: bool;
    }

    interface CreateProperties {
        type?: Type;
        id?: string;
        title?: string;
        checked?: bool;
        contexts?: Context[];
        onclick?: (info: OnClickData, tab: any) => void;
        parentId?: string;
        documentUrlPatterns?: string[];
        enabled?: bool;
    }

    export function create(createProperties: CreateProperties, callback?: () => void);
}

chrome.contextMenus.create({
    title: "Encrypt Textarea",
    contexts: [chrome.contextMenus.Context.Editable],
    onclick: (info, tab) => {
        alert('here');
    }
});
