# Generated by Django 4.2 on 2023-07-07 21:35

from django.db import migrations, models
import mwitu.models


class Migration(migrations.Migration):

    dependencies = [
        ('mwitu', '0002_site_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='comment',
            field=models.JSONField(default=mwitu.models.json_field_default),
        ),
        migrations.AlterField(
            model_name='site',
            name='about',
            field=models.JSONField(default=mwitu.models.json_field_default),
        ),
    ]
