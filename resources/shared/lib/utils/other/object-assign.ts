/* eslint-disable */
import {Maybe} from "@/shared/types/helpers";

if (typeof Object.assign !== 'function') {
    Object.assign = function (target: Maybe<Object>) {
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (let index = 1; index < arguments.length; index++) {
            const source = arguments[index];
            if (source != null) {
                for (const key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        // @ts-ignore
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
/* eslint-enable */
