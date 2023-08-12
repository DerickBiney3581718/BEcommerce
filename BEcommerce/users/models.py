from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class User(models.Model):

    user = models.OneToOneField(User, verbose_name=("django User"), on_delete=models.CASCADE, null=True)
    profile_pic = models.ImageField(upload_to='profile_pictures/', height_field=None, width_field=None, max_length=None)

    class Meta:
        verbose_name = ("User")
        verbose_name_plural = ("Users")

    def __str__(self):
        return self.user.email

    def get_absolute_url(self):
        return reverse("User_detail", kwargs={"pk": self.pk})
