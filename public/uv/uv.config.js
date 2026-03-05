// This file overwrites the stock UV config.js

self.__uv$config = {
	prefix: "/uv/service/",
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: "/uv/uv.handler.js",
	client: "/uv/uv.client.js",
	bundle: "/uv/uv.bundle.js",
	config: "/uv/uv.config.js",
	sw: "/uv/uv.sw.js",
if (typeof BareMux !== 'undefined') {
    const connection = new BareMux.BareMuxConnection('/baremux/worker.js');
    connection.setTransport('/epoxy/index.mjs', [{ wisp: 'wss://wisp.mercurywork.shop/' }]);
};
