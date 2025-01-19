from django.urls import path
from .views import get_track

urlpatterns = [
	path('tracks/', get_track, name='get_track')
]