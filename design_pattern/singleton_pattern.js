const singlton = (function () {
    let instance;

    function init() {
        // Private methods and variables
        let privateVariable = "I am a private variable.";

        function privateMethod() {
            console.log("I am a private method.");
        }

        return {
            // Public methods and variables
            publicMethod() {
                console.log("I am a public method.");
            },
            getPrivate() {
                return privateVariable;
            }
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    };
})();

const instance1 = singlton.getInstance();
const instance2 = singlton.getInstance();

console.log(instance1 == instance2);



/// Task 1: Create a Singleton Logger
/// Implement a logger that ensures only one instance exists.

const logger = (
    function () {
        let instance;

        function createInstance() {
            return {
                log(msg) {
                    console.log(`[Log] ${msg}`);
                }
            };
        }

        return {
            getInstance() {
                if (!instance) {
                    instance = createInstance();
                }

                return instance;
            }
        }
    }
)();

const logger1 = logger.getInstance();
logger1.log("Hello");

const logger2 = logger.getInstance();
logger2.log("World");