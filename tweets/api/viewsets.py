from rest_framework import viewsets, permissions
from tweets.models import Tweet
from tweets.api.serializers import TweetSerializer


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TweetSerializer
