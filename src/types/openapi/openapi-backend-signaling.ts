/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export type paths = {
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/backend": {
    /**
     * Backend API to query information required for standalone signaling servers
     * @description See sections "Backend validation" in https://nextcloud-spreed-signaling.readthedocs.io/en/latest/standalone-signaling-api-v1/#backend-requests
     */
    post: operations["signaling-backend"];
  };
};

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    Capabilities: {
      features: string[];
      "features-local": string[];
      config: {
        attachments: {
          allowed: boolean;
          folder?: string;
        };
        call: {
          enabled: boolean;
          "breakout-rooms": boolean;
          recording: boolean;
          /** Format: int64 */
          "recording-consent": number;
          "supported-reactions": string[];
          "predefined-backgrounds": string[];
          "can-upload-background": boolean;
          "sip-enabled": boolean;
          "sip-dialout-enabled": boolean;
          "can-enable-sip": boolean;
        };
        chat: {
          /** Format: int64 */
          "max-length": number;
          /** Format: int64 */
          "read-privacy": number;
          "has-translation-providers": boolean;
          /** Format: int64 */
          "typing-privacy": number;
        };
        conversations: {
          "can-create": boolean;
        };
        federation: {
          enabled: boolean;
          "incoming-enabled": boolean;
          "outgoing-enabled": boolean;
          "only-trusted-servers": boolean;
        };
        previews: {
          /** Format: int64 */
          "max-gif-size": number;
        };
        signaling: {
          /** Format: int64 */
          "session-ping-limit": number;
          "hello-v2-token-key"?: string;
        };
      };
      "config-local": {
        [key: string]: string[];
      };
      version: string;
    };
    OCSMeta: {
      status: string;
      statuscode: number;
      message?: string;
      totalitems?: string;
      itemsperpage?: string;
    };
    PublicCapabilities: OneOf<[{
      spreed: components["schemas"]["Capabilities"];
    }, unknown[]]>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = {

  /**
   * Backend API to query information required for standalone signaling servers
   * @description See sections "Backend validation" in https://nextcloud-spreed-signaling.readthedocs.io/en/latest/standalone-signaling-api-v1/#backend-requests
   */
  "signaling-backend": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v3";
      };
    };
    responses: {
      /** @description Always, sorry about that */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                type: string;
                error?: {
                  code: string;
                  message: string;
                };
                auth?: {
                  version: string;
                  userid?: string;
                  user?: {
                    [key: string]: Record<string, never>;
                  };
                };
                room?: {
                  version: string;
                  roomid?: string;
                  properties?: {
                    [key: string]: Record<string, never>;
                  };
                  permissions?: string[];
                  session?: {
                    [key: string]: Record<string, never>;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};
