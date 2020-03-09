export type APIMethodResult = object | string | number | boolean;
export type APIMethodFx = (params: Record<string, string>) => Promise<APIMethodResult>;
