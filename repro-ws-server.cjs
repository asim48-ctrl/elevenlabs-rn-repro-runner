const { WebSocketServer } = require("ws");

const port = Number(process.env.REPRO_WS_PORT || 8799);
const server = new WebSocketServer({
  port,
  handleProtocols(protocols) {
    return protocols.has("convai") ? "convai" : false;
  },
});

server.on("connection", (socket, request) => {
  console.log(`[REPRO_WS] connection ${request.url}`);
  socket.on("message", (data) => {
    console.log(`[REPRO_WS] received ${data.toString().slice(0, 500)}`);
    socket.send(JSON.stringify({
      type: "conversation_initiation_metadata",
      conversation_initiation_metadata_event: {
        conversation_id: "conv_repro",
        agent_output_audio_format: "pcm_16000",
        user_input_audio_format: "pcm_16000",
      },
    }));
  });
  socket.on("close", (code, reason) => {
    console.log(`[REPRO_WS] close ${code} ${reason}`);
  });
});

server.on("listening", () => {
  console.log(`[REPRO_WS] listening ws://127.0.0.1:${port}`);
});
