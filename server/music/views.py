from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Track
from .serializer import TrackSerializer

@api_view(['GET'])
def get_track(request):
	serializer = TrackSerializer(data= {
			'title': 'Test Song',
			'artist': 'Test Artist',
			'featuring_artists': None,
			'url': 'https://www.google.com/',
			'release_date': '2001-07-12',
			'channels': [],
		})
	try:
		serializer.is_valid(raise_exception=True)
	except:
		print(serializer.errors)
	return Response(serializer.validated_data)
