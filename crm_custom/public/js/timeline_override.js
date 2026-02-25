// GLOBAL override to disable relative time in Frappe v15

frappe.ready(function () {

    if (window.moment) {
        const originalFromNow = moment.fn.fromNow;

        moment.fn.fromNow = function () {
            return this.format("DD-MM-YYYY hh:mm A");
        };
    }

});
