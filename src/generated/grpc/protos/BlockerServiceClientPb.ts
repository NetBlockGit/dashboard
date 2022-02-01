/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_getauthtoken_getauthtoken_pb from '../protos/getauthtoken/getauthtoken_pb';
import * as protos_getstats_getstats_pb from '../protos/getstats/getstats_pb';
import * as protos_toggleblocker_toggleblocker_pb from '../protos/toggleblocker/toggleblocker_pb';
import * as protos_updateupstreamdns_updateupstreamdns_pb from '../protos/updateupstreamdns/updateupstreamdns_pb';


export class BlockerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoToggleBlocker = new grpcWeb.MethodDescriptor(
    '/Blocker/ToggleBlocker',
    grpcWeb.MethodType.UNARY,
    protos_toggleblocker_toggleblocker_pb.ToggleBlockerRequest,
    protos_toggleblocker_toggleblocker_pb.ToggleBlockerResponse,
    (request: protos_toggleblocker_toggleblocker_pb.ToggleBlockerRequest) => {
      return request.serializeBinary();
    },
    protos_toggleblocker_toggleblocker_pb.ToggleBlockerResponse.deserializeBinary
  );

  toggleBlocker(
    request: protos_toggleblocker_toggleblocker_pb.ToggleBlockerRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_toggleblocker_toggleblocker_pb.ToggleBlockerResponse>;

  toggleBlocker(
    request: protos_toggleblocker_toggleblocker_pb.ToggleBlockerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_toggleblocker_toggleblocker_pb.ToggleBlockerResponse) => void): grpcWeb.ClientReadableStream<protos_toggleblocker_toggleblocker_pb.ToggleBlockerResponse>;

  toggleBlocker(
    request: protos_toggleblocker_toggleblocker_pb.ToggleBlockerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_toggleblocker_toggleblocker_pb.ToggleBlockerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Blocker/ToggleBlocker',
        request,
        metadata || {},
        this.methodInfoToggleBlocker,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Blocker/ToggleBlocker',
    request,
    metadata || {},
    this.methodInfoToggleBlocker);
  }

  methodInfoGetStats = new grpcWeb.MethodDescriptor(
    '/Blocker/GetStats',
    grpcWeb.MethodType.UNARY,
    protos_getstats_getstats_pb.GetStatsRequest,
    protos_getstats_getstats_pb.GetStatsResponse,
    (request: protos_getstats_getstats_pb.GetStatsRequest) => {
      return request.serializeBinary();
    },
    protos_getstats_getstats_pb.GetStatsResponse.deserializeBinary
  );

  getStats(
    request: protos_getstats_getstats_pb.GetStatsRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_getstats_getstats_pb.GetStatsResponse>;

  getStats(
    request: protos_getstats_getstats_pb.GetStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_getstats_getstats_pb.GetStatsResponse) => void): grpcWeb.ClientReadableStream<protos_getstats_getstats_pb.GetStatsResponse>;

  getStats(
    request: protos_getstats_getstats_pb.GetStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_getstats_getstats_pb.GetStatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Blocker/GetStats',
        request,
        metadata || {},
        this.methodInfoGetStats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Blocker/GetStats',
    request,
    metadata || {},
    this.methodInfoGetStats);
  }

  methodInfoGetAuthToken = new grpcWeb.MethodDescriptor(
    '/Blocker/GetAuthToken',
    grpcWeb.MethodType.UNARY,
    protos_getauthtoken_getauthtoken_pb.GetAuthTokenRequest,
    protos_getauthtoken_getauthtoken_pb.GetAuthTokenResponse,
    (request: protos_getauthtoken_getauthtoken_pb.GetAuthTokenRequest) => {
      return request.serializeBinary();
    },
    protos_getauthtoken_getauthtoken_pb.GetAuthTokenResponse.deserializeBinary
  );

  getAuthToken(
    request: protos_getauthtoken_getauthtoken_pb.GetAuthTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_getauthtoken_getauthtoken_pb.GetAuthTokenResponse>;

  getAuthToken(
    request: protos_getauthtoken_getauthtoken_pb.GetAuthTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_getauthtoken_getauthtoken_pb.GetAuthTokenResponse) => void): grpcWeb.ClientReadableStream<protos_getauthtoken_getauthtoken_pb.GetAuthTokenResponse>;

  getAuthToken(
    request: protos_getauthtoken_getauthtoken_pb.GetAuthTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_getauthtoken_getauthtoken_pb.GetAuthTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Blocker/GetAuthToken',
        request,
        metadata || {},
        this.methodInfoGetAuthToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Blocker/GetAuthToken',
    request,
    metadata || {},
    this.methodInfoGetAuthToken);
  }

  methodInfoUpdateUpstreamDns = new grpcWeb.MethodDescriptor(
    '/Blocker/UpdateUpstreamDns',
    grpcWeb.MethodType.UNARY,
    protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsRequest,
    protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsResponse,
    (request: protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsRequest) => {
      return request.serializeBinary();
    },
    protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsResponse.deserializeBinary
  );

  updateUpstreamDns(
    request: protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsResponse>;

  updateUpstreamDns(
    request: protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsResponse) => void): grpcWeb.ClientReadableStream<protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsResponse>;

  updateUpstreamDns(
    request: protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: protos_updateupstreamdns_updateupstreamdns_pb.UpdateUpstreamDnsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Blocker/UpdateUpstreamDns',
        request,
        metadata || {},
        this.methodInfoUpdateUpstreamDns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Blocker/UpdateUpstreamDns',
    request,
    metadata || {},
    this.methodInfoUpdateUpstreamDns);
  }

}

