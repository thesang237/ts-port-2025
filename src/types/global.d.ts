export {}; // Ensure this is a module

declare global {
  interface Document {
    startViewTransition(callback: () => void): ViewTransition;
  }
}
