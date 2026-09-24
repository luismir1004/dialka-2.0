import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock asíncrono fiel de IntersectionObserver para jsdom
class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  observe = vi.fn((target: Element) => {
    setTimeout(() => {
      this.callback(
        [
          {
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: {} as DOMRectReadOnly,
            intersectionRect: {} as DOMRectReadOnly,
            rootBounds: null,
            target: target || document.createElement("div"),
            time: Date.now(),
          },
        ],
        this as unknown as IntersectionObserver
      );
    }, 0);
  });
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});
