// Override Timeline to show exact timestamp instead of relative time

frappe.ui.form.Timeline = class CustomTimeline extends frappe.ui.form.Timeline {
    render_timeline_items() {
        super.render_timeline_items();

        setTimeout(() => {
            document.querySelectorAll(".frappe-timestamp").forEach(el => {
                const dt = el.getAttribute("data-timestamp");
                if (dt) {
                    el.innerText = frappe.datetime.str_to_user(dt);
                }
            });
        }, 300);
    }
};
