from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Track
from .serializer import TrackSerializer

@api_view(['GET'])
def get_track(request):
	tracks = Track.objects.all()
	serializer = TrackSerializer(tracks, many=True)
	return Response(serializer.data)