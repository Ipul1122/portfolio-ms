// Global type declarations for CDN libraries: Anime.js & AOS

export interface AnimeParams {
  targets: any;
  duration?: number;
  delay?: number | ((el: any, i: number, l: number) => number);
  easing?: string;
  direction?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  opacity?: number | string | (number | string)[];
  translateX?: number | string | (number | string)[];
  translateY?: number | string | (number | string)[];
  translateZ?: number | string | (number | string)[];
  scale?: number | string | (number | string)[];
  scaleX?: number | string | (number | string)[];
  scaleY?: number | string | (number | string)[];
  rotate?: number | string | (number | string)[];
  strokeDashoffset?: any;
  strokeDasharray?: any;
  points?: any;
  d?: any;
  update?: (anim: any) => void;
  begin?: (anim: any) => void;
  complete?: (anim: any) => void;
  [key: string]: any;
}

export interface AnimeInstance {
  play: () => void;
  pause: () => void;
  restart: () => void;
  reverse: () => void;
  seek: (time: number) => void;
  finished: Promise<void>;
  [key: string]: any;
}

export interface AnimeFn {
  (params: AnimeParams): AnimeInstance;
  stagger: (value: number | [number, number] | string, options?: any) => (el: any, i: number, l: number) => number;
  setDashoffset: (el?: any) => number;
  timeline: (params?: any) => any;
  random: (min: number, max: number) => number;
  [key: string]: any;
}

export interface AOSOptions {
  offset?: number;
  delay?: number;
  duration?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
  disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean);
  startEvent?: string;
}

export interface AOSInstance {
  init: (options?: AOSOptions) => void;
  refresh: () => void;
  refreshHard: () => void;
}

declare global {
  interface Window {
    anime?: AnimeFn;
    AOS?: AOSInstance;
  }
}

export {};
