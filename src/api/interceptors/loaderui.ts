import LoaderSub from "../../subscribtions/loader/loader";


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
