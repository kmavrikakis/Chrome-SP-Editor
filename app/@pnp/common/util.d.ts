import { TypedHash } from "./collections";
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
export declare function getCtxCallback(context: any, method: Function, ...params: any[]): Function;
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
export declare function dateAdd(date: Date, interval: string, units: number): Date | undefined;
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
export declare function combinePaths(...paths: string[]): string;
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
export declare function getRandomString(chars: number): string;
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export declare function getGUID(): string;
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
export declare function isFunc(cf: any): boolean;
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
export declare function objectDefinedNotNull(obj: any): boolean;
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
export declare function isArray(array: any): boolean;
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
export declare function extend<T extends TypedHash<any> = any, S extends TypedHash<any> = any>(target: T, source: S, noOverwrite?: boolean, filter?: (propName: string) => boolean): T & S;
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
export declare function isUrlAbsolute(url: string): boolean;
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
export declare function stringIsNullOrEmpty(s: string): boolean;
/**
 * Gets an attribute value from an html/xml string block. NOTE: if the input attribute value has
 * RegEx special characters they will be escaped in the returned string
 *
 * @param html HTML to search
 * @param attrName The name of the attribute to find
 */
export declare function getAttrValueFromString(html: string, attrName: string): string;
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
export declare function sanitizeGuid(guid: string): string;
export declare class Util {
    /**
     * Gets a callback function which will maintain context across async calls.
     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
     *
     * @param context The object that will be the 'this' value in the callback
     * @param method The method to which we will apply the context and parameters
     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
     */
    static getCtxCallback: typeof getCtxCallback;
    /**
     * Adds a value to a date
     *
     * @param date The date to which we will add units, done in local time
     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
     * @param units The amount to add to date of the given interval
     *
     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
     */
    static dateAdd: typeof dateAdd;
    /**
     * Combines an arbitrary set of paths ensuring and normalizes the slashes
     *
     * @param paths 0 to n path parts to combine
     */
    static combinePaths: typeof combinePaths;
    /**
     * Gets a random string of chars length
     *
     * @param chars The length of the random string to generate
     */
    static getRandomString: typeof getRandomString;
    /**
     * Gets a random GUID value
     *
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    static getGUID: typeof getGUID;
    /**
     * Determines if a given value is a function
     *
     * @param cf The thing to test for functionness
     */
    static isFunc: typeof isFunc;
    /**
     * Determines if an object is both defined and not null
     * @param obj Object to test
     */
    static objectDefinedNotNull: typeof objectDefinedNotNull;
    /**
     * @returns whether the provided parameter is a JavaScript Array or not.
    */
    static isArray: typeof isArray;
    /**
     * Provides functionality to extend the given object by doing a shallow copy
     *
     * @param target The object to which properties will be copied
     * @param source The source object from which properties will be copied
     * @param noOverwrite If true existing properties on the target are not overwritten from the source
     *
     */
    static extend: typeof extend;
    /**
     * Determines if a given url is absolute
     *
     * @param url The url to check to see if it is absolute
     */
    static isUrlAbsolute: typeof isUrlAbsolute;
    /**
     * Determines if a string is null or empty or undefined
     *
     * @param s The string to test
     */
    static stringIsNullOrEmpty: typeof stringIsNullOrEmpty;
    /**
     * Gets an attribute value from an html/xml string block
     *
     * @param html HTML to search
     * @param attrName The name of the attribute to find
     */
    static getAttrValueFromString: typeof getAttrValueFromString;
    /**
     * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
     *
     * @param guid The candidate guid id
     */
    static sanitizeGuid: typeof sanitizeGuid;
}