# Generated by Django 4.2 on 2023-05-24 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0009_recipemodel_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipemodel',
            name='photo',
            field=models.ImageField(blank=True, upload_to='uploads'),
        ),
    ]
