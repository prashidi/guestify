from rest_framework import viewsets

from .models import Guest
from .serializers import GuestSerializer

class GuestViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing guest instances.
    """
    serializer_class = GuestSerializer
    queryset = Guest.objects.all()