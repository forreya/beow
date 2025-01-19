from django.db import models

class Channel(models.Model):
	name = models.CharField(max_length=255)

	def __str__(self):
		return self.name

class Track(models.Model):
	title = models.CharField(max_length=200)
	artist = models.CharField(max_length=200)
	featuring_artists = models.CharField(max_length=500, null=True)
	url = models.URLField()
	release_date = models.DateField()
	channels = models.ManyToManyField(Channel, blank=True)

	def __str__(self):
		return self.title + " - " + self.artist