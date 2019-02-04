from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView


def health(request):
    return HttpResponse(status=200)


class TestCeleryView(APIView):
    """
    Test a Celery setup
    """

    def get(self, request, format=None):
        from .celery import add

        add.delay(4, 4)
        return JsonResponse({"status": "OK"})