from django.forms import ModelForm
from django_reactpack.garden.models import Garden, Plant, Bed


class GardenForm(ModelForm):
    class Meta:
        model: Garden
        fields = ['name', 'gardener']


class BedForm(ModelForm):
    class Meta:
        model: Bed
        fields = ['name', 'description', 'garden', 'width', 'length', 'solar_requirements']


class PlantForm(ModelForm):
    class Meta:
        model: Plant
