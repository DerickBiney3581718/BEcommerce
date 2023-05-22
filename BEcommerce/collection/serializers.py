from rest_framework import serializers
from . import models

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CollectionModel
        fields = ('__all__')   


