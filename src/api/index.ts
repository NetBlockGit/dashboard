import { BlockerClient } from "../generated/grpc/protos/BlockerServiceClientPb"
// import { GetAuthTokenRequest } from "../generated/grpc/protos/getauthtoken/getauthtoken_pb"
import { Metadata } from 'grpc-web';
import GrpcLoaderInterceptor from "./interceptors/loaderui";


console.log(process.env.REACT_APP_SERVER_URL ?? "http://localhost:8080");

const blockerservice = new BlockerClient(process.env.REACT_APP_SERVER_URL ?? "http://localhost:8080", null, { 'unaryInterceptors': [new GrpcLoaderInterceptor()] });
// blockerservice.getAuthToken()
export const getAuthMetaData = (): Metadata => { return { "authorization": localStorage.getItem("token") ?? "" } }

export default blockerservice