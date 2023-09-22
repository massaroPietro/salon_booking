from django.utils.translation import gettext_lazy as _

LANGUAGES = (
    ('en', _("English")),
    ('it', _('Italian'))
)

WEEKDAYS = [
    (0, _("Monday")),
    (1, _("Tuesday")),
    (2, _("Wednesday")),
    (3, _("Thursday")),
    (4, _("Friday")),
    (5, _("Saturday")),
    (6, _("Sunday")),
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
