declare global {
  interface Document {
    startViewTransition?: (cb: () => void | Promise<void>) => {
      finished: Promise<void>;
      ready: Promise<void>;
      updateCallbackDone: Promise<void>;
    };
  }
}
export {};
