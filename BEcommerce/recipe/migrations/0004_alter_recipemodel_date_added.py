# Generated by Django 4.1.6 on 2023-03-17 14:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0003_recipemodel_date_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipemodel',
            name='date_added',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 17, 14, 21, 46, 818342, tzinfo=datetime.timezone.utc)),
        ),
    ]
