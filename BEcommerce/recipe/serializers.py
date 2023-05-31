from rest_framework import serializers
from . import models


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.RecipeModel
        fields = ('name', 'id', 'origin', 'calories_ps', 'difficulty', 'products',
                  'intro', 'ingredients', 'recipe_book',  'photo_url', 'time_lapse')
