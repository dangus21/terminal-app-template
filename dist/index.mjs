var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
import { prompt } from "prompts";
var require_src = __commonJS({
  "src/index.ts"(exports) {
    (() => __async(exports, null, function* () {
      const { packageManager } = yield prompt({
        name: "Select an option",
        message: "What package manager that you have do you prefer?",
        type: "select",
        choices: [
          {
            title: "Npm",
            value: "npm"
          },
          {
            title: "Yarn",
            value: "yarn"
          },
          {
            title: "Pnpm",
            value: "pnpm"
          }
        ],
        validate: (option) => !option ? "Select an option" : true
      });
    }))();
  }
});
export default require_src();
//# sourceMappingURL=index.mjs.map