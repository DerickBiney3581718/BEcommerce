# Generated by Django 4.2 on 2023-05-24 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection', '0004_remove_collectionmodel_number_of_recipes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectionmodel',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]