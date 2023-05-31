from rest_framework import serializers
from . import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductModel
        fields = ('id', 'name', 'price', 'descript',
                  'brand', 'available', 'photo_url')
