from django.contrib import admin
from django.urls import path, include
from frontend.views import index

urlpatterns = [
    path('', index),
    path('api/', include("api.urls")),
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls'))
]
