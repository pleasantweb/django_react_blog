from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from blog import views
from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register('blogapi',views.BlogModelViewSet,basename='blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/',include(router.urls)),
]
