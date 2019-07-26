from django.views.generic import TemplateView
from django_reactpack.garden.models import Garden
import json


class GardensView(TemplateView):
    template_name = "gardens.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['gardens'] = self.get_gardens()

    def get_gardens(self):
        gardens = Garden.objects.prefetch_related().all()
        garden_objs = []
        for garden in gardens:
            garden_obj = {}
            garden_obj['id'] = garden.pk
            garden_obj['name'] = garden.name
            garden_obj['description'] = garden.description



class GardensView(TemplateView):
    template_name = '/'


