from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Track
from .serializer import TrackSerializer
import random

@api_view(['GET'])
def get_track(request):
	max_id = Track.objects.order_by('-id')[0].id # type: ignore
	random_id = random.randint(1, max_id)
	random_track = Track.objects.filter(id__gte=random_id)[0]
	serializer = TrackSerializer(random_track)
	return Response(serializer.data)