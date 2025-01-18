from django.contrib import admin
from .models import Track
# Register your models here.

@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'release_date')