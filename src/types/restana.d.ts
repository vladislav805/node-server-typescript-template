import restana = require('restana');

declare module 'restana' {
    interface RequestExtensions extends restana.RequestExtensions {
        body: Record<string, string>;
        query: Record<string, string>;
    }
}
