# Generated by Django 4.1.6 on 2023-03-17 14:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0004_alter_recipemodel_date_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipemodel',
            name='date_added',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
