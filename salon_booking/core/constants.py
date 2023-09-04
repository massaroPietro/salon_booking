from django.utils.translation import gettext_lazy as _

LANGUAGES = (
    ('en', _("English")),
    ('it', _('Italian'))
)

WEEKDAYS = [
    (1, _("Monday")),
    (2, _("Tuesday")),
    (3, _("Wednesday")),
    (4, _("Thursday")),
    (5, _("Friday")),
    (6, _("Saturday")),
    (7, _("Sunday")),
]

# -----------------------------

PENDING_STATUS = "pending"
REJECTED_STATUS = "accepted"
ACCEPTED_STATUS = "rejected"

INVITATION_STATUS = (
    (PENDING_STATUS, _("Pending")),
    (ACCEPTED_STATUS, _("Accepted")),
    (REJECTED_STATUS, _("Rejected")),
)
