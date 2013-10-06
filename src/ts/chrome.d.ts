declare module chrome {
    export var tabs;
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
        editable: boolean;
        wasChecked?: boolean;
        checked?: boolean;
    }

    interface CreateProperties {
        type?: string;
        id: string;
        title?: string;
        checked?: boolean;
        contexts?: string[];
        parentId?: string;
        documentUrlPatterns?: string[];
        enabled?: boolean;
    }

    export module onClicked {
        export function addListener(cb: (info: OnClickData, tab?: any) => void);
    }

    export function create(createProperties: CreateProperties, callback?: () => void);
}

declare module chrome.extension {
  export function getURL(url: string) : string;
}

declare module chrome.runtime {
    export module onMessage {
        export function addListener(cb: (request: any, sender: any, response: (resp: any) => void) => void);
    }
    export function sendMessage(message: any, callback: (response) => void);
}


