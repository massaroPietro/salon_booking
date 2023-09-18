from django.utils.translation import gettext_lazy as _

LANGUAGES = (
    ('en', _("English")),
    ('it', _('Italian'))
)

WEEKDAYS = [
    (0, _("Tuesday")),
    (1, _("Wednesday")),
    (2, _("Thursday")),
    (3, _("Friday")),
    (4, _("Saturday")),
    (5, _("Sunday")),
    (6, _("Monday")),
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
