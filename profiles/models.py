from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)

    def fullname(self):
        return f"{self.user.firstname} {self.user.last_name}"

    def __str__(self):
        return self.user.username


def createProfile(sender, **kwargs):
    userargs = kwargs['instance']
    if kwargs['created']:
        user_profile = Profile.objects.create(user=userargs)


post_save.connect(createProfile, sender=User)
