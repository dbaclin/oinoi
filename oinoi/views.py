from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse


def home(request):
    t = get_template('home2.html')
    html = t.render(Context())
    return HttpResponse(html)


def analyze(request):
    t = get_template('analyze.html')
    html = t.render(Context())
    return HttpResponse(html)


    
    