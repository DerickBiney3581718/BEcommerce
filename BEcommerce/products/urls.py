from django.urls import path, include
from .views import ListProducts, RetrieveProduct

urlpatterns = [
    path('', ListProducts.as_view()),
    path('<int:pk>/', RetrieveProduct.as_view())

]
