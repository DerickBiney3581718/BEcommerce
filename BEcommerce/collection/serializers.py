from rest_framework import serializers
from . import models


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CollectionModel
        fields = ('id', 'name', 'number_of_recipes', 'recipes', 'descript')
