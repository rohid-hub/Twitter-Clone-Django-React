from django.contrib import admin
from django.urls import path, include
from frontend.views import index

urlpatterns = [
    path('', index),
    path('api/', include("tweets.api.urls")),
    path('admin/', admin.site.urls),
]
