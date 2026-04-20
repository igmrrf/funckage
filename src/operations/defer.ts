/**
 * NOTE: Running defferd calls LIFO.
 * ```
 * const main = () => {
 *   using d = new Deferrer();
 *   console.log("1");
 *   d.defer(() => {console.log("2")});
 *   console.log("3");
 *   if (Math.random() > 0.5) {
 *     console.log("greater");
 *     return;
 *   }
 *   console.log("finished");
 * };
 *
 * main()
 *
 * // result if random is greater than 0.5
 * 1
 * 3
 * greater
 * ---- Scope exiting, running deffered calls ----
 * 2
 * ```
 */
export class Deferrer {
    #stack: (() => void)[] = [];

    defer(fn: () => void) {
        if (typeof fn === "function") {
            this.#stack.push(fn);
        }
    }

    [Symbol.dispose]() {
        console.log("---- Scope exiting, running deffered calls ----");
        // Run LIFO
        for (let i = this.#stack.length - 1; i >= 0; i--) {
            try {
                this.#stack[i]();
            } catch (e) {
                console.error("Error in deferred function: ", e);
            }
        }
    }
}
