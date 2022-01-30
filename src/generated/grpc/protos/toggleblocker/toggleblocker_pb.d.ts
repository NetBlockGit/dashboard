import * as jspb from 'google-protobuf'



export class ToggleBlockerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleBlockerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleBlockerRequest): ToggleBlockerRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleBlockerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleBlockerRequest;
  static deserializeBinaryFromReader(message: ToggleBlockerRequest, reader: jspb.BinaryReader): ToggleBlockerRequest;
}

export namespace ToggleBlockerRequest {
  export type AsObject = {
  }
}

export class ToggleBlockerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleBlockerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleBlockerResponse): ToggleBlockerResponse.AsObject;
  static serializeBinaryToWriter(message: ToggleBlockerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleBlockerResponse;
  static deserializeBinaryFromReader(message: ToggleBlockerResponse, reader: jspb.BinaryReader): ToggleBlockerResponse;
}

export namespace ToggleBlockerResponse {
  export type AsObject = {
  }
}

