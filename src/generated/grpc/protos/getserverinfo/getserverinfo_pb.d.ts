import * as jspb from 'google-protobuf'



export class GetServerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerInfoRequest): GetServerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerInfoRequest;
  static deserializeBinaryFromReader(message: GetServerInfoRequest, reader: jspb.BinaryReader): GetServerInfoRequest;
}

export namespace GetServerInfoRequest {
  export type AsObject = {
  }
}

export class GetServerInfoResponse extends jspb.Message {
  getIsactive(): boolean;
  setIsactive(value: boolean): GetServerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerInfoResponse): GetServerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetServerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerInfoResponse;
  static deserializeBinaryFromReader(message: GetServerInfoResponse, reader: jspb.BinaryReader): GetServerInfoResponse;
}

export namespace GetServerInfoResponse {
  export type AsObject = {
    isactive: boolean,
  }
}

