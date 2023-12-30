## Server/sign.js

Small script used for signing messages. Just replace the values of *message* and *PRIVATE_KEY*

## Changes from original project
The project now requres the user to provide a valid signiture lined to the sender account's private key
Test key-pairs - they are randomly generated and are not used in any real system. Use for testing but do no to reuse for anything else

Private Key is: 39013026de6df4b49301c6fbbd32682ddb8e8b74d73f742e6f1a32d8025f7f0b
Public key is:03718b5d25cebc53acce0048a08a2619faaa16554d702385745629bc178ed14082

Private Key is: 3be6cba329ef59390056e94c688c6849996a85e19d426fd8ba7a4fab45be2e18
Public key is:03e714b8e8f59ba58b19e4f9728a4117e2047c808d7a114a906ebf9ad0f13f829b

Private Key is: c4aefa7007ddb0f8b0472132fcc74cb523006d5fa27236e98243e52d06638cbf
Public key is:038a243d6fe34dfe1ca6fe5a2e9f4b418ee195588227851cecfd49a8284f87aad8
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

