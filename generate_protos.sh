mkdir -p src/generated/grpc
cd src/generated && svn checkout https://github.com/NetBlockGit/dns-server/trunk/protos
protoc -I=. protos/blocker.proto \
                --js_out=import_style=commonjs,binary:grpc \
                --grpc-web_out=import_style=typescript,mode=grpcwebtext:grpc

protoc -I=. protos/toggleblocker/toggleblocker.proto \
                --js_out=import_style=commonjs,binary:grpc \
                --grpc-web_out=import_style=typescript,mode=grpcwebtext:grpc

protoc -I=. protos/getstats/getstats.proto \
                --js_out=import_style=commonjs,binary:grpc \
                --grpc-web_out=import_style=typescript,mode=grpcwebtext:grpc

protoc -I=. protos/getauthtoken/getauthtoken.proto \
                --js_out=import_style=commonjs,binary:grpc \
                --grpc-web_out=import_style=typescript,mode=grpcwebtext:grpc

rm -rf protos
cd -
