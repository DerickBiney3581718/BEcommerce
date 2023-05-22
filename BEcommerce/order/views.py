
from django.shortcuts import render
from rest_framework import generics, permissions, authentication
from django.views.generic.base import TemplateView
from .models import OrderModel
from .serializers import OrderSerializer

# Create your views here.
#  TODO: SHOW TEMPLATE ACCORDINGLY
#  TODO: SEND ALL COLLECTIONS


class ListOrders(generics.ListAPIView):
    queryset = OrderModel.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]


class RetrieveOrder(generics.RetrieveAPIView):
    queryset = OrderModel.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]
