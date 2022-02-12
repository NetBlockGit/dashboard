import LoaderSub from "../../subscribtions/loader/loader";

const grpcLoaderInterceptor = function () {
    //
};

grpcLoaderInterceptor.prototype.intercept = function (request: any, invoker: any) {

    return invoker(request).then((response: any) => {

        LoaderSub.next(false);
        return response;
    });
};


class GrpcLoaderInterceptor {
    intercept(request: any, invoker: any) {
        LoaderSub.next(true);
        return invoker(request).then((response: any) => {
            LoaderSub.next(false);
            return response;
        });
    }
}

export default GrpcLoaderInterceptor
