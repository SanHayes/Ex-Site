!
function(e) {
    function t() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    var i = function(t, i) {
        var n = this;
        this.element = e(t),
        this.language = i.language || this.element.data("date-language") || "zh-cn",
        this.language = this.language in s ? this.language: "zh-cn",
        this.isRTL = s[this.language].rtl || !1,
        this.formatType = i.formatType || this.element.data("format-type") || "standard",
        this.format = a.parseFormat(i.format || this.element.data("date-format") || s[this.language].format || a.getDefaultFormat(this.formatType, "input"), this.formatType),
        this.isInline = !1,
        this.isVisible = !1,
        this.isInput = this.element.is("input"),
        this.component = this.element.is(".date") ? this.element.find(".input-group-addon .icon-th, .input-group-addon .icon-time, .input-group-addon .icon-calendar").parent() : !1,
        this.componentReset = this.element.is(".date") ? this.element.find(".input-group-addon .icon-remove").parent() : !1,
        this.hasInput = this.component && this.element.find("input").length,
        this.component && 0 === this.component.length && (this.component = !1),
        this.linkField = i.linkField || this.element.data("link-field") || !1,
        this.linkFormat = a.parseFormat(i.linkFormat || this.element.data("link-format") || a.getDefaultFormat(this.formatType, "link"), this.formatType),
        this.minuteStep = i.minuteStep || this.element.data("minute-step") || 5,
        this.pickerPosition = i.pickerPosition || this.element.data("picker-position") || "bottom-right",
        this.showMeridian = i.showMeridian || this.element.data("show-meridian") || !1,
        this.initialDate = i.initialDate || new Date,
        this._attachEvents(),
        this.formatViewType = "datetime",
        "formatViewType" in i ? this.formatViewType = i.formatViewType: "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")),
        this.minView = 0,
        "minView" in i ? this.minView = i.minView: "minView" in this.element.data() && (this.minView = this.element.data("min-view")),
        this.minView = a.convertViewMode(this.minView),
        this.maxView = a.modes.length - 1,
        "maxView" in i ? this.maxView = i.maxView: "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")),
        this.maxView = a.convertViewMode(this.maxView),
        this.wheelViewModeNavigation = !1,
        "wheelViewModeNavigation" in i ? this.wheelViewModeNavigation = i.wheelViewModeNavigation: "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")),
        this.wheelViewModeNavigationInverseDirection = !1,
        "wheelViewModeNavigationInverseDirection" in i ? this.wheelViewModeNavigationInverseDirection = i.wheelViewModeNavigationInverseDirection: "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")),
        this.wheelViewModeNavigationDelay = 100,
        "wheelViewModeNavigationDelay" in i ? this.wheelViewModeNavigationDelay = i.wheelViewModeNavigationDelay: "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")),
        this.startViewMode = 2,
        "startView" in i ? this.startViewMode = i.startView: "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")),
        this.startViewMode = a.convertViewMode(this.startViewMode),
        this.viewMode = this.startViewMode,
        this.viewSelect = this.minView,
        "viewSelect" in i ? this.viewSelect = i.viewSelect: "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")),
        this.viewSelect = a.convertViewMode(this.viewSelect),
        this.forceParse = !0,
        "forceParse" in i ? this.forceParse = i.forceParse: "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse")),
        this.picker = e(a.template).appendTo(this.isInline ? this.element: "body").on({
            click: e.proxy(this.click, this),
            mousedown: e.proxy(this.mousedown, this)
        }),
        this.wheelViewModeNavigation && (e.fn.mousewheel ? this.picker.on({
            mousewheel: e.proxy(this.mousewheel, this)
        }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),
        this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"),
        this.isRTL && (this.picker.addClass("datetimepicker-rtl"), this.picker.find(".prev span, .next span").toggleClass("fa-arrow-left fa-arrow-right")),
        e(document).on("mousedown", 
        function(t) {
            0 === e(t.target).closest(".datetimepicker").length && n.hide()
        }),
        this.autoclose = !1,
        "autoclose" in i ? this.autoclose = i.autoclose: "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")),
        this.keyboardNavigation = !0,
        "keyboardNavigation" in i ? this.keyboardNavigation = i.keyboardNavigation: "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")),
        this.todayBtn = i.todayBtn || this.element.data("date-today-btn") || !1,
        this.todayHighlight = i.todayHighlight || this.element.data("date-today-highlight") || !1,
        this.weekStart = (i.weekStart || this.element.data("date-weekstart") || s[this.language].weekStart || 0) % 7,
        this.weekEnd = (this.weekStart + 6) % 7,
        this.startDate = -1 / 0,
        this.endDate = 1 / 0,
        this.daysOfWeekDisabled = [],
        this.setStartDate(i.startDate || this.element.data("date-startdate")),
        this.setEndDate(i.endDate || this.element.data("date-enddate")),
        this.setDaysOfWeekDisabled(i.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.showMode(),
        this.isInline && this.show()
    };
    i.prototype = {
        constructor: i,
        _events: [],
        _attachEvents: function() {
            this._detachEvents(),
            this.isInput ? this._events = [[this.element, {
                focus: e.proxy(this.show, this),
                keyup: e.proxy(this.update, this),
                keydown: e.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? (this._events = [[this.element.find("input"), {
                focus: e.proxy(this.show, this),
                keyup: e.proxy(this.update, this),
                keydown: e.proxy(this.keydown, this)
            }], [this.component, {
                click: e.proxy(this.show, this)
            }]], this.componentReset && this._events.push([this.componentReset, {
                click: e.proxy(this.reset, this)
            }])) : this.element.is("div") ? this.isInline = !0: this._events = [[this.element, {
                click: e.proxy(this.show, this)
            }]];
            for (var t, i, s = 0; s < this._events.length; s++) t = this._events[s][0],
            i = this._events[s][1],
            t.on(i)
        },
        _detachEvents: function() {
            for (var e, t, i = 0; i < this._events.length; i++) e = this._events[i][0],
            t = this._events[i][1],
            e.off(t);
            this._events = []
        },
        show: function(t) {
            this.picker.show(),
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(),
            this.forceParse && this.update(),
            this.place(),
            e(window).on("resize", e.proxy(this.place, this)),
            t && (t.stopPropagation(), t.preventDefault()),
            this.isVisible = !0,
            this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function() {
            this.isVisible && (this.isInline || (this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
                type: "hide",
                date: this.date
            })))
        },
        remove: function() {
            this._detachEvents(),
            this.picker.remove(),
            delete this.picker,
            delete this.element.data().datetimepicker
        },
        getDate: function() {
            var e = this.getUTCDate();
            return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        },
        getUTCDate: function() {
            return this.date
        },
        setDate: function(e) {
            this.setUTCDate(new Date(e.getTime() - 6e4 * e.getTimezoneOffset()))
        },
        setUTCDate: function(e) {
            e >= this.startDate && e <= this.endDate ? (this.date = e, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
                type: "outOfRange",
                date: e,
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        setFormat: function(e) {
            this.format = a.parseFormat(e, this.formatType);
            var t;
            this.isInput ? t = this.element: this.component && (t = this.element.find("input")),
            t && t.val() && this.setValue()
        },
        setValue: function() {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t) : (this.component && this.element.find("input").val(t), this.element.data("date", t)),
            this.linkField && e("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        },
        getFormattedDate: function(e) {
            return void 0 == e && (e = this.format),
            a.formatDate(this.date, e, this.language, this.formatType)
        },
        setStartDate: function(e) {
            this.startDate = e || -1 / 0,
            this.startDate !== -1 / 0 && (this.startDate = a.parseDate(this.startDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setEndDate: function(e) {
            this.endDate = e || 1 / 0,
            1 / 0 !== this.endDate && (this.endDate = a.parseDate(this.endDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(t) {
            this.daysOfWeekDisabled = t || [],
            e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)),
            this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled, 
            function(e) {
                return parseInt(e, 10)
            }),
            this.update(),
            this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var t = 0;
                e("div").each(function() {
                    var i = parseInt(e(this).css("zIndex"), 10);
                    i > t && (t = i)
                });
                var i,
                s,
                a,
                n = t + 10;
                this.component ? (i = this.component.offset(), a = i.left, ("bottom-left" == this.pickerPosition || "top-left" == this.pickerPosition) && (a += this.component.outerWidth() - this.picker.outerWidth())) : (i = this.element.offset(), a = i.left),
                s = "top-left" == this.pickerPosition || "top-right" == this.pickerPosition ? i.top - this.picker.outerHeight() : i.top + this.height,
                this.picker.css({
                    top: s,
                    left: a,
                    zIndex: n
                })
            }
        },
        update: function() {
            var e,
            t = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (e = arguments[0], t = !0) : (e = this.element.data("date") || (this.isInput ? this.element.val() : this.element.find("input").val()) || this.initialDate, ("string" == typeof e || e instanceof String) && (e = e.replace(/^\s+|\s+$/g, ""))),
            e || (e = new Date, t = !1),
            this.date = a.parseDate(e, this.format, this.language, this.formatType),
            t && this.setValue(),
            this.viewDate = this.date < this.startDate ? new Date(this.startDate) : this.date > this.endDate ? new Date(this.endDate) : new Date(this.date),
            this.fill()
        },
        fillDow: function() {
            for (var e = this.weekStart, t = "<tr>"; e < this.weekStart + 7;) t += '<th class="dow">' + s[this.language].daysMin[e++%7] + "</th>";
            t += "</tr>",
            this.picker.find(".datetimepicker-days thead").append(t)
        },
        fillMonths: function() {
            for (var e = "", t = 0; 12 > t;) e += '<span class="month">' + s[this.language].monthsShort[t++] + "</span>";
            this.picker.find(".datetimepicker-months td").html(e)
        },
        fill: function() {
            if (null != this.date && null != this.viewDate) {
                var i = new Date(this.viewDate),
                n = i.getUTCFullYear(),
                h = i.getUTCMonth(),
                o = i.getUTCDate(),
                r = i.getUTCHours(),
                d = i.getUTCMinutes(),
                l = this.startDate !== -1 / 0 ? this.startDate.getUTCFullYear() : -1 / 0,
                u = this.startDate !== -1 / 0 ? this.startDate.getUTCMonth() : -1 / 0,
                c = 1 / 0 !== this.endDate ? this.endDate.getUTCFullYear() : 1 / 0,
                m = 1 / 0 !== this.endDate ? this.endDate.getUTCMonth() : 1 / 0,
                p = new t(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                v = new Date;
                if (this.picker.find(".datetimepicker-days thead th:eq(1)").text(s[this.language].months[h] + " " + n), "time" == this.formatViewType) {
                    var g = r % 12 ? r % 12: 12,
                    f = (10 > g ? "0": "") + g,
                    w = (10 > d ? "0": "") + d,
                    D = s[this.language].meridiem[12 > r ? 0: 1];
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(f + ":" + w + " " + D.toUpperCase()),
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(f + ":" + w + " " + D.toUpperCase())
                } else this.picker.find(".datetimepicker-hours thead th:eq(1)").text(o + " " + s[this.language].months[h] + " " + n),
                this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(o + " " + s[this.language].months[h] + " " + n);
                this.picker.find("tfoot th.today").text(s[this.language].today).toggle(this.todayBtn !== !1),
                this.updateNavArrows(),
                this.fillMonths();
                var y = t(n, h - 1, 28, 0, 0, 0, 0),
                T = a.getDaysInMonth(y.getUTCFullYear(), y.getUTCMonth());
                y.setUTCDate(T),
                y.setUTCDate(T - (y.getUTCDay() - this.weekStart + 7) % 7);
                var M = new Date(y);
                M.setUTCDate(M.getUTCDate() + 42),
                M = M.valueOf();
                for (var C, k = []; y.valueOf() < M;) y.getUTCDay() == this.weekStart && k.push("<tr>"),
                C = "",
                y.getUTCFullYear() < n || y.getUTCFullYear() == n && y.getUTCMonth() < h ? C += " old": (y.getUTCFullYear() > n || y.getUTCFullYear() == n && y.getUTCMonth() > h) && (C += " new"),
                this.todayHighlight && y.getUTCFullYear() == v.getFullYear() && y.getUTCMonth() == v.getMonth() && y.getUTCDate() == v.getDate() && (C += " today"),
                y.valueOf() == p && (C += " active"),
                (y.valueOf() + 864e5 <= this.startDate || y.valueOf() > this.endDate || -1 !== e.inArray(y.getUTCDay(), this.daysOfWeekDisabled)) && (C += " disabled"),
                k.push('<td class="day' + C + '">' + y.getUTCDate() + "</td>"),
                y.getUTCDay() == this.weekEnd && k.push("</tr>"),
                y.setUTCDate(y.getUTCDate() + 1);
                this.picker.find(".datetimepicker-days tbody").empty().append(k.join("")),
                k = [];
                for (var U = "", b = "", V = "", S = 0; 24 > S; S++) {
                    var F = t(n, h, o, S);
                    C = "",
                    F.valueOf() + 36e5 <= this.startDate || F.valueOf() > this.endDate ? C += " disabled": r == S && (C += " active"),
                    this.showMeridian && 2 == s[this.language].meridiem.length ? (b = 12 > S ? s[this.language].meridiem[0] : s[this.language].meridiem[1], b != V && ("" != V && k.push("</fieldset>"), k.push('<fieldset class="hour"><legend>' + b.toUpperCase() + "</legend>")), V = b, U = S % 12 ? S % 12: 12, k.push('<span class="hour' + C + " hour_" + (12 > S ? "am": "pm") + '">' + U + "</span>"), 23 == S && k.push("</fieldset>")) : (U = S + ":00", k.push('<span class="hour' + C + '">' + U + "</span>"))
                }
                this.picker.find(".datetimepicker-hours td").html(k.join("")),
                k = [],
                U = "",
                b = "",
                V = "";
                for (var S = 0; 60 > S; S += this.minuteStep) {
                    var F = t(n, h, o, r, S, 0);
                    C = "",
                    F.valueOf() < this.startDate || F.valueOf() > this.endDate ? C += " disabled": Math.floor(d / this.minuteStep) == Math.floor(S / this.minuteStep) && (C += " active"),
                    this.showMeridian && 2 == s[this.language].meridiem.length ? (b = 12 > r ? s[this.language].meridiem[0] : s[this.language].meridiem[1], b != V && ("" != V && k.push("</fieldset>"), k.push('<fieldset class="minute"><legend>' + b.toUpperCase() + "</legend>")), V = b, U = r % 12 ? r % 12: 12, k.push('<span class="minute' + C + '">' + U + ":" + (10 > S ? "0" + S: S) + "</span>"), 59 == S && k.push("</fieldset>")) : (U = S + ":00", k.push('<span class="minute' + C + '">' + r + ":" + (10 > S ? "0" + S: S) + "</span>"))
                }
                this.picker.find(".datetimepicker-minutes td").html(k.join(""));
                var x = this.date.getUTCFullYear(),
                H = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
                x == n && H.eq(this.date.getUTCMonth()).addClass("active"),
                (l > n || n > c) && H.addClass("disabled"),
                n == l && H.slice(0, u).addClass("disabled"),
                n == c && H.slice(m + 1).addClass("disabled"),
                k = "",
                n = 10 * parseInt(n / 10, 10);
                var N = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
                n -= 1;
                for (var S = -1; 11 > S; S++) k += '<span class="year' + ( - 1 == S || 10 == S ? " old": "") + (x == n ? " active": "") + (l > n || n > c ? " disabled": "") + '">' + n + "</span>",
                n += 1;
                N.html(k),
                this.place()
            }
        },
        updateNavArrows: function() {
            var e = new Date(this.viewDate),
            t = e.getUTCFullYear(),
            i = e.getUTCMonth(),
            s = e.getUTCDate(),
            a = e.getUTCHours();
            switch (this.viewMode) {
            case 0:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() && a <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() && a >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 1:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && s <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && s >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 2:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 3:
            case 4:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                })
            }
        },
        mousewheel: function(t) {
            if (t.preventDefault(), t.stopPropagation(), !this.wheelPause) {
                this.wheelPause = !0;
                var i = t.originalEvent,
                s = i.wheelDelta,
                a = s > 0 ? 1: 0 === s ? 0: -1;
                this.wheelViewModeNavigationInverseDirection && (a = -a),
                this.showMode(a),
                setTimeout(e.proxy(function() {
                    this.wheelPause = !1
                },
                this), this.wheelViewModeNavigationDelay)
            }
        },
        click: function(i) {
            i.stopPropagation(),
            i.preventDefault();
            var s = e(i.target).closest("span, td, th, legend");
            if (1 == s.length) {
                if (s.is(".disabled")) return this.element.trigger({
                    type: "outOfRange",
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                }),
                void 0;
                switch (s[0].nodeName.toLowerCase()) {
                case "th":
                    switch (s[0].className) {
                    case "switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        var n = a.modes[this.viewMode].navStep * ("prev" == s[0].className ? -1: 1);
                        switch (this.viewMode) {
                        case 0:
                            this.viewDate = this.moveHour(this.viewDate, n);
                            break;
                        case 1:
                            this.viewDate = this.moveDate(this.viewDate, n);
                            break;
                        case 2:
                            this.viewDate = this.moveMonth(this.viewDate, n);
                            break;
                        case 3:
                        case 4:
                            this.viewDate = this.moveYear(this.viewDate, n)
                        }
                        this.fill();
                        break;
                    case "today":
                        var h = new Date;
                        h = t(h.getFullYear(), h.getMonth(), h.getDate(), h.getHours(), h.getMinutes(), h.getSeconds(), 0),
                        h < this.startDate ? h = this.startDate: h > this.endDate && (h = this.endDate),
                        this.viewMode = this.startViewMode,
                        this.showMode(0),
                        this._setDate(h),
                        this.fill(),
                        this.autoclose && this.hide()
                    }
                    break;
                case "span":
                    if (!s.is(".disabled")) {
                        var o = this.viewDate.getUTCFullYear(),
                        r = this.viewDate.getUTCMonth(),
                        d = this.viewDate.getUTCDate(),
                        l = this.viewDate.getUTCHours(),
                        u = this.viewDate.getUTCMinutes(),
                        c = this.viewDate.getUTCSeconds();
                        if (s.is(".month") ? (this.viewDate.setUTCDate(1), r = s.parent().find("span").index(s), d = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(r), this.element.trigger({
                            type: "changeMonth",
                            date: this.viewDate
                        }), this.viewSelect >= 3 && this._setDate(t(o, r, d, l, u, c, 0))) : s.is(".year") ? (this.viewDate.setUTCDate(1), o = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(o), this.element.trigger({
                            type: "changeYear",
                            date: this.viewDate
                        }), this.viewSelect >= 4 && this._setDate(t(o, r, d, l, u, c, 0))) : s.is(".hour") ? (l = parseInt(s.text(), 10) || 0, (s.hasClass("hour_am") || s.hasClass("hour_pm")) && (12 == l && s.hasClass("hour_am") ? l = 0: 12 != l && s.hasClass("hour_pm") && (l += 12)), this.viewDate.setUTCHours(l), this.element.trigger({
                            type: "changeHour",
                            date: this.viewDate
                        }), this.viewSelect >= 1 && this._setDate(t(o, r, d, l, u, c, 0))) : s.is(".minute") && (u = parseInt(s.text().substr(s.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(u), this.element.trigger({
                            type: "changeMinute",
                            date: this.viewDate
                        }), this.viewSelect >= 0 && this._setDate(t(o, r, d, l, u, c, 0))), 0 != this.viewMode) {
                            var m = this.viewMode;
                            this.showMode( - 1),
                            this.fill(),
                            m == this.viewMode && this.autoclose && this.hide()
                        } else this.fill(),
                        this.autoclose && this.hide()
                    }
                    break;
                case "td":
                    if (s.is(".day") && !s.is(".disabled")) {
                        var d = parseInt(s.text(), 10) || 1,
                        o = this.viewDate.getUTCFullYear(),
                        r = this.viewDate.getUTCMonth(),
                        l = this.viewDate.getUTCHours(),
                        u = this.viewDate.getUTCMinutes(),
                        c = this.viewDate.getUTCSeconds();
                        s.is(".old") ? 0 === r ? (r = 11, o -= 1) : r -= 1: s.is(".new") && (11 == r ? (r = 0, o += 1) : r += 1),
                        this.viewDate.setUTCFullYear(o),
                        this.viewDate.setUTCMonth(r, d),
                        this.element.trigger({
                            type: "changeDay",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 2 && this._setDate(t(o, r, d, l, u, c, 0))
                    }
                    var m = this.viewMode;
                    this.showMode( - 1),
                    this.fill(),
                    m == this.viewMode && this.autoclose && this.hide()
                }
            }
        },
        _setDate: function(e, t) {
            t && "date" != t || (this.date = e),
            t && "view" != t || (this.viewDate = e),
            this.fill(),
            this.setValue();
            var i;
            this.isInput ? i = this.element: this.component && (i = this.element.find("input")),
            i && (i.change(), this.autoclose && (!t || "date" == t)),
            this.element.trigger({
                type: "changeDate",
                date: this.date
            })
        },
        moveMinute: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCMinutes(i.getUTCMinutes() + t * this.minuteStep),
            i
        },
        moveHour: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCHours(i.getUTCHours() + t),
            i
        },
        moveDate: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCDate(i.getUTCDate() + t),
            i
        },
        moveMonth: function(e, t) {
            if (!t) return e;
            var i,
            s,
            a = new Date(e.valueOf()),
            n = a.getUTCDate(),
            h = a.getUTCMonth(),
            o = Math.abs(t);
            if (t = t > 0 ? 1: -1, 1 == o) s = -1 == t ? 
            function() {
                return a.getUTCMonth() == h
            }: function() {
                return a.getUTCMonth() != i
            },
            i = h + t,
            a.setUTCMonth(i),
            (0 > i || i > 11) && (i = (i + 12) % 12);
            else {
                for (var r = 0; o > r; r++) a = this.moveMonth(a, t);
                i = a.getUTCMonth(),
                a.setUTCDate(n),
                s = function() {
                    return i != a.getUTCMonth()
                }
            }
            for (; s();) a.setUTCDate(--n),
            a.setUTCMonth(i);
            return a
        },
        moveYear: function(e, t) {
            return this.moveMonth(e, 12 * t)
        },
        dateWithinRange: function(e) {
            return e >= this.startDate && e <= this.endDate
        },
        keydown: function(e) {
            if (this.picker.is(":not(:visible)")) return 27 == e.keyCode && this.show(),
            void 0;
            var t,
            i,
            s,
            a = !1;
            switch (e.keyCode) {
            case 27:
                this.hide(),
                e.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.keyboardNavigation) break;
                t = 37 == e.keyCode ? -1: 1,
                viewMode = this.viewMode,
                e.ctrlKey ? viewMode += 2: e.shiftKey && (viewMode += 1),
                4 == viewMode ? (i = this.moveYear(this.date, t), s = this.moveYear(this.viewDate, t)) : 3 == viewMode ? (i = this.moveMonth(this.date, t), s = this.moveMonth(this.viewDate, t)) : 2 == viewMode ? (i = this.moveDate(this.date, t), s = this.moveDate(this.viewDate, t)) : 1 == viewMode ? (i = this.moveHour(this.date, t), s = this.moveHour(this.viewDate, t)) : 0 == viewMode && (i = this.moveMinute(this.date, t), s = this.moveMinute(this.viewDate, t)),
                this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), e.preventDefault(), a = !0);
                break;
            case 38:
            case 40:
                if (!this.keyboardNavigation) break;
                t = 38 == e.keyCode ? -1: 1,
                viewMode = this.viewMode,
                e.ctrlKey ? viewMode += 2: e.shiftKey && (viewMode += 1),
                4 == viewMode ? (i = this.moveYear(this.date, t), s = this.moveYear(this.viewDate, t)) : 3 == viewMode ? (i = this.moveMonth(this.date, t), s = this.moveMonth(this.viewDate, t)) : 2 == viewMode ? (i = this.moveDate(this.date, 7 * t), s = this.moveDate(this.viewDate, 7 * t)) : 1 == viewMode ? this.showMeridian ? (i = this.moveHour(this.date, 6 * t), s = this.moveHour(this.viewDate, 6 * t)) : (i = this.moveHour(this.date, 4 * t), s = this.moveHour(this.viewDate, 4 * t)) : 0 == viewMode && (i = this.moveMinute(this.date, 4 * t), s = this.moveMinute(this.viewDate, 4 * t)),
                this.dateWithinRange(i) && (this.date = i, this.viewDate = s, this.setValue(), this.update(), e.preventDefault(), a = !0);
                break;
            case 13:
                if (0 != this.viewMode) {
                    var n = this.viewMode;
                    this.showMode( - 1),
                    this.fill(),
                    n == this.viewMode && this.autoclose && this.hide()
                } else this.fill(),
                this.autoclose && this.hide();
                e.preventDefault();
                break;
            case 9:
                this.hide()
            }
            if (a) {
                var h;
                this.isInput ? h = this.element: this.component && (h = this.element.find("input")),
                h && h.change(),
                this.element.trigger({
                    type: "changeDate",
                    date: this.date
                })
            }
        },
        showMode: function(e) {
            if (e) {
                var t = Math.max(0, Math.min(a.modes.length - 1, this.viewMode + e));
                t >= this.minView && t <= this.maxView && (this.element.trigger({
                    type: "changeMode",
                    date: this.viewDate,
                    oldViewMode: this.viewMode,
                    newViewMode: t
                }), this.viewMode = t)
            }
            this.picker.find(">div").hide().filter(".datetimepicker-" + a.modes[this.viewMode].clsName).css("display", "block"),
            this.updateNavArrows()
        },
        reset: function() {
            this._setDate(null, "date")
        }
    },
    e.fn.datetimepicker = function(t) {
        var s = Array.apply(null, arguments);
        return s.shift(),
        this.each(function() {
            var a = e(this),
            n = a.data("datetimepicker"),
            h = "object" == typeof t && t;
            n || a.data("datetimepicker", n = new i(this, e.extend({},
            e.fn.datetimepicker.defaults, h))),
            "string" == typeof t && "function" == typeof n[t] && n[t].apply(n, s)
        })
    },
    e.fn.datetimepicker.defaults = {},
    e.fn.datetimepicker.Constructor = i;
    var s = e.fn.datetimepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["am", "pm"],
            suffix: ["st", "nd", "rd", "th"],
            today: "Today"
        }
    };
    s["zh-cn"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今日",
        suffix: [],
        meridiem: []
    },
    s["zh-tw"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今天",
        suffix: [],
        meridiem: ["上午", "下午"]
    };
    var a = {
        modes: [{
            clsName: "minutes",
            navFnc: "Hours",
            navStep: 1
        },
        {
            clsName: "hours",
            navFnc: "Date",
            navStep: 1
        },
        {
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        },
        {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        },
        {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(e) {
            return 0 === e % 4 && 0 !== e % 100 || 0 === e % 400
        },
        getDaysInMonth: function(e, t) {
            return [31, a.isLeapYear(e) ? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        getDefaultFormat: function(e, t) {
            //if ("standard" == e) return "input" == t ? "yyyy-mm-dd hh:ii": "yyyy-mm-dd hh:ii:ss";
            //if ("php" == e) return "input" == t ? "Y-m-d H:i": "Y-m-d H:i:s";
			if ("standard" == e) return "input" == t ? "yyyy-mm-dd": "yyyy-mm-dd";
            if ("php" == e) return "input" == t ? "Y-m-d": "Y-m-d";
            throw new Error("Invalid format type.")
        },
        validParts: function(e) {
            if ("standard" == e) return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
            if ("php" == e) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
            throw new Error("Invalid format type.")
        },
        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
        parseFormat: function(e, t) {
            var i = e.replace(this.validParts(t), "\0").split("\0"),
            s = e.match(this.validParts(t));
            if (!i || !i.length || !s || 0 == s.length) throw new Error("Invalid date format.");
            return {
                separators: i,
                parts: s
            }
        },
        parseDate: function(a, n, h, o) {
            if (a instanceof Date) {
                var r = new Date(a.valueOf() - 6e4 * a.getTimezoneOffset());
                return r.setMilliseconds(0),
                r
            }
            if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(a) && (n = this.parseFormat("yyyy-mm-dd", o)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(a) && (n = this.parseFormat("yyyy-mm-dd hh:ii", o)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(a) && (n = this.parseFormat("yyyy-mm-dd hh:ii:ss", o)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(a)) {
                var d,
                l,
                u = /([-+]\d+)([dmwy])/,
                c = a.match(/([-+]\d+)([dmwy])/g);
                a = new Date;
                for (var m = 0; m < c.length; m++) switch (d = u.exec(c[m]), l = parseInt(d[1]), d[2]) {
                case "d":
                    a.setUTCDate(a.getUTCDate() + l);
                    break;
                case "m":
                    a = i.prototype.moveMonth.call(i.prototype, a, l);
                    break;
                case "w":
                    a.setUTCDate(a.getUTCDate() + 7 * l);
                    break;
                case "y":
                    a = i.prototype.moveYear.call(i.prototype, a, l)
                }
                return t(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), 0)
            }
            var p,
            v,
            d,
            c = a && a.match(this.nonpunctuation) || [],
            a = new Date(0, 0, 0, 0, 0, 0, 0),
            g = {},
            f = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"],
            w = {
                hh: function(e, t) {
                    return e.setUTCHours(t)
                },
                h: function(e, t) {
                    return e.setUTCHours(t)
                },
                HH: function(e, t) {
                    return e.setUTCHours(12 == t ? 0: t)
                },
                H: function(e, t) {
                    return e.setUTCHours(12 == t ? 0: t)
                },
                ii: function(e, t) {
                    return e.setUTCMinutes(t)
                },
                i: function(e, t) {
                    return e.setUTCMinutes(t)
                },
                ss: function(e, t) {
                    return e.setUTCSeconds(t)
                },
                s: function(e, t) {
                    return e.setUTCSeconds(t)
                },
                yyyy: function(e, t) {
                    return e.setUTCFullYear(t)
                },
                yy: function(e, t) {
                    return e.setUTCFullYear(2e3 + t)
                },
                m: function(e, t) {
                    for (t -= 1; 0 > t;) t += 12;
                    for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() != t;) e.setUTCDate(e.getUTCDate() - 1);
                    return e
                },
                d: function(e, t) {
                    return e.setUTCDate(t)
                },
                p: function(e, t) {
                    return e.setUTCHours(1 == t ? e.getUTCHours() + 12: e.getUTCHours())
                }
            };
            if (w.M = w.MM = w.mm = w.m, w.dd = w.d, w.P = w.p, a = t(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()), c.length == n.parts.length) {
                for (var m = 0, D = n.parts.length; D > m; m++) {
                    if (p = parseInt(c[m], 10), d = n.parts[m], isNaN(p)) switch (d) {
                    case "MM":
                        v = e(s[h].months).filter(function() {
                            var e = this.slice(0, c[m].length),
                            t = c[m].slice(0, e.length);
                            return e == t
                        }),
                        p = e.inArray(v[0], s[h].months) + 1;
                        break;
                    case "M":
                        v = e(s[h].monthsShort).filter(function() {
                            var e = this.slice(0, c[m].length),
                            t = c[m].slice(0, e.length);
                            return e == t
                        }),
                        p = e.inArray(v[0], s[h].monthsShort) + 1;
                        break;
                    case "p":
                    case "P":
                        p = e.inArray(c[m].toLowerCase(), s[h].meridiem)
                    }
                    g[d] = p
                }
                for (var y, m = 0; m < f.length; m++) y = f[m],
                y in g && !isNaN(g[y]) && w[y](a, g[y])
            }
            return a
        },
        formatDate: function(t, i, n, h) {
            if (null == t) return "";
            var o;
            if ("standard" == h) o = {
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear(),
                m: t.getUTCMonth() + 1,
                M: s[n].monthsShort[t.getUTCMonth()],
                MM: s[n].months[t.getUTCMonth()],
                d: t.getUTCDate(),
                D: s[n].daysShort[t.getUTCDay()],
                DD: s[n].days[t.getUTCDay()],
                p: 2 == s[n].meridiem.length ? s[n].meridiem[t.getUTCHours() < 12 ? 0: 1] : "",
                h: t.getUTCHours(),
                i: t.getUTCMinutes(),
                s: t.getUTCSeconds()
            },
            o.H = 2 == s[n].meridiem.length ? 0 == o.h % 12 ? 12: o.h % 12: o.h,
            o.HH = (o.H < 10 ? "0": "") + o.H,
            o.P = o.p.toUpperCase(),
            o.hh = (o.h < 10 ? "0": "") + o.h,
            o.ii = (o.i < 10 ? "0": "") + o.i,
            o.ss = (o.s < 10 ? "0": "") + o.s,
            o.dd = (o.d < 10 ? "0": "") + o.d,
            o.mm = (o.m < 10 ? "0": "") + o.m;
            else {
                if ("php" != h) throw new Error("Invalid format type.");
                o = {
                    y: t.getUTCFullYear().toString().substring(2),
                    Y: t.getUTCFullYear(),
                    F: s[n].months[t.getUTCMonth()],
                    M: s[n].monthsShort[t.getUTCMonth()],
                    n: t.getUTCMonth() + 1,
                    t: a.getDaysInMonth(t.getUTCFullYear(), t.getUTCMonth()),
                    j: t.getUTCDate(),
                    l: s[n].days[t.getUTCDay()],
                    D: s[n].daysShort[t.getUTCDay()],
                    w: t.getUTCDay(),
                    N: 0 == t.getUTCDay() ? 7: t.getUTCDay(),
                    S: t.getUTCDate() % 10 <= s[n].suffix.length ? s[n].suffix[t.getUTCDate() % 10 - 1] : "",
                    a: 2 == s[n].meridiem.length ? s[n].meridiem[t.getUTCHours() < 12 ? 0: 1] : "",
                    g: 0 == t.getUTCHours() % 12 ? 12: t.getUTCHours() % 12,
                    G: t.getUTCHours(),
                    i: t.getUTCMinutes(),
                    s: t.getUTCSeconds()
                },
                o.m = (o.n < 10 ? "0": "") + o.n,
                o.d = (o.j < 10 ? "0": "") + o.j,
                o.A = o.a.toString().toUpperCase(),
                o.h = (o.g < 10 ? "0": "") + o.g,
                o.H = (o.G < 10 ? "0": "") + o.G,
                o.i = (o.i < 10 ? "0": "") + o.i,
                o.s = (o.s < 10 ? "0": "") + o.s
            }
            for (var t = [], r = e.extend([], i.separators), d = 0, l = i.parts.length; l > d; d++) r.length && t.push(r.shift()),
            t.push(o[i.parts[d]]);
            return r.length && t.push(r.shift()),
            t.join("")
        },
        convertViewMode: function(e) {
            switch (e) {
            case 4:
            case "decade":
                e = 4;
                break;
            case 3:
            case "year":
                e = 3;
                break;
            case 2:
            case "month":
                e = 2;
                break;
            case 1:
            case "day":
                e = 1;
                break;
            case 0:
            case "hour":
                e = 0
            }
            return e
        },
        headTemplate: '<thead><tr><th class="prev"><i class="fa fa-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="fa fa-arrow-right"/></th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    a.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + a.headTemplate + "<tbody></tbody>" + a.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + "</table>" + "</div>" + "</div>",
    e.fn.datetimepicker.DPGlobal = a,
    e.fn.datetimepicker.noConflict = function() {
        return e.fn.datetimepicker = old,
        this
    },
    e(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', 
    function(t) {
        var i = e(this);
        i.data("datetimepicker") || (t.preventDefault(), i.datetimepicker("show"))
    }),
    e(function() {
        e('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
} (window.jQuery);