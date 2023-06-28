from django.urls import path, include
from .views import ListCollections, RetrieveCollections, ListRecipesOfCollection, ListRecipesOfCollection2, ListOfFilteredCollections

urlpatterns = [
    path('keyword=<str:keyword>/', ListOfFilteredCollections.as_view()),
    path('', ListCollections.as_view()),
    path('<int:pk>/', RetrieveCollections.as_view()),
    path('<int:pk>/recipes', ListRecipesOfCollection2.as_view()),


]


