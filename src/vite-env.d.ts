/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  class SplitText {
    readonly chars: Element[];
    readonly lines: Element[];
    readonly words: Element[];
    readonly elements: Element[];
    readonly selector: string | Function;
    readonly isSplit: boolean;

    constructor(target: gsap.DOMTarget, vars?: SplitText.Vars);

    revert(): void;
    split(vars?: SplitText.Vars): SplitText;
    static create(target: gsap.DOMTarget, vars?: SplitText.Vars): SplitText;
  }

  namespace SplitText {
    interface Vars {
      [key: string]: any;
      type?: string;
      charsClass?: string;
      wordsClass?: string;
      linesClass?: string;
      position?: string;
      lineThreshold?: number;
      reduceWhiteSpace?: boolean;
      specialChars?: string[] | Function;
      wordDelimiter?: string;
      tag?: string;
      span?: boolean;
      absolute?: boolean;
    }
  }

  export default SplitText;
  export { SplitText };
}
