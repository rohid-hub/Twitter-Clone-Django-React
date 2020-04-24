from rest_framework import routers
from tweets.api.viewsets import TweetViewSet

router = routers.DefaultRouter()
router.register('tweets', TweetViewSet, 'tweets')

urlpatterns = router.urls
