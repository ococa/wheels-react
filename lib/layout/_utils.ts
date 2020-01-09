import {packagePrefix} from "../variables";
import {scopedClassFactory} from "../helper/classes";

const componentPrefix = 'layout';
const prefix = `${packagePrefix}-${componentPrefix}`;
const sc = scopedClassFactory(prefix);

export { sc };
