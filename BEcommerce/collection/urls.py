from django.urls import path, include
from .views import ListCollections, RetrieveCollections,ListRecipesOfCollection, ListRecipesOfCollection2

urlpatterns = [
    path('', ListCollections.as_view()),
    path('<int:pk>/', RetrieveCollections.as_view()),
    path('<int:pk>/recipes', ListRecipesOfCollection2.as_view())


]
