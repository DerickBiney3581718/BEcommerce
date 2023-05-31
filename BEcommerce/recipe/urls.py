from django.urls import path, include
from .views import ListRecipes, RetrieveRecipe, ListProductsOfRecipe

urlpatterns = [
    path('', ListRecipes.as_view()),
    path('<int:pk>/products', ListProductsOfRecipe.as_view()),

    path('<int:pk>/', RetrieveRecipe.as_view())

]
