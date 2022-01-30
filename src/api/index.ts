import { BlockerClient } from "../generated/grpc/protos/BlockerServiceClientPb"
import { GetAuthTokenRequest } from "../generated/grpc/protos/getauthtoken/getauthtoken_pb"
import * as grpcWeb from "grpc-web"

const blockerservice = new BlockerClient(process.env.REACT_SERVER_URL ?? "http://localhost:8080");

