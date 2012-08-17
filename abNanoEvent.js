/**
 * abNanoEvent - An ultralight JS event emitter
 * @author Alex Borisov
 * @copyright Alex Borisov 2012
 * @licence BSD 2-Clause
 * @url http://alexborisov.org
 * @version 0.1
 * @type {Object}
 */

var abNanoEvent = function () {};

abNanoEvent.prototype = {
    /**
     * Register an event
     * @name on
     * @param {string} n The name of the event
     * @param {function} c The callback function
     */
    on:function (n, c)
    {
        this._que = this._que || {};
        this._que[n] = this._que[n] || [];
        this._que[n].push(c);
    },
    /**
     * Unregister an event
     * @name off
     * @param {string} n The name of the event
     * @param {function} c The callback function
     */
    off:function (n, c)
    {
        if (!this._que[n]) return;
        c || delete this._que[n];
        for (var i = 0, l = this._que[n].length, s = this._que[n]; i < l; i++) {
            s[i] === c && this._que[n].splice(i, 1);
        }
    },
    /**
     * Trigger the event
     * @name emit
     * @param {string} n The name of the event
     * @param {array} a An array of arguments to pass to the callback
     */
    emit:function (n, a)
    {
        if (!this._que[n]) return;
        for (var i = 0, l = this._que[n].length; i < l; i++) this._que[n][i].apply(this, a);
    }
}
"undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = abNanoEvent);