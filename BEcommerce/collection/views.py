from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.response import Response
# from django.views import View
from rest_framework.views import APIView

from rest_framework import generics, permissions, authentication
from django.views.generic.base import TemplateView
from .models import CollectionModel
from .serializers import CollectionSerializer
from recipe.serializers import RecipeSerializer

# Create your views here.
#  TODO: SHOW TEMPLATE ACCORDINGLY
#  TODO: SEND ALL COLLECTIONS


class DashboardView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["message"] = 'Norway is great'
        return context


class ListCollections(generics.ListAPIView):
    queryset = CollectionModel.objects.all()
    serializer_class = CollectionSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [
    #     authentication.SessionAuthentication, authentication.TokenAuthentication]


class RetrieveCollections(generics.RetrieveAPIView):
    queryset = CollectionModel.objects.all()
    serializer_class = CollectionSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # authentication_classes = [
    #     authentication.SessionAuthentication, authentication.TokenAuthentication]


class ListRecipesOfCollection(APIView):
    #     queryset= CollectionModel.objects.get()
    #     serializer_class = CollectionSerializer
    context_object_name = "my_favorite_publishers"

    def get(self, request, pk):
        temp = CollectionModel.objects.get(id=pk)
        recipes_found = list(temp.recipes.all().values())
        print(recipes_found)
        return Response(data=recipes_found)

    # contexts are reserved for django templates I presume
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["list_of_collections"] = CollectionModel.objects.all()
        return context

class ListRecipesOfCollection2(generics.ListAPIView):
        serializer_class = RecipeSerializer
        model = CollectionModel
        
        # def get_object(self):
        #     self.objec = super().get_object()
        #     return self.objec
        
        def get_queryset(self):
            q = CollectionModel.objects.get(id=self.kwargs['pk'])
            # print(self.objec)
            return q.recipes.all()
