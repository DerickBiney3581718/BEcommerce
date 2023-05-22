from django.urls import path, include
from .views import ListOrders,RetrieveOrder

urlpatterns = [
    path('', ListOrders.as_view()),
    path('<int:pk>/', RetrieveOrder.as_view())

]
