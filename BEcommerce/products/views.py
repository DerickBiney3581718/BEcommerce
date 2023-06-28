
from django.shortcuts import render
from rest_framework import generics, permissions, authentication
from .models import ProductModel
from .serializers import ProductSerializer

# Create your views here.
#  TODO: SHOW TEMPLATE ACCORDINGLY
#  TODO: SEND ALL COLLECTIONS


class ListProducts(generics.ListAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [
    #     authentication.SessionAuthentication, authentication.TokenAuthentication]


class RetrieveProduct(generics.RetrieveAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [
    #     authentication.SessionAuthentication, authentication.TokenAuthentication]


class ListFilteredSubset(generics.ListAPIView):
    queryset = ProductModel
    serializer_class = ProductSerializer

    def get_queryset(self):
        q = ProductModel.objects.filter(pk__in=self.kwargs['subset'])
        return q
