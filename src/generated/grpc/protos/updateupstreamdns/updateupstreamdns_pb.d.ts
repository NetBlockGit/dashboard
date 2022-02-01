import * as jspb from 'google-protobuf'



export class UpdateUpstreamDnsRequest extends jspb.Message {
  getNewdnsserver(): string;
  setNewdnsserver(value: string): UpdateUpstreamDnsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUpstreamDnsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUpstreamDnsRequest): UpdateUpstreamDnsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUpstreamDnsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUpstreamDnsRequest;
  static deserializeBinaryFromReader(message: UpdateUpstreamDnsRequest, reader: jspb.BinaryReader): UpdateUpstreamDnsRequest;
}

export namespace UpdateUpstreamDnsRequest {
  export type AsObject = {
    newdnsserver: string,
  }
}

export class UpdateUpstreamDnsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUpstreamDnsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUpstreamDnsResponse): UpdateUpstreamDnsResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUpstreamDnsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUpstreamDnsResponse;
  static deserializeBinaryFromReader(message: UpdateUpstreamDnsResponse, reader: jspb.BinaryReader): UpdateUpstreamDnsResponse;
}

export namespace UpdateUpstreamDnsResponse {
  export type AsObject = {
  }
}

