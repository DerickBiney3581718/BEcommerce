# Generated by Django 4.2 on 2023-05-23 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0005_alter_recipemodel_date_added'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipemodel',
            name='ingredients',
            field=models.JSONField(default=[], verbose_name='ingredients'),
        ),
    ]
