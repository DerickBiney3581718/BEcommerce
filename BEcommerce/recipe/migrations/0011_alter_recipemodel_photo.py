# Generated by Django 4.2 on 2023-05-24 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0010_alter_recipemodel_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipemodel',
            name='photo',
            field=models.ImageField(blank=True, upload_to='images/uploads'),
        ),
    ]