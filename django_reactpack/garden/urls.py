from django.urls import path
from django_reactpack.garden.views import GardensView

app_name = "gardens"

urlpatterns = [
    path("gardens/", view=GardensView),
]
