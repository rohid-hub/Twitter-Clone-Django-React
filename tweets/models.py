from django.db import models


class Tweet(models.Model):
    text = models.TextField(max_length=300, blank=False)
    # author
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.text[0:100]} ..."
