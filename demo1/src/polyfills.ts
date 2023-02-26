(window as any).global = window;
global.Buffer = global.Buffer || require('buffer').Buffer;
(window as any).process = {
  version: '',
  env: {
    GRPC_VERBOSITY: 'DEBUG'
  }
};