from django.views.generic import TemplateView, View
from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import get_object_or_404, render
from django_reactpack.garden.models import Garden
import json


class GardensView(TemplateView):
    template_name = "gardens.html"


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['gardens'] = json.dumps(self.get_gardens())
        return context

    def get_gardens(self):
        gardens = Garden.objects.prefetch_related().all()
        garden_objs = []
        for garden in gardens:
            garden_obj = {}
            garden_obj['id'] = garden.pk
            garden_obj['name'] = garden.name
            garden_obj['description'] = garden.description
            beds = garden.bed_set.all()
            plants = 0
            for bed in beds:
                plants += bed.plant_set.all().count()
            garden_obj['beds_num'] = beds.count()
            garden_obj['plants'] = plants
            garden_objs.append(garden_obj)
        return garden_objs


class GardenView(View):

    def get(self, request, *args, **kwargs):
        garden = get_object_or_404(Garden, pk=kwargs['id'])
        return render(request, 'garden/garden.html', context={'garden': json.dumps(garden, cls=DjangoJSONEncoder, ensure_ascii=False)})



