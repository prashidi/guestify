from .views import GuestViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', GuestViewSet, basename='guest')
urlpatterns = router.urls