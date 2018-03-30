from django.urls import path
from rest_framework import routers
from .api import ListViewSet, CardViewSet

router = routers.SimpleRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)
urlpatterns = router.urls