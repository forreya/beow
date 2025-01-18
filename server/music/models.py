from django.db import models

# Create your models here.
class Track(models.Model):
	title = models.CharField(max_length=255)
	artist = models.CharField(max_length=255)
	url = models.URLField()
	release_date = models.DateField()