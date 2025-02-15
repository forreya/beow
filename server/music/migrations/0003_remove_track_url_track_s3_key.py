# Generated by Django 5.1.4 on 2025-01-26 12:32

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0002_alter_track_channels_alter_track_featuring_artists'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='track',
            name='url',
        ),
        migrations.AddField(
            model_name='track',
            name='s3_key',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
    ]
