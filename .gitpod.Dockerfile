FROM gitpod/workspace-full
RUN sudo apt update && sudo apt install -y protobuf-compiler
RUN wget https://github.com/grpc/grpc-web/releases/download/1.3.0/protoc-gen-grpc-web-1.3.0-linux-x86_64
RUN chmod +x protoc-gen-grpc-web-1.3.0-linux-x86_64
RUN sudo mv protoc-gen-grpc-web-1.3.0-linux-x86_64 \
    /usr/local/bin/protoc-gen-grpc-web