from rest_framework import serializers
from .models import Track
import os

class TrackSerializer(serializers.ModelSerializer):
	s3_url = serializers.SerializerMethodField('get_s3_url')

	def get_s3_url(self, track):
		AWS_BUCKET_NAME = os.getenv('AWS_BUCKET_NAME')
		AWS_BUCKET_REGION = os.getenv('AWS_BUCKET_REGION')
		return f"http://{AWS_BUCKET_NAME}.s3.{AWS_BUCKET_REGION}.amazonaws.com/audio/{track.s3_key}"

	class Meta:
		model = Track
		fields = ['title', 'artist', 'featuring_artists', 's3_url']