export default {
    install(Vue, options) {
        var GetData = function (param) {
            var self = {}; 
            param = param || {};
            param.type = (param.type || "GET").toUpperCase();
            param.beforeSend = param.beforeSend || function () {};
            param.success = param.success || function () {};
            param.error = param.error || function () {};
            param.complete = param.complete || function () {};

            var hasType = function(value){
                if(value instanceof Array) return 'array';
                if(value instanceof Object) return 'object';
                if(typeof value == 'string') return 'string';
                if(typeof value == 'number') return 'number';
                if(typeof value == 'function') return 'function';
            }

            var setObjData = function(data, parentName) {
                function encodeData(name, value, parentName) {
                    var items = [];
                    name = parentName === undefined ? name : parentName + "[" + name + "]";
                    if (typeof value === "object" && value !== null) {
                        items = items.concat(setObjData(value, name));
                    } else {
                        name = encodeURIComponent(name);
                        value = encodeURIComponent(value);
                        items.push(name + "=" + value);
                    }
                    return items;
                }
                var arr = [],value;
                if (Object.prototype.toString.call(data) == '[object Array]') {
                    for (var i = 0, len = data.length; i < len; i++) {
                        value = data[i];
                        arr = arr.concat(encodeData( typeof value == "object" ? i : "", value, parentName));
                    }
                } else if (Object.prototype.toString.call(data) == '[object Object]') {
                    for (var key in data) {
                        value = data[key];
                        arr = arr.concat(encodeData(key, value, parentName));
                    }
                }
                return arr.join("&").replace("/%20/g", "+");
            };


            var params = setObjData(param.data);

            if (window.XMLHttpRequest) {
                self.xhr = new XMLHttpRequest();
            } else if (window.ActiveObject) {
                self.xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }

            param.beforeSend();

            if (param.timeout) {
                var time = parseInt(param.timeout);
                var timeout = setTimeout(function () {
                    self.xhr.close();
                }, time)
            }

            var requestedState = true;

            if (param.type == "GET") {
                self.xhr.open("GET", param.url + "?" + params, true);
                self.xhr.withCredentials = true;
                if (param.headers) {
                    for (var item in param.headers) {
                        self.xhr.setRequestHeader(item, param.headers[item]);
                        if (item == "x-requested-with") {
                            requestedState = false;
                        }
                    }
                    if (requestedState) {
                        self.xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                    }
                } else {
                    self.xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                }
                self.xhr.send(null);
            } else if (param.type == "POST") {
                self.xhr.open("POST", param.url, true);
                self.xhr.withCredentials = true;
                self.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                if (param.headers) {
                    for (var item in param.headers) {
                        self.xhr.setRequestHeader(item, param.headers[item]);
                        if (item == "x-requested-with") {
                            requestedState = false;
                        }
                    }
                    if (requestedState) {
                        self.xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                    }
                } else {
                    self.xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                }
                self.xhr.send(params);
            }

            self.xhr.onreadystatechange = function () {
                if (self.xhr.readyState == 4) {
                    clearTimeout(timeout);
                    param.complete();
                    var status = self.xhr.status;
                    if (status >= 200 && status < 300 || status == 304) {
                        if (param.context) {
                            param.success && param.success.call(param.context, JSON.parse(self.xhr.responseText, self.xhr.responseXML));
                        } else {
                            
                            param.success && param.success(JSON.parse(self.xhr.responseText, self.xhr.responseXML));
                        }
                    } else {
                        if (status == 0) {
                            return;
                        }
                        param.error && param.error(status);
                    }
                }
            }

            return self.xhr;
        };

        GetData.prototype.abort = function () {
            if (this.xhr.readyState != 4) {
                this.xhr.close();
            }
        };

        var final = function (status, value) {
            var promise = this,
                fn, st;

            if (promise._status !== 'PENDING') return;

            // 所以的执行都是异步调用，保证then是先执行的
            setTimeout(function () {
                promise._status = status;
                st = promise._status === 'FULFILLED'
                var queue = promise[st ? '_resolves' : '_rejects'];

                while (fn = queue.shift()) {
                    value = fn.call(promise, value) || value;
                }

                promise[st ? '_value' : '_reason'] = value;
                promise['_resolves'] = promise['_rejects'] = undefined;
            });
        };

        Vue.prototype.$ajax = GetData;
    }
}