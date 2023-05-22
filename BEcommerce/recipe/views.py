

from django.shortcuts import render
from rest_framework import generics, permissions, authentication
from .models import RecipeModel
from .serializers import RecipeSerializer

# Create your views here.
#  TODO: SHOW TEMPLATE ACCORDINGLY
#  TODO: SEND ALL COLLECTIONS


class ListRecipes(generics.ListAPIView):
    queryset = RecipeModel.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]


class RetrieveRecipe(generics.RetrieveAPIView):
    queryset = RecipeModel.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [
        authentication.SessionAuthentication, authentication.TokenAuthentication]
