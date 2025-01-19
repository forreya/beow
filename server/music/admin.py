from django.contrib import admin
from .models import Track, Channel
# Register your models here.

@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
	list_display = ('title', 'artist', 'release_date')

@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
	list_display = ['name']