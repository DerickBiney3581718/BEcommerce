

from django.shortcuts import render
from rest_framework import generics, permissions, authentication
from .models import RecipeModel
from .serializers import RecipeSerializer
from products.serializers import ProductSerializer

# Create your views here.
#  TODO: SHOW TEMPLATE ACCORDINGLY
#  TODO: SEND ALL COLLECTIONS


class ListRecipes(generics.ListAPIView):
    queryset = RecipeModel.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [
    #     authentication.SessionAuthentication, authentication.TokenAuthentication]


class RetrieveRecipe(generics.RetrieveAPIView):
    queryset = RecipeModel.objects.all()
    serializer_class = RecipeSerializer



class ListProductsOfRecipe(generics.ListAPIView):
        serializer_class = ProductSerializer
        model = RecipeModel
        
        # def get_object(self):
        #     self.objec = super().get_object()
        #     return self.objec
        
        def get_queryset(self):
            q = RecipeModel.objects.get(id=self.kwargs['pk'])
            # print(self.objec)
            return q.products.all()