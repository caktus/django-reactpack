# Generated by Django 2.2.3 on 2019-07-26 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('garden', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='garden',
            name='description',
            field=models.CharField(blank=True, max_length=128),
        ),
    ]
