exports.onPopstate = function (cb) {
  return function () {
    return $(window).on("popstate", cb);
  };
};

exports.delegate2 = function (_sel1) {
  return function (_sel2) {
    return function (el) {
      return function (sel) {
        return function (eventName) {
          return function (cb) {
            return function () {
              return $(el).delegate
                ( sel
                , eventName
                , function (e) { cb(e)(); }
                );
            };
          };
        };
      };
    };
  };
};

exports.delegate_ = function (el,  sel, eventName, cb) {
  return function () {
    return $(el).delegate(sel, eventName, cb);
  };
};

exports.target = function (jqEvent) { return function () { return jqEvent.target; }; };
exports.altKey = function (jqEvent) { return function () { return jqEvent.altKey; }; };
exports.ctrlKey = function (jqEvent) { return function () { return jqEvent.ctrlKey; }; };
exports.shiftKey = function (jqEvent) { return function () { return jqEvent.shiftKey; }; };
exports.metaKey = function (jqEvent) { return function () { return jqEvent.metaKey; }; };
exports.shiftKey = function (jqEvent) { return function () { return jqEvent.shiftKey; }; };
exports.which = function (jqEvent) { return function () { return jqEvent.which; }; };
exports.getAttr = function (attr) { return function (jq) { return function () { return jq.attr(attr); }; }; };

exports.unsafeLog = function (a) {
  return function () {
    console.log(a);
  };
};

exports.unsafeTrace = function (a) {
  console.log(a);
  return a;
};

exports.delay = function (f) {
  return function () {
    setTimeout(f, 0);
  };
};

exports.val = function (s) {
  return function () {
    return $(s).val();
  };
}

exports.is = function (s) {
  return function (j) {
    return function () {
      var b = j.is(s)
      console.log(j, "is", s, " = ", b);
      return b;
    };
  };
};

exports.historyPushState_ = function (title, uri) {
  return function () {
    window.history.pushState(null, title, uri.toString());
  }
};

exports.historyReplaceState_ = function (title, uri) {
  return function () {
    window.history.replaceState(null, title, uri.toString());
  }
};

exports.setDocumentTitle = function (title) {
  return function () {
    window.document.title = title;
  };
};

exports.autocomplete_ = function (jq, source, select) {
  return function () {
    jq.autocomplete
      ( { source : source
        , select : function (_, v) { select(v)(); }
        }
      )
  };
};

exports.formatDate_ = function (d) {
    return (new Date(d)).toISOString().split('.')[0]+"Z";
};

exports.posixSecondsToISOStr = function (pt) {
    return new Date((pt || 0)*1000.0).toISOString().slice(0,-5)+"Z";
};

exports.undefine_ = function (a) {
  return function (nothing) {
    return function (just) {
      if (a === undefined) {
        return nothing;
      } else {
        just.value0 = a
        return just;
      }
    };
  };
};

exports.tabs = function (t) {
  return function () {
    t.tabs();
  };
};

exports.scrollMaxY = function (window) {
    return function () {
        return window.scrollMaxY;
    };
};
