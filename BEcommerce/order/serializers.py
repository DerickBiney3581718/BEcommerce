from rest_framework import serializers
from . import models


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderModel
        fields = ('products', 'product_list', 'timestamp',
                  'amount_paid', 'total_sum', 'is_paid')
