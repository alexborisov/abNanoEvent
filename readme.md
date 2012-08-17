# abNanoEvent
An ultralight JS event emitter

It aims to be as small and light as possible (501 bytes compressed, 265 bytes gziped) and is specifically designed (but not restricted) for usage in the browser.

**Please note:** that this is an *internal component* that I have decided to open source for the greater good. It is designed to be as *simplistic* an implementation of the observer pattern as possible. The requirements were highest possible performance and lowest possible footprint. Because of that functionality and sanity checking are at an utmost minimal (it is assumed that the end developer will ensure proper implementation). If you require something more sophisticated there are plenty of libraries already available.

## Usage

You can use this script in the browser, as a mixin or as a node module (I will package this into a proper node module at some point).

Simply instantiate a new abNanoEvent object or inherit it in your class.

### .on(eventName, callback)
  Subscribe to an event. Callback will be executed once event is emitted

### .off(eventName, callback)
  Unsubscribe from an event. If you call this function with just one argument (i.e no callback) then the entire event will be removed.

### .emit(eventName, [parameters])
  Trigger an event. All registered callback functions that are subscribed to that event will be executed. Any parameters will be passed to the callback

## Example

```js
var ee = new abNanoEvent();

function cow(type) { console.log(type + " cow") };

ee.on("moo", cow);
ee.emit("moo",['tasty']);
ee.off("moo");
```

Outputs to console:

```js
tasty cow
```

## License
(MIT 2-Clause)

Copyright (c) 2012, Alex Borisov <http://alexborisov.org>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.