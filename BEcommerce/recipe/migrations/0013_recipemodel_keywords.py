# Generated by Django 4.2 on 2023-06-06 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0012_alter_recipemodel_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipemodel',
            name='keywords',
            field=models.JSONField(default=list, verbose_name='keywords'),
        ),
    ]