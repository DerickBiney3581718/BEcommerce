from django.shortcuts import render
from .models import User
from django.views import generic
from pathlib import Path
import os
# Create your views here.
BASE_DIR = os.getcwd()

class AuthorListView(generic.ListView):
    model = User
    paginate_by = 10
    template_name ='index.html'
